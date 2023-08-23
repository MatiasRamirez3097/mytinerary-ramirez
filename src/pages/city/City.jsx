import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from '../../Api'
import { useNavigate } from "react-router-dom"

const City = () => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams();

    const getData = () => {
        axios.get(`${api}/cities/getcity/${id}`)
            .then(res => {
                return res.data
            })
            .then(data => {
                setData(data.response)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-1 justify-center p-4">

        <div className="max-w rounded overflow-hidden shadow-lg border-2 justify-center">
            <img className="w-full" src={data.photo} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <p className="text-base text-white text-justify">
                    {data.description}
                </p>
                <p className="text-black text-center text-4xl">Under Construction</p>
                <button onClick={() => navigate('/cities')} className=" bg-black text-white p-3 rounded text-center w-full">Back to cities</button>
            </div>
        </div>
    </div>
}

export default City