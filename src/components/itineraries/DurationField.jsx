const DurationField = ({ duration }) => {
    return <div className="flex flex-col justify-center border-2 border-white">
        <div className="font-bold text-xl mb-2 text-center">Duration</div>
        <div className="flex flex-row self-center pb-2">
            <p className="text-2xl text-white pr-1">
                {duration + " Hs"}
            </p>
        </div>
    </div>
}

export default DurationField