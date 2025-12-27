// import axios from "axios"

// const axiosClient =  axios.create({
//     baseURL: 'https://stylish-wear-aesthetics-swa.onrender.com',
//     withCredentials: true,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });


// export default axiosClient;

import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://stylish-wear-aesthetics-swa.onrender.com",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;
