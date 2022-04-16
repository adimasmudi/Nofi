const axios = require("axios");

export const getMovies = async(keyword,page)=>{
    try{
        const data = axios.get(` http://www.omdbapi.com/?s=${keyword}&page=${page}&apikey=4bdad642`,{
        });

        return data;

    }catch(error){

    }
}
