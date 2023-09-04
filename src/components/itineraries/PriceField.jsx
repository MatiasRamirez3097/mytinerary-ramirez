import { IconContext } from "react-icons/lib"
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const PriceField = ({ price }) => {
    return <div className="flex flex-col justify-center border-2 border-white">
        <div className="font-bold text-xl mb-2 text-center">Price</div>
        <div className="flex self-center pb-2">
            {
                Array.from(Array(price), (e, i) => {
                    return <IconContext.Provider key={i} value={{ color: "white", size: "3em", className: "p-1" }}>
                        <FaMoneyBill1Wave></FaMoneyBill1Wave>
                    </IconContext.Provider>
                })
            }

        </div>
    </div>
}

export default PriceField