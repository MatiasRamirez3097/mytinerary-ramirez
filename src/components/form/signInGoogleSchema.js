import * as Yup from 'yup'
import { differenceInYears } from 'date-fns'

export const googleFields = [
    { name: "birth_date", label: "Birh date", type: "date", value: "" },
    { name: "phone", label: "Phone", type: "number", value: "" },
    { name: "country", label: "Country", type: "select", value: "" },
]

export const signInGoogleSchema = Yup.object().shape({
    birth_date: Yup.date()
        .test("dob", "Should be greater than 18", (val) => {
            return differenceInYears(new Date(), new Date(val)) >= 18
        })
        .required('Required'),
    phone: Yup.number()
        .min(100000000, 'Too Short!')
        .max(1000000000000000, 'Too Long!'),
    photo: Yup.string()
        .url('Invalid link'),
    country: Yup.string()
        .required('Required')
})