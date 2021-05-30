import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import moment from 'moment';
import Loading from '../loading';
import './index.css';

function DetailPage({match}){

    const[detail, setDetail] = useState(null);
    
    useEffect(() => {
      const detailId = match.params.id
      const fetchDetailApi = () => {
        axios.get(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/${detailId}`)
            .then(res => {
                const detailData = res.data;
                setDetail(detailData);
            })
    }
        fetchDetailApi();
    },[])

    return (
      <div>
        {detail === null ? (
            <div className="loading-body">
              <Loading/>
            </div>
        ) : (
          <div className="movie-container">
            <div className="image split">
                <div className="back-button">
                   <Link to="/" className="link">Back To Home Page</Link>
                </div>
                <LazyLoad height={200} once>
                    <img src={detail.image} className="image-content" alt="thumbnail movie.jpg"/>
                </LazyLoad>
            </div>
            <div className="description split">
                <div className="description-content">
                    <h1>{detail.title}</h1>
                    <p>PG-13</p>
                    <span className="likes">{detail.like} likes</span>
                    <h3>Show Time</h3>
                    <p>{moment(detail.showTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default DetailPage;