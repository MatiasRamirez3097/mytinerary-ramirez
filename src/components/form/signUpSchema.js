import * as Yup from 'yup'
import { differenceInYears } from 'date-fns'

export const signUpFields = [
    { name: "name", label: "Name", type: "text", value: "" },
    { name: "surname", label: "Surname", type: "text", value: "" },
    { name: "birth_date", label: "Birh date", type: "date", value: "" },
    { name: "phone", label: "Phone", type: "number", value: "" },
    { name: "photo", label: "Photo", type: "text", value: "" },
    { name: "country", label: "Country", type: "select", value: "" },
    { name: "email", label: "Email", type: "text", value: "" },
    { name: "password", label: "Password", type: "password", value: "" },
    { name: "repassword", label: "Re-enter password", type: "password", value: "" }
]

export const signUpSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    surname: Yup.string()
        .min(3, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    birth_date: Yup.date()
        .test("dob", "Should be greater than 18", (val) => {
            return differenceInYears(new Date(), new Date(val)) >= 18
        })
        .required('Required'),
    email: Yup.string()
        .email('Invalid Email!')
        .required('Required'),
    phone: Yup.number()
        .min(100000000, 'Too Short!')
        .max(1000000000000000, 'Too Long!'),
    photo: Yup.string()
        .url('Invalid link'),
    country: Yup.string()
        .required('Required'),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}$)/,
            "Must Contain between 8 and 16 characters , One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required('Required'),
    repassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must be the same')
})