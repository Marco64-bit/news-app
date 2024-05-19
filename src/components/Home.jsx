import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Home() {
    const [homeNews, setHomeNews] = useState([])
    async function getHomeNews(){
        let {data} = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=27b72cf6eed44cdcb11855aed93e1c59");
        setHomeNews(data.articles)
    }
    useEffect(()=>{
        getHomeNews();
        console.log(homeNews);
    }, [])
  return (
    <>
    <div className="container">
        <div className="row gy-3 mt-5">
            {homeNews.map((news, i)=>
            <div key={i} className="col-md-4 my-3 border-3 shadow-lg">
                <div className="news text-center">
                    <img src={news.urlToImage} className='w-100' alt='img' />
                    <h5>{news.title}</h5>
                    <p>{news.description}</p>
                    <a href={news.url}>News Link</a>
                    <p>Author: {news.author}</p>
                    <span>Date:{news.publishedAt}</span>
                </div>
            </div>
            )}
        </div>
    </div>
    </>
  )
}

export default Home