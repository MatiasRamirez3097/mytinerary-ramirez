import { useState } from 'react';
import { Footer, Modal, Navbar, SignIn, SignUp } from '../../components'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const [modal, setModal] = useState({
        show: false,
        type: null
    })
    const changeModal = (show = false, type = null) => {
        setModal({
            show: show,
            type: type
        })
    }
    const links = [
        {
            url: '/',
            text: 'Home'
        },
        {
            url: '/cities',
            text: 'Cities'
        },
        {
            text: 'Sign In',
            action: () => changeModal(true, 'signIn')
        },
        {
            text: 'Sign Up',
            action: () => changeModal(true, 'signUp')
        }
    ]

    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-600">
            <Navbar links={links} />
            {
                modal.show && <Modal>
                    {
                        modal.type == 'signUp' ?
                            <SignUp
                                action={() => changeModal()}
                                action2={() => changeModal(true, 'signIn')}
                            ></SignUp>
                            :
                            <SignIn
                                action={() => changeModal()}
                                action2={() => changeModal(true, 'signUp')}
                            ></SignIn>
                    }
                </Modal>
            }
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;