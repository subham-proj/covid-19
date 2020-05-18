
import axios from 'axios';


const url = "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise";


export const fetchData = async () => {
    try{
        const {data: {data,lastRefreshed}}= await axios.get(url);

       

        return {data,lastRefreshed};
    }
    catch(error){

    }
    
}


