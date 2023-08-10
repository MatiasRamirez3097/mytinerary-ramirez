import { Footer, Navbar } from '../../components'
import { Outlet, useNavigate, useLocation } from "react-router-dom";

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
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-600">
            <Navbar links={links} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;