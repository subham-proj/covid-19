import React from 'react';
import axios from 'axios';


const url = "https://corona.lmao.ninja/v2/countries/india";


export const fetchData = async () => {
    try{
        const {data: {updated,cases,todayCases,deaths,todayDeaths,recovered,active}}= await axios.get(url);

       

        return {updated,cases,todayCases,deaths,todayDeaths,recovered,active};
    }
    catch(error){

    }
    
}


