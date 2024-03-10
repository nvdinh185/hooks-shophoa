import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hoa from "../components/Hoa";

export default function List() {

  const [listHoa, setListHoa] = useState([]);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const { state } = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        let result = await axios('http://localhost:3001/hoa');
        setListHoa(result.data);
      } catch (error) {
        console.log(error);
        setError('Xảy ra lỗi khi lấy dữ liệu!');
      }
    }
    fetchData();
    if (state) {
      setMsg(state.msg);
    }
  }, []);

  return (
    <>
      {/* Header */}
      <Header />
      {/* End #header */}
      <div className="container_12">
        <div className="bottom-spacing">
          {/* Button */}
          <div className="float-left">
            <Link to='/add' className="button">
              <span>
                Thêm hoa mới <img src="images/plus-small.gif" alt="Thêm hoa mới" />
              </span>
            </Link>
          </div>
          <div className="clear" />
        </div>
        <div className="grid_12">
          {/* Example table */}
          <div className="module">
            <p style={{
              color: 'green',
              backgroundColor: 'yellow',
              fontStyle: 'italic'
            }}>{msg}</p>
            <p style={{
              color: 'red',
              backgroundColor: 'yellow',
              fontStyle: 'italic'
            }}>{error}</p>
            <h2>
              <span>Danh sách hoa</span>
            </h2>
            <div className="module-table-body">
              <form action="">
                <table id="myTable" className="tablesorter">
                  <thead>
                    <tr>
                      <th style={{ width: "15%", textAlign: "center" }}>ID</th>
                      <th>Tên hoa</th>
                      <th style={{ width: "20%" }}>Loại hoa</th>
                      <th style={{ width: "16%", textAlign: "center" }}>
                        Hình ảnh
                      </th>
                      <th style={{ width: "11%", textAlign: "center" }}>
                        Chức năng
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listHoa.map(hoa =>
                      <Hoa
                        key={hoa.id}
                        id={hoa.id}
                        name={hoa.name}
                        image={hoa.image}
                        catName={hoa.loai_hoa}
                      />
                    )}
                  </tbody>
                </table>
              </form>
            </div>{" "}
            {/* End .module-table-body */}
          </div>{" "}
          {/* End .module */}
          <div className="pagination">
            <div className="numbers">
              <span>Page:</span>
              <a href="">1</a>
              <span>|</span>
              <a href="">2</a>
              <span>|</span>
              <span className="current">3</span>
              <span>|</span>
              <a href="">4</a>
              <span>|</span>
              <a href="">5</a>
              <span>|</span>
              <a href="">6</a>
              <span>|</span>
              <a href="">7</a>
              <span>|</span>
              <span>...</span>
              <span>|</span>
              <a href="">99</a>
            </div>
            <div style={{ clear: "both" }} />
          </div>
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
