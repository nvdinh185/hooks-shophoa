import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Edit() {

  const { id } = useParams();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const [listLoaiHoa, setListLoaiHoa] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        var hoaById = await axios(`http://localhost:3001/hoa/${id}`);
        setName(hoaById.data.name);
        setType(hoaById.data.id_loai_hoa);
        setImage(hoaById.data.image);

        let result = await axios('http://localhost:3001/hoa/type');
        setListLoaiHoa(result.data);
      } catch (error) {
        setError('Xảy ra lỗi khi lấy dữ liệu để sửa!');
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        method: "PUT",
        url: "http://localhost:3001/hoa/edit",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      //handle success
      // console.log('results: ', results);
      navigate('/list', { state: { msg: 'Đã sửa thành công!' } });
    } catch (error) {
      setError('Xảy ra lỗi khi sửa!');
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
              <span>Sửa hoa</span>
            </h2>
            <div className="module-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <input type="hidden" name="id" value={id} />
                <p>
                  <label>Tên hoa</label>
                  <input type="text" name="name" value={name}
                    className="input-medium"
                    onChange={(e) => { setName(e.target.value) }}
                  />
                </p>
                <p>
                  <label>Loại hoa</label>
                  <select name="type" value={type}
                    className="input-short"
                    onChange={(e) => { setType(e.target.value) }}
                  >
                    <option value="">-- Chọn loại hoa --</option>
                    {listLoaiHoa.map(loai =>
                      <option key={loai.id} value={loai.id}>{loai.name}</option>
                    )}
                  </select>
                </p>
                <p>
                  <label>Hình ảnh</label>
                  <img id="avatar" src={"/images/tmp/" + image}
                    alt="Không có hình ảnh" width="80px" height="80px" />
                  <input type="file" defaultValue="" />
                </p>
                <fieldset>
                  <input
                    className="submit-green"
                    type="submit"
                    defaultValue="Sửa hoa"
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
