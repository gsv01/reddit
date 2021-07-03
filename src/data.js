import React,{useState,useEffect} from 'react';
import './data.css';

import { useDispatch,useSelector } from 'react-redux';
import { loadReddit, selectData } from './reducer';
 

export const Data = () => {
    const [url,setUrl] = useState('https://www.reddit.com/r/popular.json');
    const dispatch = useDispatch();  

    const data = useSelector(selectData);

    useEffect(()=>{ 
        if(data.isLoading === true && data.hasError===false){
            alert('data is loading');
        }else if(data.isLoading === false && data.hasError===true){
            alert("Error occcured !");
        }else{
            dispatch(loadReddit(url));
        }
    },[url]);

    if(data.data !== []){
        // console.log(data);
        // for(let i=0; i < data.data.length ; i++){
        //     console.log(data.data[i].data.author);
        // }


        return data.data.map( each => {
            let author  = each.data.author;
            let title = each.data.title;
            let imgSrc1 = each.data.url_overridden_by_dest ;
            let likes = each.data.ups;
            let comments = each.data.num_comments;
           
            let check = each.data.is_video ; 
            
            let css = {
                backgroundImage: 'url('+ imgSrc1 +')' 
            } ;
 
  

            if(!check){

                return ( 
         
    
                    <div className="post_container">
                        <div className="username">@{author}</div>
                        <div className="caption">  {title} </div>
                        <div   className="imgContainer" >
                            <img  style={css}></img>
                        </div> 
        
                        <div className="actionContainer">
                            <div>{likes}</div>
        
        
                            <div className="moodContainer"> 
                                <div className="like"></div>
                                <div className="dislike"></div>
                            </div> 
         
                            
                            <div className="commentsContainer">
                                <div>{comments}</div>
                                <div className="comments"></div>
                            </div>


                            <div>30 JULY</div>

                        </div>
                    </div>
                
                
                
                ) 
            }else{

                return ( 
         
    
                    <div className="post_container">
                        <div className="username">@{author}</div>
                        <div className="caption">  {title} </div>
                       
        
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
                
                
                
                ) 
            }

    })}else{

        return (
            <div align='center'>
                 
                <h1>Error Occured</h1>
            </div>
    
    
     
        );
    }
     
   
}