import React from 'react';
import './menu.css';
import {SEARCH} from './searchForm.js';

 

export const Menu = () => {
 
 
    function showList(e){ 
        e.preventDefault();
        document.getElementById('pop').style.display = "block";
 
    }

    const close = (e) => {
        e.preventDefault();
        document.getElementById('pop').style.display = "none";
    }


    return (
        <>
            <div className="menu">
                <div className="logoContainer"> 
                    <div className="logoImage"></div>
                    <div className="logo">Reddit</div>
                </div>
                 
                <div><SEARCH/></div>
                <div onClick={showList} className="categories"></div>
            </div>

            <div id="pop" className="expertList">
            

                <div onClick={close} id="close">Close </div>
                <div className="subRedditsTitle"><b>Subreddits</b></div>
            
                
                <div className="subRedditContainer">
                    <div className="subImage"></div>
                    <div>Color</div>
                </div>


            </div>
        </>
    );
}
