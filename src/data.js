import React from 'react';
import './data.css';

import { useDispatch,useSelector } from 'react-redux';
import { loadReddit, selectData } from './reducer';

export const Data = () => {
    const dispatch = useDispatch();

    const url = "https://www.reddit.com/r/popular.json";

    dispatch(loadReddit(url));  
     
    const data = useSelector(selectData);
     

    return (
        <div align='center'>
            <br/><br/><br/><br/><br/> 
            

        

            <div className="post_container">
                <div className="username">@emilybrown</div>
                <div className="caption"> 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <div className="imgContainer"></div>

                <div className="actionContainer">
                    <div>2.4k</div>


                    <div className="moodContainer"> 
                        <div className="like"></div>
                        <div className="dislike"></div>
                    </div> 
 
                    
                    <div className="commentsContainer">
                        <div>836</div>
                        <div className="comments"></div>
                    </div>
                </div>
            </div>
        
        </div>
    );
}