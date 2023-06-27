// const axios = require("axios");

const BASE_URL = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";

export async function fetchCars() {
   const headers = {
     "X-RapidAPI-Key": "bc5bd2753dmshb212c7360002203p1e2824jsn33fb09239678",
     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
   };

   const response = await fetch(BASE_URL, { headers: headers });
   const result = await response.json();

   return result;
}