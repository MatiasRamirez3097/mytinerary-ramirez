import { useEffect, useState } from 'react'

const Carousel = ({ data }) => {
    const [pictures, setPictures] = useState(() => {
        if (data.length >= 4) return data.filter((item, index) => {
            return index >= 0 && index < 4
        })
        else return []
    })
    const [pos, setPos] = useState(0)
    const prev = () => {
        if (pos == 0) {
            if (data.length % 4 > 0) {
                setPictures(data.filter((item, index) => {
                    return index >= data.length - data.length % 4 && index < data.length
                }))
                setPos(data.length - data.length % 4)
            }
            else {
                setPictures(data.filter((item, index) => {
                    return index >= data.length - 4 && index < data.length
                }))
                setPos(data.length - 4)
            }


        } else {
            setPictures(data.filter((item, index) => {
                return index >= pos - 4 && index < pos
            }))
            setPos(pos - 4)
        }
        console.log(pos)
    }
    const next = () => {
        if (pos + 4 + 4 <= data.length) {
            setPictures(data.filter((item, index) => {
                return index >= pos + 4 && index < pos + 4 + 4
            }))
            setPos(pos + 4)
        } else if (pos + 4 < data.length - 1) {
            setPictures(data.filter((item, index) => {
                return index >= pos + 4 && index < data.length
            }))
            setPos(pos + 4)
        } else {
            setPictures(data.filter((item, index) => {
                return index >= 0 && index < 4
            }))
            setPos(0)
        }
        console.log(pos)
    }

    useEffect(() => {
        let interval = setInterval(() => {
            next()
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [pictures])

    return (
        <div className="flex flex-row">
            <button type="button" className="top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prev}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                {

                    pictures.map((obj, i) => {
                        return (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg border-2" key={i}>
                                <img className="w-full" src={obj.photo} alt="Sunset in the mountains" />
                                <div className="px-6 py-4 justify-center">
                                    <div className="font-bold text-xl mb-2 text-center">{obj.name}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button type="button" className="top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={next}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div >
    )
}

export default Carousel;