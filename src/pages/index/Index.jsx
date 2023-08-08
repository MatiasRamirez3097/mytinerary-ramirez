import Carousel from '../../components/carousel/Carousel'

const Index = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row border-2 p-5 bg-gray-600 text-white justify-center w-11/12 h-60 self-center">
                <div className="flex flex-col self-center">
                    <h1 className="text-3xl">
                        Find the perfect destination
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem vel qui vitae rem minus, labore, amet minima sit hic ullam! Minima temporibus, quaerat voluptatum modi nihil perspiciatis dignissimos beatae!</p>
                    <a href="#" className=" w-2/12 border-spacing-2 border-2 text-center bg-blue-900">Call to action</a>
                </div>
                <div className="flex flex-col w-1/4">
                    <img className="border-4 w-full h-full" src="" alt="loading..."></img>
                </div>
            </div>
            <div className="flex flex-row border-2 p-5 text-white justify-center w-11/12 h-60 self-center">
                <Carousel className="flex flex-col"/>
            </div>
        </div>
    )
}

export default Index;