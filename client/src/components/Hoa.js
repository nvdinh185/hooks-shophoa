import { Link } from "react-router-dom";

const Hoa = (props) => {
    return (
        <tr>
            <td className="align-center">{props.id}</td>
            <td>
                <a href="">{props.name}</a>
            </td>
            <td>{props.catName}</td>
            <td align="center">
                <img src={"images/tmp/" + props.image} className="hoa" />
            </td>
            <td align="center">
                <Link to={'/edit/' + props.id}>
                    Sửa <img src="images/pencil.gif" alt="edit" />
                </Link>
                <a href="javascript:;" onClick={props.onClickDel}>
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
    )
}

export default Hoa;