import axios from 'axios';
import { useState, useEffect } from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom';

export default function Add() {

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const [errorName, setErrorName] = useState('');
  const [errorType, setErrorType] = useState('');

  const [listLoaiHoa, setListLoaiHoa] = useState([]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        let result = await axios('http://localhost:3001/hoa/type');
        setListLoaiHoa(result.data);
      } catch (error) {
        setError('Xảy ra lỗi khi lấy dữ liệu!');
      }
    }
    fetchData();
  }, []);

  const handleBlur = (e) => {
    if (e.target.name == 'name') {
      if (!e.target.value) {
        setErrorName('Vui lòng nhập tên!');
      }
    } else if (e.target.name == 'type') {
      if (!e.target.value) {
        setErrorType('Vui lòng chọn loại hoa!');
      }
    }
  }

  const handleInput = (e) => {
    if (e.target.name == 'name') {
      setErrorName('');
    } else if (e.target.name == 'type') {
      setErrorType('');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let check = true;
    if (!name) {
      setErrorName('Vui lòng nhập tên!');
      check = false;
    }
    if (!type) {
      setErrorType('Vui lòng chọn loại hoa!');
      check = false;
    }

    if (check) {
      const formData = new FormData();
      for (const el of e.target) {
        if (el.files) {
          formData.append("file", el.files[0]);
        } else if (el.name) {
          formData.append(el.name, el.value);
        }
      }

      try {
        var results = await axios({
          method: "POST",
          url: "http://localhost:3001/hoa/add",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });

        //handle success
        // console.log('results: ', results);
        navigate('/list', { state: { msg: 'Đã thêm thành công!' } });
      } catch (error) {
        setError('Xảy ra lỗi khi thêm!');
      }
    }
  }

  return (
    <>
      {/* Header */}
      <Header />
      {/* End #header */}
      <div className="container_12">
        {/* Form elements */}
        <div className="grid_12">
          <div className="module">
            <p style={{
              color: 'red',
              backgroundColor: 'yellow',
              fontStyle: 'italic'
            }}>{error}</p>
            <h2>
              <span>Thêm hoa</span>
            </h2>
            <div className="module-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                  <label>Tên hoa</label>
                  <input type="text" name="name" value={name}
                    className={errorName ? 'input-medium invalid' : "input-medium"}
                    onBlur={(e) => handleBlur(e)}
                    onInput={(e) => handleInput(e)}
                    onChange={(e) => { setName(e.target.value) }}
                  />
                  <span style={{
                    color: 'red',
                    fontStyle: 'italic'
                  }}>{errorName}</span>
                </div>
                <div>
                  <label>Loại hoa</label>
                  <select name="type" value={type}
                    onBlur={(e) => handleBlur(e)}
                    onInput={(e) => handleInput(e)}
                    onChange={(e) => { setType(e.target.value) }}
                    className={errorType ? 'input-short invalid' : "input-short"}
                  >
                    <option value="">-- Chọn loại hoa --</option>
                    {listLoaiHoa.map(loai =>
                      <option key={loai.id} value={loai.id}>{loai.name}</option>
                    )}
                  </select>
                  <span style={{
                    color: 'red',
                    fontStyle: 'italic'
                  }}>{errorType}</span>
                </div>
                <div>
                  <label>Hình ảnh</label>
                  <input type="file" defaultValue="" />
                </div>
                <fieldset>
                  <input
                    className="submit-green"
                    type="submit"
                    defaultValue="Thêm hoa"
                  />
                  <input
                    className="submit-gray"
                    type="reset"
                    defaultValue="Nhập lại"
                  />
                </fieldset>
              </form>
            </div>{" "}
            {/* End .module-body */}
          </div>{" "}
          {/* End .module */}
          <div style={{ clear: "both" }} />
        </div>{" "}
        {/* End .grid_12 */}
        <div style={{ clear: "both" }} />
      </div>
      {/* Footer */}
      <Footer />
      {/* End #footer */}
    </>
  )
}
