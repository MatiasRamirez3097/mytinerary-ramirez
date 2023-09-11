import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getCountries } from "../../redux/actions/usersActions"

const SignUp = ({ action, action2 }) => {
    const [data, setData] = useState({
        birth_date: "",
        country: "",
        email: "",
        name: "",
        surname: "",
        password: "",
        phone: "",
        photo: ""
    })
    const dispatch = useDispatch()
    const { countries } = useSelector(store => store.usersReducer)
    const onChange = ({ target }) => {
        setData((prevState) => {
            return { ...prevState, [target.name]: target.value }
        })
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Sign Up</h3>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name">
                            Name
                        </label>
                        <input
                            name="name"
                            onChange={(e) => onChange(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={data.name}
                        />
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="surname"
                        >
                            Surname
                        </label>
                        <input
                            name="surname"
                            onChange={(e) => onChange(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="surname"
                            type="text"
                            placeholder="Surname"
                            value={data.surname} />
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="birth_date"
                        >
                            Birth date
                        </label>
                        <input
                            name="birth_date"
                            onChange={(e) => onChange(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="birth_date"
                            type="date"
                            value={data.birth_date} />
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            name="phone"
                            onChange={(e) => onChange(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="number"
                            placeholder="Phone"
                            value={data.phone} />
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="photo"
                        >
                            Photo link
                        </label>
                        <input
                            name="photo"
                            onChange={(e) => onChange(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="text"
                            placeholder="Photo"
                            value={data.photo} />
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="country"
                        >
                            Country
                        </label>
                        <select
                            name="country"
                            onChange={(e) => onChange(e)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="country"
                            placeholder="Country"
                            value={data.country}
                        >
                            {
                                countries.map((country, index) => {
                                    return <option key={index} value={country} >{country}</option>
                                })
                            }
                        </select>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input name="email" onChange={(e) => onChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" value={data.email} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            onChange={(e) => onChange(e)}
                            type="password"
                            placeholder="******************"
                            value={data.password}
                        />
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Re-enter Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={() => action2()} className="text-blue hover:underline text-sm italic" type="button">
                            Already have an account?
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                Login
            </button>
            <button
                onClick={action}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                Cancel
            </button>
        </div>
    </form>
}

export default SignUp