import { IconContext } from "react-icons/lib"
import { FaRegHeart } from 'react-icons/fa6'

const LikeField = ({ like }) => {
    return <div className="flex flex-col justify-center border-2 border-white">
        <div className="font-bold text-xl mb-2 text-center">Like</div>
        <div className="flex flex-row self-center pb-2">
            <p className="text-2xl text-white pr-1">
                {like}
            </p>
            <IconContext.Provider value={{ className: "text-3xl text-white" }}>
                <FaRegHeart></FaRegHeart>
            </IconContext.Provider>
        </div>
    </div>
}

export default LikeField