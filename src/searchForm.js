import React,{useState} from 'react';
import './searchForm.css';


import { useDispatch ,useSelector} from 'react-redux';
import {loadReddit,selectData } from './reducer.js';


export const SEARCH = () => {
    const dispatch  = useDispatch();
    const [searchTerm,setSearchTerm] = useState();
    

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const data = useSelector(selectData);

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'https://www.reddit.com/search.json?q=' + searchTerm ;
        dispatch(loadReddit(url)); 
    }


    return (
        <>
            <form  onSubmit={handleSubmit}>
                <input
                    className="input1"
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
                ></input>
                <input
                    className="input2"
                    type="submit"
                    value="Search"
                ></input>
            </form>
        </>
    );
}