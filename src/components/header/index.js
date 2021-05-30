import { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import "./index.css";

function Header() {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(["A","S","c","A","S","c","A","S","c","A","S","c"]);
  const [search, setSearch] = useState("");
  const [id,setId] = useState("");
  const history = useHistory();

  useEffect(() => {
    // setOptions(moviesData);
    fetchApi();
  }, []);

const fetchApi = () => {
    axios.get(`https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies`)
        .then(res => {
            const data = res.data;
            setOptions(data);
        })
}

  const updateSearch = item => {
    setSearch(item.title);
    setId(item.id)
    setDisplay(false);
  };

  const handleEnter=(event)=> {
    if (event.keyCode === 13) {
        history.push(`/detail/${id}`)
    }
}

    const handleFind = () => {
        history.push(`/detail/${id}`);
    }

  return (
    <header>
      <a href="/#" className="logo">
        Cinevizz
      </a>
      <div className="search">
        <input type="text" placeholder="search" onClick={() => setDisplay(!display)} value={search}
        onChange={event => setSearch(event.target.value)} onKeyDown={(e) => handleEnter(e)}/>
        <i className="fa fa-search" aria-hidden="true" onClick={handleFind}></i>
        {display && (
          <div className="autoContainer">
            {options
              .filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
              .map((value, i) => {
                return (
                  <div
                    onClick={() => updateSearch(value)}
                    className="option"
                    key={i}
                    tabIndex="0"
                  >
                    <span>{value.title}</span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
