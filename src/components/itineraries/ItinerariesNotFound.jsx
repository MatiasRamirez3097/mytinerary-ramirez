import { IconContext } from "react-icons/lib"
import { FaFaceSadCry } from 'react-icons/fa6'

const ItinerariesNotFound = () => {
    return <div className="flex flex-col">
        <p className="font-bold text-xl text-white justify-center self-center">Nothing here</p>
        <IconContext.Provider value={{ className: "text-white text-center self-center p-3", size: "30rem" }}>
            <FaFaceSadCry></FaFaceSadCry>
        </IconContext.Provider>
    </div>
}

export default ItinerariesNotFound