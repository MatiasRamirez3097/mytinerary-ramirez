const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.surname) {
        errors.surname = 'Required';
    } else if (values.surname.length > 20) {
        errors.surname = 'Must be 20 characters or less';
    }

    if (!values.birth_date) {
        errors.birth_date = 'Required';
    } else {
        console.log(values.birth_date)
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.repassword) {
        errors.repassword = 'Required'
    } else if (values.password != values.repassword) {
        errors.repassword = 'Passwords must be the same'
    }

    return errors;
};

export default validate