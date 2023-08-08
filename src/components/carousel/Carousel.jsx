import { useState } from 'react'

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
    }
]



const Carousel = () => {
    const [pictures, setPictures] = useState(() => {
        if(data.length >= 4) return data.slice(0,4)
        else return data
    })
    const [pos, setPos] = useState(0)
    const prev = () => {

    }
    const next = () => {
        setPictures(data.slice(pos+4,pos+4+4))
        setPos(pos+4)
    }

    return (
        <div className="flex flex-row">
            <button onClick={next}>{'<'}</button>
            {
                pictures.map((obj, i) => {
                    return(
                        <div className="flex flex-col m-2" key={i}>
                            <img className=" max-h-52" src={obj.url} alt="...loading"></img>
                            <p className="text-center text-lg">{obj.name}</p>
                        </div>
                    )
                })
            }
            <button onClick={next}>{'>'}</button>
        </div>
    )
}

export default Carousel;