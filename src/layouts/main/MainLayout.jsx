import { useEffect, useState } from 'react';
import { CustomForm, Footer, Modal, Navbar } from '../../components'
import { Outlet } from "react-router-dom";
import { signUpFields, signUpSchema } from '../../components/form/signUpSchema'
import { signInFields, signInSchema } from '../../components/form/signInSchema'
import { logOut, signIn, signUp } from '../../redux/actions/usersActions';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwtDecode from 'jwt-decode'
import { googleFields, signInGoogleSchema } from '../../components/form/signInGoogleSchema';
import { links } from './links';

const MainLayout = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(store => store.usersReducer)
    const [modal, setModal] = useState({
        show: false,
        type: null
    })
    const [googleUser, setGoogleUser] = useState(null)
    const changeModal = (show = false, type = null) => {
        setModal({
            show: show,
            type: type
        })
    }


    useEffect(() => {
        changeModal()
    }, [Object.keys(user).length == 0])

    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-600">
            <Navbar links={links(
                () => changeModal(true, 'signIn'),
                () => changeModal(true, 'signUp'),
                () => dispatch(logOut())
            )} />
            {
                modal.show && Object.keys(user).length == 0 && <Modal>
                    <div className="flex justify-center items-center mt-3 pt-3">
                        <GoogleOAuthProvider
                            clientId={import.meta.env.VITE_GOOGLE_ID}
                        >
                            <GoogleLogin
                                className="flex mt-3 pt-3 border-2 border-blue-500"
                                onSuccess={(credentialResponse) => {
                                    const userDecoded = jwtDecode(credentialResponse.credential)
                                    dispatch(signIn({
                                        google: true,
                                        ...userDecoded
                                    }))
                                    setModal({
                                        show: true,
                                        type: 'googleSign'
                                    })
                                    setGoogleUser(userDecoded)
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />
                        </GoogleOAuthProvider>
                    </div>;
                    {
                        modal.type == 'signUp' &&
                        <CustomForm
                            action={() => changeModal()}
                            action2={() => changeModal(true, 'signIn')}
                            fields={signUpFields}
                            schema={signUpSchema}
                            sendSubmit={(values) => {
                                const { repassword, ...data } = values
                                dispatch(signUp(data))
                            }}
                            submitText="Sign Up"
                        >
                        </CustomForm>
                    }
                    {
                        modal.type == 'signIn' &&
                        <CustomForm
                            action={() => changeModal()}
                            action2={() => changeModal(true, 'signUp')}
                            fields={signInFields}
                            schema={signInSchema}
                            submitText="Sign In"
                            sendSubmit={(values) => {
                                dispatch(signIn(values))
                            }}
                        ></CustomForm>
                    }
                    {
                        modal.type == 'googleSign' &&
                        <CustomForm
                            action={() => changeModal()}
                            action2={() => changeModal(true, 'signUp')}
                            fields={googleFields}
                            schema={signInGoogleSchema}
                            submitText="Sign Up"
                            googleUser={googleUser}
                            sendSubmit={(values) => {
                                dispatch(signUp({
                                    google: true,
                                    name: googleUser.given_name,
                                    surname: googleUser.family_name,
                                    email: googleUser.email,
                                    photo: googleUser.picture,
                                    birth_date: values.birth_date,
                                    country: values.country,
                                    phone: values.phone
                                }))
                            }}
                        ></CustomForm>

                    }
                </Modal>
            }
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;