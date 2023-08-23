import { useNavigate } from "react-router-dom";
import { Button } from '../'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className="grid md:grid-cols-3 p-4 w-full bg-black text-white font font-serif text-lg justify-center">
            <div className="flex h-12 justify-center">
                <Button func={() => navigate('/')} text={'Home'} />
            </div>
            <div className="flex h-12 justify-center">
                <Button func={() => navigate('/cities')} text={'Cities'} />
            </div>
            <div className="flex h-12 justify-center">
                <p className="text-gray-400 text-center">
                    My Tinerary
                </p>
            </div>
        </div>
    )
}

export default Footer;