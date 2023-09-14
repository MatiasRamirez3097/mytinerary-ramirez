import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountries, signIn, signUp } from "../../redux/actions/usersActions"
import { Form, Formik } from 'formik'
import { InputFieldWithLabel } from '../'

const renderFields = (countries, errors, fields, touched) => {
    return fields.map((field, i) => {
        return <InputFieldWithLabel
            error={errors[field.name]}
            label={field.label}
            name={field.name}
            touched={touched[field.name]}
            values={field.name == 'country' ? countries : undefined}
            key={i}
            type={field.type}
        />

    })
}

const CustomForm = ({ action, action2, fields, googleUser = null, schema, sendSubmit = null, submitText }) => {
    const dispatch = useDispatch()
    const { countries, user } = useSelector(store => store.usersReducer)

    useEffect(() => {
        dispatch(getCountries())
    }, [])


    return <Formik
        initialValues={fields.reduce((o, key) => ({ ...o, [key.name]: key.value }), {})}
        validationSchema={schema}
        onSubmit={(values, actions) => {
            sendSubmit(values, actions)
        }}
    >
        {({ errors, touched }) => (
            <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div
                            className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Sign Up</h3>
                            {
                                renderFields(countries, errors, fields, touched)
                            }
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
                        {submitText}
                    </button>
                    <button
                        onClick={action}
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                        Cancel
                    </button>
                </div>
            </Form>
        )}
    </Formik >
}
export default CustomForm