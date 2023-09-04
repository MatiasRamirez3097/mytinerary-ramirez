import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getCities, searchAction } from '../../store/actions/citiesActions';

const Cities = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { cities, search } = useSelector(store => store.citiesReducer)

    const filter = (e) => {
        dispatch(searchAction(e.target.value))
        if (e.target.value.length >= 3) dispatch(getCities(e.target.value))
        else dispatch(getCities())
    }
    useEffect(() => {
        dispatch(getCities())
    }, [])

    return <>
        <div className="w-11/12 min-w-0 lg:px-6 xl:w-3/4 xl:px-12 self-center pt-3">
            <div className="relative">
                <input className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-4 pl-10 block w-full appearance-none leading-normal border border-transparent rounded-lg text-left select-none truncate bg-gray-200" placeholder="3 letters to search..." value={search} onChange={(e) => filter(e)} />
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                    <svg className="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center p-4">
            {
                cities.map((city, index) => {
                    return <Card
                        key={index}
                        name={city.name}
                        photo={city.photo}
                        description={city.shortDescription}
                        func={() => navigate(`/city/${city._id}`)}
                    />


                })
            }
        </div>
    </>
}

export default Cities;