import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const MainLayout = ({children}) => {
    return (
        <div className="flex flex-col min-h-screen justify-between bg-gray-600">
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}

export default MainLayout;