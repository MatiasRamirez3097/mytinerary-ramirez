import { Carousel } from '../../components'

const Index = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row border-2 p-5 bg-[url(https://www.expreso.info/files/2020-04/Viaje_Combinado.jpg)] bg-cover text-white justify-center w-11/12 h-96 self-center">
                <div className="flex flex-col self-center">
                    <h1 className="text-3xl">
                        Find the perfect destination
                    </h1>
                    <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <a href="#" className=" w-2/12 border-spacing-2 border-2 text-center bg-blue-900">View More</a>
                </div>
            </div>
            <div className="flex flex-row border-2 p-5 text-white justify-center w-11/12 h-60 self-center">
                <Carousel className="flex flex-col" />
            </div>
        </div>
    )
}

export default Index;