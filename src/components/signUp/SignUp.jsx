import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getCountries } from "../../redux/actions/usersActions"
import { useFormik } from 'formik'
import validate from "./validate"

const SignUp = ({ action, action2 }) => {
    const formik = useFormik({
        initialValues: {
            birth_date: "",
            country: "",
            email: "",
            name: "",
            surname: "",
            password: "",
            phone: "",
            photo: "",
            repassword: ""
        },
        validate,
        onSubmit: values => {
            server.post('/auth', {
                ...values
            })
        },
    });
    const dispatch = useDispatch()
    const { countries } = useSelector(store => store.usersReducer)

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                            value={formik.values.name}
                        />
                        {formik.errors.name ? <div className="text-red-500 text-sm">{formik.errors.name}</div> : null}
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="surname"
                        >
                            Surname
                        </label>
                        <input
                            name="surname"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="surname"
                            type="text"
                            placeholder="Surname"
                            value={formik.values.surname}
                        />
                        {formik.errors.surname ? <div className="text-red-500 text-sm">{formik.errors.surname}</div> : null}
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="birth_date"
                        >
                            Birth date
                        </label>
                        <input
                            name="birth_date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="birth_date"
                            type="date"
                            value={formik.values.birth_date}
                        />
                        {formik.errors.birth_date ? <div className="text-red-500 text-sm">{formik.errors.birth_date}</div> : null}
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="number"
                            placeholder="Phone"
                            value={formik.values.phone}
                        />
                        {formik.errors.phone ? <div className="text-red-500 text-sm">{formik.errors.phone}</div> : null}
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="photo"
                        >
                            Photo link
                        </label>
                        <input
                            name="photo"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="text"
                            placeholder="Photo"
                            value={formik.values.photo}
                        />
                        {formik.errors.photo ? <div className="text-red-500 text-sm">{formik.errors.photo}</div> : null}
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="country"
                        >
                            Country
                        </label>
                        <select
                            name="country"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="country"
                            placeholder="Country"
                            value={formik.values.country}
                        >
                            <option disabled value={""}> -- select an option -- </option>
                            {
                                countries.map((country, index) => {
                                    return <option key={index} value={country} >{country}</option>
                                })
                            }
                        </select>
                        {formik.errors.country ? <div className="text-red-500 text-sm">{formik.errors.country}</div> : null}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="surname"
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            placeholder="******************"
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Re-enter Password
                        </label>
                        <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="repassword"
                            name="repassword"
                            type="password"
                            placeholder="******************"
                            value={formik.values.repassword}
                        />
                        {formik.errors.repassword ? <div className="text-red-500 text-sm">{formik.errors.repassword}</div> : null}
                    </div>
                    <div className="flex items-center justify-between">
                        <button onClick={() => action2()} className="text-blue hover:underline text-sm italic" type="button">
                            Already have an account?
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                Sign Up
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