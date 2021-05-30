import {useState, useEffect} from 'react';
import moment from 'moment';
import './index.css';

function FilterBox({moviesData, change}){
    const today = moment().format('MMM Do YYYY');

    const[start, setStart] = useState(today);
    const[end, setEnd] = useState(today);
    

    const checkData = (e) => {
        e.preventDefault();
        let ed = moment(end).format('MMMM Do YYYY');
        let sd = moment(start).format('MMMM Do YYYY');
        let result = moviesData.filter(item => {var time = moment(item.showTime).format('MMMM Do YYYY');
            return (sd < time && time < ed);
           });
        change(result);
    }

    const handleStart = (e) => {
        setStart(e.target.value)
    }

    const handleEnd = (e) => {
        setEnd(e.target.value)
    }

    return(
        <div className="box-container">
            <form>
                <div>Filter showtime date</div>
                <label htmlFor="start">Start:</label>
                <input type="date" id="start" name="start" onChange={e => handleStart(e)}/>
                <label htmlFor="end">End:</label>
                <input type="date" id="end" name="end" onChange={e => handleEnd(e)} />
                <div className="btn-wrapper"><input type="submit" onClick={e => checkData(e)} className="btn-submit"/></div>
            </form>
        </div>
    )
}

export default FilterBox;