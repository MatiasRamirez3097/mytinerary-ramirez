import { NavLink, useLocation } from "react-router-dom"

const Anchor = ({ url, text }) => {

    return (
        <li>
            <NavLink className={() =>
                useLocation().pathname == url ? "text-white transition-all duration-500"
                    : "text-gray-500 hover:text-blue transition-all duration-500"
            } to={url}>
                {text}
            </NavLink>
        </li>
    )
}

export default Anchor;