//import axios from 'axios'
import data from '../data/questions';
import axios from 'axios'


const database = ()=>{
    try {
        
        axios.get('http://localhost:21262').then((response)=>{
        return response.status
    })
    } catch (error) {
        console.log(error)
    }



}



const Api = ()=>{
    const api = axios.create({ baseURL: 'http://localhost:21262'})
    
    const data = api
    .get("/")
    .then((response)=> setData(response))
    .catch((err)=>{
    console.error("Ops não deu certo" + err);
    });

    return data
}

export default database