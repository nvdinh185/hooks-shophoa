import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function List() {
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
            <div>
              <span className="notification n-success">Thêm thành công</span>
            </div>
            <h2>
              <span>Danh sách hoa</span>
            </h2>
            <div className="module-table-body">
              <form action="">
                <table id="myTable" className="tablesorter">
                  <thead>
                    <tr>
                      <th style={{ width: "4%", textAlign: "center" }}>ID</th>
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
                    <tr>
                      <td className="align-center">1</td>
                      <td>
                        <a href="">Hoa Phong Lan</a>
                      </td>
                      <td>Khai trương</td>
                      <td align="center">
                        <img src="images/tmp/hoa1.jpg" className="hoa" />
                      </td>
                      <td align="center">
                        <a href="">
                          Sửa <img src="images/pencil.gif" alt="edit" />
                        </a>
                        <a href="">
                          Xóa{" "}
                          <img
                            src="images/bin.gif"
                            width={16}
                            height={16}
                            alt="delete"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-center">2</td>
                      <td>
                        <a href="">Hoa Tỉ muội</a>
                      </td>
                      <td>Khai trương</td>
                      <td align="center">
                        <img src="images/tmp/hoa2.jpg" className="hoa" />
                      </td>
                      <td align="center">
                        <a href="">
                          Sửa <img src="images/pencil.gif" alt="edit" />
                        </a>
                        <a href="">
                          Xóa{" "}
                          <img
                            src="images/bin.gif"
                            width={16}
                            height={16}
                            alt="delete"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-center">3</td>
                      <td>
                        <a href="">Hoa Violet</a>
                      </td>
                      <td>Hoa kỷ niệm</td>
                      <td align="center">
                        <img src="images/tmp/hoa3.jpg" className="hoa" />
                      </td>
                      <td align="center">
                        <a href="">
                          Sửa <img src="images/pencil.gif" alt="edit" />
                        </a>
                        <a href="">
                          Xóa{" "}
                          <img
                            src="images/bin.gif"
                            width={16}
                            height={16}
                            alt="delete"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-center">4</td>
                      <td>
                        <a href="">Hoa thủy tiên</a>
                      </td>
                      <td>Hoa tình yêu</td>
                      <td align="center">
                        <img src="images/tmp/hoa4.jpg" className="hoa" />
                      </td>
                      <td align="center">
                        <a href="">
                          Sửa <img src="images/pencil.gif" alt="edit" />
                        </a>
                        <a href="">
                          Xóa{" "}
                          <img
                            src="images/bin.gif"
                            width={16}
                            height={16}
                            alt="delete"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="align-center">5</td>
                      <td>
                        <a href="">Hoa cẩm chướng</a>
                      </td>
                      <td>Hoa hạnh phúc</td>
                      <td align="center">
                        <img src="images/tmp/hoa5.jpg" className="hoa" />
                      </td>
                      <td align="center">
                        <a href="">
                          Sửa <img src="images/pencil.gif" alt="edit" />
                        </a>
                        <a href="">
                          Xóa{" "}
                          <img
                            src="images/bin.gif"
                            width={16}
                            height={16}
                            alt="delete"
                          />
                        </a>
                      </td>
                    </tr>
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
