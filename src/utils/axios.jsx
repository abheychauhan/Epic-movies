import axios from "axios";

const instance = axios.create({
        baseURL:"https://api.themoviedb.org/3",
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjExMDc3Zjk2MTJkY2E5MTA4MzU3NDUxYWM1M2I5YSIsInN1YiI6IjY2MDg1MDJkZDRmZTA0MDEzMDI2ZTI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JbUV6O8kaG-dbvm_7s3nWzy_xA7O7cnxpd7YayCgFn0'
          }
}) ;


export default instance;