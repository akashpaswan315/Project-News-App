import React, { useEffect, useState } from 'react';
import "./newss.css"

const Newss = () => {
    const[mynews , setMyNews] =useState([]);
    const fetchData= async () =>{
        let resonse = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=3f8eae25e8ee4be097a9e0254bbde84c")
        let data = await resonse.json();
        setMyNews(data.articles)
    }
    

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    
    <div className='mainDiv'>
    {
        mynews.map((ele) =>{
            return (
                <>
                     <div class="card" style={{width: "300px" , height: "400px" ,marginLeft:"5rem" , marginTop:"2rem"}}>
                     <img src={ele.urlToImage == null ? "https://dims.apnews.com/dims4/default/2529fe2/2147483647/strip/true/crop/5760x3240+0+300/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd4%2F84%2F12675fbbc7043a26134f3f07afde%2F444c9832972c4788b701c467ee37d873" : ele.urlToImage} class="card-img-top" alt="..."/>
                     <div class="card-body">
                     <h5 class="card-title">{ele.author == "" ? "ISABEL DEBRE, JULIA FRANKEL, SAMY MAGDY" : ele.author}</h5>
                    <p class="card-text">{ele.title}</p>
                    <a href={ele.url} target ="_blank" class="btn btn-primary">Read More</a>
                  </div>
                  </div>
                </>
            )
        })
    }
    </div>
    </>
  )
}

export default Newss