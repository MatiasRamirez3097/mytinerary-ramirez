import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

const MainLayout = ({children}) => {
    return (
        <div className="min-h-screen bg-gray-400">
            <Navbar />
            <section>
                {children}
            </section>
            <Footer />
        </div>
    )
}

export default MainLayout;