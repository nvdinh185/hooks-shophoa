import { Link } from "react-router-dom";

const Header = () => {
    return (
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
                                    <Link to='/'>Trang chủ</Link>
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
                                <Link to='/list'>sản phẩm</Link>
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
        </div>
    )
}

export default Header;