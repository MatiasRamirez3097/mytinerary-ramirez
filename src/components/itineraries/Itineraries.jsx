import UserField from "./UserField"
import DurationField from "./DurationField"
import LikeField from "./LikeField"
import HashtagsField from "./HashtagsField"

import { IconContext } from "react-icons/lib"
import { FaAnglesDown } from 'react-icons/fa6'
import PriceField from "./PriceField"

const Itineraries = ({ itinerary, func, index, showMore }) => {
    const { duration, hashtags, like, name, price, user } = itinerary
    return <div className="grid justify-center m-2 rounded-lg border-2">
        <div className="grid grid-cols-1 p-4 justify-center border-white border-2">
            <div className="font-bold text-2xl text-center">{name}</div>
        </div>
        <div className="grid md:grid-cols-5 p-4 justify-center border-white border-2">
            <UserField name={user.name} surname={user.surname} photo={user.photo}></UserField>
            <DurationField duration={duration} ></DurationField>
            <LikeField like={like}></LikeField>
            <PriceField price={price}></PriceField>
            <HashtagsField hashtags={hashtags}></HashtagsField>
        </div>
        <div className="grid grid-cols-1 p-4 justify-center border-white border-2">
            <div className="flex justify-center">
                <button className="font-bold text-xl text-white flex flex-col justify-center" onClick={func}>
                    <IconContext.Provider value={{ color: "white", size: "2em", className: "self-center" }}>
                        <FaAnglesDown></FaAnglesDown>
                    </IconContext.Provider>
                    Show more
                </button>
            </div>
        </div>
        {
            showMore == index && <div className="grid grid-cols-1 p-4 justify-center border-white border-2">
                Under Construction
            </div>
        }
    </div >
}

export default Itineraries;