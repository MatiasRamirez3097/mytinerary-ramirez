import { Field } from "formik"

const InputFieldWithLabel = ({ error = null, label, name, type, touched = null, values = null }) => {
    return <>
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name">
            {label}
        </label>
        <Field
            name={name}
        >
            {({ field }) => (
                type != 'select' ? <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type={type}
                    {...field}
                /> :
                    <select {...field}>
                        <option disabled value={""}> -- select an option -- </option>
                        {
                            values.map((value, index) => {
                                return <option key={index} value={value} >{value}</option>
                            })
                        }
                    </select>

            )}

        </Field>
        {
            error && touched ? (
                <div className="text-red-500 text-sm">{error}</div>
            ) : null
        }
    </>
}

export default InputFieldWithLabel