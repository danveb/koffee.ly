import axios from "axios"; 

const BASE_URL = "http://localhost:4000/api"; 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJkMWYxZTlmNTNjZDNiOTI1Yzc2ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjgyMDU4MywiZXhwIjoxNjU1NDEyNTgzfQ.0Gypze4kW-UXnMmQmL5LBuBPc9tAHmGtxGC8QaW6wtI"

// fetch data
export const publicRequest = axios.create({
    baseURL: BASE_URL, 
}); 

// user/admin data
export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header: {token: `Bearer ${TOKEN}`}, 
}); 