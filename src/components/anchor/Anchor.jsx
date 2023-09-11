import { NavLink, useLocation } from "react-router-dom"
import Button from "../button/Button";

const Anchor = ({ action = null, url = null, text }) => {

    return (
        <li>
            {url ?
                <NavLink className={() =>
                    useLocation().pathname == url ? "text-white transition-all duration-500"
                        : "text-gray-500 hover:text-blue transition-all duration-500"
                } to={url}
                >
                    {text}
                </NavLink>
                :
                <Button func={action} text={text}></Button>
            }
        </li>
    )
}

export default Anchor;