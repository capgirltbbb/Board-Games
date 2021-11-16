import React from "react";
import axios from 'axios'


// let SERVER_URL =  
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:5000/api"
//     : "http://deployedbitches.com";


// const instance = axios.create({
//     baseURL: "http://localhost:5000/api",
// });

// export const serviceRatings = {
//     getRatingsList: () => instance.get('/ratings').then((response) => response.data),
//     getRating: (id) => instance.get(`/ratings/${id}`).then((response) => response.data),
// };



// const actions = {
//     getWishlist: async ({name}) => {
//         return await axios.get(
//             `${SERVER_URL}/wishlist`,
//             {name},
//         )
//     },
//     getRatings: async ({stars, comments}) => {
//         return await axios.get(
//             `${SERVER_URL}/ratings`,
//             {stars, comments},
//         )
//     }
// }

// export default actions