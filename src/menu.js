import React from 'react';
import './menu.css';
import {SEARCH} from './searchForm.js';

 
import { useDispatch } from 'react-redux';
import {loadReddit } from './reducer.js';



export const Menu = () => {
 
    const dispatch = useDispatch();
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
            
                
                <div onClick={ () => {  dispatch(loadReddit( 'https://www.reddit.com/search.json?q=' + 'marvel' ));  document.getElementById('pop').style.display = "none"; } }   className="subRedditContainer">
                    <div id='marvel' className="subImage"></div>
                    <div>Marvel</div>
                </div>

                <div onClick={ () => {  dispatch(loadReddit( 'https://www.reddit.com/search.json?q=' + 'crypto' ));  document.getElementById('pop').style.display = "none"; } }   className="subRedditContainer">
                    <div id='crypto' className="subImage"></div>
                    <div>Crypto</div>
                </div>


                <div onClick={ () => {  dispatch(loadReddit( 'https://www.reddit.com/search.json?q=' + 'tax' ));   document.getElementById('pop').style.display = "none";} }   className="subRedditContainer">
                    <div id='tax' className="subImage"></div>
                    <div>Tax</div>
                </div>


                <div onClick={ () => {  dispatch(loadReddit( 'https://www.reddit.com/search.json?q=' + 'meme' ));  document.getElementById('pop').style.display = "none"; } }   className="subRedditContainer">
                    <div id="meme" className="subImage"></div>
                    <div>Memes</div>
                </div>

 
            </div> 
        </>
    );
}
