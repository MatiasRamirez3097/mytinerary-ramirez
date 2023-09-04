const HashtagsField = ({ hashtags }) => {
    return <div className="flex flex-col justify-center border-2 border-white">
        <div className="font-bold text-xl mb-2 text-center">Hashtags</div>
        <div className="flex self-center pb-2">
            <p className="text-xl mb-2 text-center text-white">
                {
                    hashtags.map((val, i) => {
                        return val.name + " "
                    })
                }
            </p>
        </div>
    </div>
}

export default HashtagsField