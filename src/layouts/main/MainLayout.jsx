import { Footer, Navbar } from '../../components'
import { Outlet } from "react-router-dom";

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
        url: '#',
        text: 'Login'
    }
]

const MainLayout = () => {

    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-600">
            <Navbar links={links} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;