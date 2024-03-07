export default function Index() {
    return (
        <>
            {/* Header */}
            <div id="header">
                {/* Header. Status part */}
                <div id="header-status">
                    <div className="container_12">
                        <div className="grid_4">
                            <ul className="user-pro">
                                <li>
                                    <a href="">Logout</a>
                                </li>
                                <li>
                                    Chào, <a href="">admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ clear: "both" }} />
                </div>{" "}
                {/* End #header-status */}
                {/* Header. Main part */}
                <div id="header-main">
                    <div className="container_12">
                        <div className="grid_12">
                            <div id="logo">
                                <ul id="nav">
                                    <li id="current">
                                        <a href="index.html">Quản trị</a>
                                    </li>
                                    <li>
                                        <a href="taikhoan.html">Tài khoản</a>
                                    </li>
                                </ul>
                            </div>
                            {/* End. #Logo */}
                        </div>
                        {/* End. .grid_12*/}
                        <div style={{ clear: "both" }} />
                    </div>
                    {/* End. .container_12 */}
                </div>{" "}
                {/* End #header-main */}
                <div style={{ clear: "both" }} />
                {/* Sub navigation */}
                <div id="subnav">
                    <div className="container_12">
                        <div className="grid_12">
                            <ul>
                                <li>
                                    <a href="list.html">sản phẩm</a>
                                </li>
                                <li>
                                    <a href="list.html">Danh mục sản phẩm</a>
                                </li>
                                <li>
                                    <a href="add.html">Giới thiệu</a>
                                </li>
                                <li>
                                    <a href="list.html">Đơn hàng</a>
                                </li>
                                <li>
                                    <a href="list.html">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                        {/* End. .grid_12*/}
                    </div>
                    {/* End. .container_12 */}
                    <div style={{ clear: "both" }} />
                </div>{" "}
                {/* End #subnav */}
            </div>{" "}
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
            <div id="footer">
                <div className="container_12">
                    <div className="grid_12">
                        <p>
                            Copyright © 2013.{" "}
                            <a href="http://vinaenter.edu.vn" title="Đã học là làm được">
                                VinaEnter EDU
                            </a>
                        </p>
                    </div>
                </div>
                <div style={{ clear: "both" }} />
            </div>{" "}
            {/* End #footer */}
        </>
    )
}