import { NavLink, useLocation } from "react-router-dom"
import Button from "../button/Button";

const Anchor = ({ action = null, url = null, text }) => {
    console.log(url)
    console.log(useLocation().pathname)
    return (
        <li>
            {url ?
                < NavLink className={useLocation().pathname == url ? "text-blue-500 transition-all duration-500"
                    : "text-gray-200 hover:text-white transition-all duration-500"} to={url}
                >
                    {text}
                </NavLink>
                :
                <Button func={action} text={text}></Button>
            }
        </li >
    )
}

export default Anchor;