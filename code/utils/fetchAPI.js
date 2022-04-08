import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) =>  {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'c399a2f3dfmsh2ba78405cbea31cp13ce1bjsn4d8b558f5a85'
        }
    })
    return data;
}