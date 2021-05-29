import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import Loading from '../loading';
import './index.css';

function ListItem(){
    const [movies, setMovies] = useState(null);
    useEffect(()=> {
        fetchApi();
    },[]);

    const fetchApi = () => {
        axios.get(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`)
            .then(res => {
                const data = res.data;
                setMovies(data);
            })
    }

    return(
        <>
        {movies === null ? (
            <div className="loading-body">
                <Loading/>
            </div>
        ) : (
            <div className="body-content">
            {movies.map(function(item,i){
                    return <div key={i} className="wrapper">
                        <LazyLoad height={200}>
                            <div class="grid-item">
                                <div class="card"><img class="card-img" src={item.image} alt="movie thumbnail"/>
                                    <div class="card-content">
                                    <h1 class="card-header">{item.title}</h1>
                                    <Link to={`/detail/${item.id}`} className="link"><button class="card-btn">See more</button></Link>
                                    </div>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                })}
            </div>
        )}
        </>
    )
}

export default ListItem