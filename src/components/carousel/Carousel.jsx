import { useEffect, useState } from 'react'

const data = [
    {
        url: 'https://media.revistavanityfair.es/photos/60e83ebcec46354bf4481cac/master/w_1600%2Cc_limit/174811.jpg',
        name: 'Hollywood'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        name: 'Paris'
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/VictoriaHarbour.jpg',
        name: 'Hong Kong'
    },
    {
        url: 'https://viajes.nationalgeographic.com.es/medio/2018/03/01/machu-picchu_5ff969ae_1280x720.jpg',
        name: 'Machu Picchu'
    },
    {
        url: 'https://images.ecestaticos.com/s2Cct04TkWKuhRCNiDu4fsfm8GQ=/0x0:2133x1406/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F307%2F892%2Fae7%2F307892ae74516761beab21741bbeb8f9.jpg',
        name: 'Moscu'
    },
    {
        url: 'https://humanidades.com/wp-content/uploads/2017/05/espa%C3%B1a-e1570587854254.jpg',
        name: 'Spain'
    },
    {
        url: 'https://www.cloud-europamundo.com/img/carousel/hd/Chiang%20Mai_20180928132407.jpg',
        name: 'Tailandia'
    },
    {
        url: 'https://media.iatiseguros.com/wp-content/uploads/2018/06/04005617/que-hacer-en-turquia-3.jpg',
        name: 'Turquia'
    },
    {
        url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507067-greece.jpg',
        name: 'Grecia'
    },
    {
        url: 'https://www.legaltoday.com/wp-content/uploads/2023/03/Italia696.jpg',
        name: 'Italia'
    },
    {
        url: 'https://concepto.de/wp-content/uploads/2022/04/bandera-de-brasil-e1650383961875-800x400.jpg',
        name: 'Brasil'
    },
    {
        url: 'https://a.cdn-hotels.com/gdcs/production159/d204/01ae3fa0-c55c-11e8-9739-0242ac110006.jpg',
        name: 'Canada'
    }
]



const Carousel = () => {
    const [pictures, setPictures] = useState(() => {
        if (data.length >= 4) return data.filter((item, index) => {
            return index >= 0 && index < 4
        })
        else return data
    })
    const [pos, setPos] = useState(0)
    const prev = () => {
        if (pos == 0) {
            setPictures(data.filter((item, index) => {
                return index >= data.length - 4 && index < data.length
            }))
            setPos(data.length - 4)
        } else {
            setPictures(data.filter((item, index) => {
                return index >= pos - 4 && index < pos
            }))
            setPos(pos - 4)
        }
    }
    const next = () => {
        if (pos + 4 + 4 <= data.length) {
            setPictures(data.filter((item, index) => {
                return index >= pos + 4 && index < pos + 4 + 4
            }))
            setPos(pos + 4)
        } else if (pos + 4 < data.length - 1) {
            setPictures(data.slice(pos + 4, (data.length - pos + 4)))
            setPos(pos + 4)
        } else {
            setPictures(data.filter((item, index) => {
                return index >= 0 && index < 4
            }))
            setPos(0)
        }
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
            {
                pictures.map((obj, i) => {
                    return (
                        <div className="flex flex-col m-2" key={i}>
                            <div className="relative h-56 overflow-hidden rounded-lg md:h-56">
                                <img className="max-h-52 w-72 p-2" src={obj.url} alt="...loading"></img>
                            </div>
                            <p className="text-center text-lg">{obj.name}</p>
                        </div>
                    )
                })
            }
            <button type="button" className="top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={next}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    )
}

export default Carousel;