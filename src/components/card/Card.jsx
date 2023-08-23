const Card = ({ description, func, name, photo }) => {

    return <div className="max-w-sm rounded overflow-hidden shadow-lg border-2 cursor-pointer" onClick={func}>
        <img className="w-full" src={photo} alt={`${name} photo`} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base text-white">
                {description}
            </p>
        </div>
    </div>
}

export default Card