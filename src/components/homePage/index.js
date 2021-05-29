import React, {useState, useEffect,lazy, Suspense} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../header';
// import ListItem from '../listContent';
import './index.css';
import Loading from '../loading';


function HomePage(){
const [movies, setMovies] = useState([]);
const ListItem = lazy(() => import('../listContent'));
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
            <Header/>
            <div className="body-content">
                <Suspense fallback={<div className="body-loading"><Loading/></div>}>
                    <ListItem/>
                </Suspense>
            </div>
        </div>
    )
}

export default HomePage;