import React from 'react';
import './searchForm.css';

export const SEARCH = () => {
    return (
        <>
            <form  >
                <input
                    className="input1"
                    type="text"
                    placeholder="Search"

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