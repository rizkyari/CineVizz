import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './index.css';

function HomePage(){
const [movies, setMovies] = useState(false);
    useEffect(()=> {
        fetchApi();
    },[]);

    const checkData = () => {
        console.log(movies);
    }

    const fetchApi = () => {
        axios.get(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`)
            .then(res => {
                const data = res.data;
                setMovies(data);
            })
    }

    return(
        <div>
            <h1>This is home page</h1>
            <button>
                <Link to="/detail">go to detail</Link>
            </button>
            <button onClick={checkData}>check here</button>
        </div>
    )
}

export default HomePage;