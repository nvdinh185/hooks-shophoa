import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index() {
    return (
        <>
            {/* Header */}
            <Header />
            {/* End #header */}
            <div className="container_12">
                {/* Dashboard icons */}
                <div className="grid_main_l">
                    <a href="themtintuc.html" className="dashboard-module">
                        <img
                            src="/images/Crystal_Clear_write.gif"
                            width={64}
                            height={64}
                            alt="edit"
                        />
                        <span>Thêm tin sản phẩm</span>
                    </a>
                    <a href="themtintuc.html" className="dashboard-module">
                        <img
                            src="/images/Crystal_Clear_files.gif"
                            width={64}
                            height={64}
                            alt="edit"
                        />
                        <span>Thêm danh mục</span>
                    </a>
                    <div style={{ clear: "both" }} />
                </div>{" "}
                {/* End .grid_7 */}
                {/* Account overview */}
                <div className="grid_main_r">
                    <div className="module">
                        <h2>
                            <span>Quản trị hệ thống</span>
                        </h2>
                        <div className="module-body">
                            <p className="p">
                                <strong>Phần mềm</strong> được viết trên nền tảng PHP&amp;MySQL{" "}
                                <br />
                                <strong>Học viên thực hiện: </strong>Trần Nguyễn Gia Huy
                                <br />
                                <strong>Email: </strong>huytng@vinatab.net
                                <br />
                                <strong>Phone: </strong>0909.123.456
                                <br />
                            </p>
                        </div>
                    </div>
                    <div style={{ clear: "both" }} />
                    <div className="padding-bottom" />
                </div>{" "}
                {/* End .grid_5 */}
                <div style={{ clear: "both" }} />
            </div>
            {/* Footer */}
            <Footer />
            {/* End #footer */}
        </>
    )
}