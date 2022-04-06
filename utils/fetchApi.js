import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
                'X-RapidAPI-Key': 'ac93502058msh127297eacfc7471p1b1163jsnb7b469c5a935'
        }
    })

    return data;
}