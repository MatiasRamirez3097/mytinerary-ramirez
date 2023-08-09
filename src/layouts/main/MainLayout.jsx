import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-600">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout;