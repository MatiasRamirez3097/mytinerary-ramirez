import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCity } from "../../store/actions/citiesActions"
import { Itineraries, ItinerariesNotFound } from "../../components"

const City = () => {
    const [showMore, setShowMore] = useState(null)
    const { id } = useParams();
    const dispatch = useDispatch()
    const { city } = useSelector(store => store.citiesReducer)

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
                        return <Itineraries
                            itinerary={it}
                            key={i}
                            func={() => showMore != i ? setShowMore(i) : setShowMore(null)}
                            index={i}
                            showMore={showMore}
                        >
                        </Itineraries>
                    })
                    :
                    <ItinerariesNotFound></ItinerariesNotFound>
                }

            </div>
        </div >
    </div >
}

export default City