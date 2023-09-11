import axios from 'axios'

export const server = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const countryApi = async () => {
    const res = axios.get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
        .then(res => {
            return res.data.map(country => country.name.common);
        });
    return res
}