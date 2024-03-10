import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Edit() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* End #header */}
      <div className="container_12">
        {/* Form elements */}
        <div className="grid_12">
          <div className="module">
            <h2>
              <span>Thêm hoa</span>
            </h2>
            <div className="module-body">
              <form action="">
                <p>
                  <label>Tên hoa</label>
                  <input type="text" className="input-medium" />
                </p>
                <p>
                  <label>Loại hoa</label>
                  <select className="input-short">
                    <option value="">-- Chọn loại hoa --</option>
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                    <option value={3}>Option 3</option>
                    <option value={4}>Option 4</option>
                  </select>
                </p>
                <p>
                  <label>Hình ảnh</label>
                  <input type="file" defaultValue="" />
                </p>
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
