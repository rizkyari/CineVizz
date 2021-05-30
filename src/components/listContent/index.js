import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import Loading from '../loading';
import FilterBox from '../filterBox';
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

    const handleMoviesData = (filteredValue) =>{
        setMovies(filteredValue);
    }

    return(
        <>
        {movies === null ? (
            <div className="loading-body">
                <Loading/>
            </div>
        ) : (
            <div>
                <FilterBox moviesData={movies} change={handleMoviesData}/>
                { movies.length < 1 ? (
                    <div>
                        <h1>There's no movies available on that date</h1>
                    </div>
                ) : (
                    <div className="body-content">
            {movies.map(function(item,i){
                    return <div key={i} className="wrapper">
                        <LazyLoad height={200}>
                            <div className="grid-item">
                                <div className="card"><img className="card-img" src={item.image} alt="movie thumbnail"/>
                                    <div className="card-content">
                                    <h1 className="card-header">{item.title}</h1>
                                    <Link to={`/detail/${item.id}`} className="link"><button className="card-btn">See more</button></Link>
                                    </div>
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                })}
            </div>
                )}
            </div>
        )}
        </>
    )
}

export default ListItem