import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IconContext } from "react-icons/lib"
import { FaRegHeart, FaMoneyBill1Wave, FaAnglesDown, FaFaceSadCry } from 'react-icons/fa6'
import { useDispatch, useSelector } from "react-redux"
import { getCity } from "../../store/actions/citiesActions"

const City = () => {
    const [showMore, setShowMore] = useState(null)
    const { id } = useParams();
    const dispatch = useDispatch()
    const city = useSelector(store => store.citiesReducer.city)

    useEffect(() => {
        dispatch(getCity(id))
    }, [])

    return <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-1 justify-center p-4">

        <div className="grid lg:grid-cols-1 max-w rounded overflow-hidden shadow-lg border-2 justify-center">
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
                <img className="w-full" src={city.photo} alt="Sunset in the mountains" />
                <div className=" px-6 py-4">
                    <div className="font-bold text-xl mb-2">{city.name}</div>
                    <p className="text-base text-white text-justify">
                        {city.description}
                    </p>
                </div>
            </div>
            <div className="font-bold text-4xl mb-2 text-center bg-black m-2 text-white pt-3 pb-3 rounded-lg">Itineraries</div>
            <div className="grid grid-cols-1 justify-between">
                {city.itineraries.length > 0 ?
                    city.itineraries.map((it, i) => {
                        return <div className="grid justify-center m-2 rounded-lg border-2" key={i}>
                            <div className="grid grid-cols-1 p-4 justify-center border-white border-2">
                                <div className="font-bold text-2xl text-center">{it.name}</div>
                            </div>
                            <div className="grid md:grid-cols-5 p-4 justify-center border-white border-2">
                                <div className="flex flex-col justify-center border-2 border-white">
                                    <div className="font-bold text-center text-xl mb-2">{it.user.name + ' ' + it.user.surname}</div>
                                    <img className="w-1/3 self-center pb-2 rounded-2xl" src={it.user.photo}></img>
                                </div>
                                <div className="flex flex-col justify-center border-2 border-white">
                                    <div className="font-bold text-xl mb-2 text-center">Duration</div>
                                    <div className="flex flex-row self-center pb-2">
                                        <p className="text-2xl text-white pr-1">
                                            {it.duration + " Hs"}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center border-2 border-white">
                                    <div className="font-bold text-xl mb-2 text-center">Like</div>
                                    <div className="flex flex-row self-center pb-2">
                                        <p className="text-2xl text-white pr-1">
                                            {it.like}
                                        </p>
                                        <IconContext.Provider value={{ className: "text-3xl text-white" }}>
                                            <FaRegHeart></FaRegHeart>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center border-2 border-white">
                                    <div className="font-bold text-xl mb-2 text-center">Price</div>
                                    <div className="flex self-center pb-2">
                                        {
                                            Array.from(Array(it.price), (e, i) => {
                                                return <IconContext.Provider key={i} value={{ color: "white", size: "3em", className: "p-1" }}>
                                                    <FaMoneyBill1Wave></FaMoneyBill1Wave>
                                                </IconContext.Provider>
                                            })
                                        }

                                    </div>
                                </div>
                                <div className="flex flex-col justify-center border-2 border-white">
                                    <div className="font-bold text-xl mb-2 text-center">Hashtags</div>
                                    <div className="flex self-center pb-2">
                                        <p className="text-xl mb-2 text-center text-white">
                                            {
                                                it.hashtags.map((val, i) => {
                                                    return val.name + " "
                                                })
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 p-4 justify-center border-white border-2">
                                <div className="flex justify-center">
                                    <button className="font-bold text-xl text-white flex flex-col justify-center" onClick={() => showMore != i ? setShowMore(i) : setShowMore(null)}>
                                        <IconContext.Provider value={{ color: "white", size: "2em", className: "self-center" }}>
                                            <FaAnglesDown></FaAnglesDown>
                                        </IconContext.Provider>
                                        Show more
                                    </button>
                                </div>
                            </div>
                            {
                                showMore == i && <div className="grid grid-cols-1 p-4 justify-center border-white border-2">
                                    Under Construction
                                </div>
                            }

                        </div>
                    })
                    :
                    <div className="flex flex-col">
                        <p className="font-bold text-xl text-white justify-center self-center">Nothing here</p>
                        <IconContext.Provider value={{ className: "text-white text-center self-center p-3", size: "30rem" }}>
                            <FaFaceSadCry></FaFaceSadCry>
                        </IconContext.Provider>
                    </div>
                }

            </div>
        </div >
    </div >
}

export default City