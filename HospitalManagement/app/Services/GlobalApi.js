
import axios from 'axios';
const BASE_URL="http://192.168.202.226:1337/api"
const API_KEY= "e5d42488d3795b26a175b3f4aee6cfed81fefd26f97d20cb995c50eb43dab9863fe0dd1fbc81f2678323b89d2405573e0f783b6f788fb03f4b1a444d8d8ddafdf60767e4db30fea6a8568717ade8ef35577f99c76021bc8712640ec823ff73e89b6be4052e020b327534d3017d15c1513a371553135a6ad03dfdffc6de5ef882"
const AxiosInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})
const getSlider=()=>AxiosInstance.get("/sliders?populate=*");
const getCatogories=()=>AxiosInstance.get("/categories?populate=*")


export default{
    getSlider,
    getCatogories
}
