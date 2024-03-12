const config = require('../config.json');
const jwt = require('jsonwebtoken');
const util = require('util');

const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "shophoa"
};

class HoaController {

    // [GET] /hoa
    async getListHoa(req, res, next) {
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const sqlSelect = `SELECT li.id, li.name, li.image, lo.name AS loai_hoa
                                FROM list_hoa AS li JOIN loai_hoa AS lo ON li.cat_id=lo.id`;
            const listHoa = await query(sqlSelect);
            res.status(200).send(listHoa);
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /hoa/type
    async getListLoaiHoa(req, res, next) {
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const listLoaiHoa = await query(`SELECT * FROM loai_hoa`);
            res.status(200).send(listLoaiHoa);
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }

    // [GET] /hoa/:id
    async getHoaById(req, res, next) {
        var id = req.params.id;
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const sqlSelect = `SELECT li.id, li.name, li.image, lo.id AS id_loai_hoa
            FROM list_hoa AS li JOIN loai_hoa AS lo ON li.cat_id=lo.id WHERE li.id = '${id}'`;
            const hoaById = await query(sqlSelect);
            res.status(200).send(hoaById[0]);
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }

    // [POST] /user/login
    async postLogin(req, res, next) {
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const user = await query(`SELECT * FROM users WHERE username = '${req.body.username}'
                AND password = '${req.body.password}'`)
            // console.log(user[0]);
            if (user && user[0]) {
                const token = jwt.sign({ id: user[0].id, role: user[0].role }, config.secret, {
                    expiresIn: '600000'//10 phút
                });
                const { password, ...userWithoutPassword } = user[0];
                var result = {
                    ...userWithoutPassword,
                    token
                }
                res.status(200).send(result);
            } else {
                throw new Error("Cannot find users!");
            }
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }

    // [POST] /hoa/add
    async postAddHoa(req, res, next) {
        function generateUuid() {
            return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        var { name, type, file } = req.form_data;
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const result = await query(`INSERT INTO list_hoa(id, name, image, cat_id) VALUES (?, ?, ?, ?)`,
                [generateUuid(), name, file, type]);
            res.status(200).send(result);
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }

    // [PUT] /hoa/edit
    async postEditHoa(req, res, next) {
        var { id, name, type, file } = req.form_data;
        // Nếu có chọn ảnh thì update ảnh, nếu không thì lấy lại ảnh cũ
        var imageSql = file ? `image = "${file}"` : `image = image`;
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const result = await query(`UPDATE list_hoa SET name = '${name}', cat_id = '${type}',
                ${imageSql} WHERE id = '${id}'`);
            res.status(200).send(result);
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }

    // [DELETE] /hoa/delete/:id
    async postDelHoa(req, res, next) {
        var id = req.params.id;
        try {
            var conn = mysql.createConnection(configDB);

            const query = util.promisify(conn.query).bind(conn);

            const result = await query(`DELETE FROM list_hoa WHERE id = '${id}'`);
            res.status(200).send(result);
        } catch (err) {
            next(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new HoaController();
