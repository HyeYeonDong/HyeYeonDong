import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import NewsList from "../components/NewList";
import NewsCard from "../components/NewsCard";

import NewsData from '../NewsData';

const News = () => {
    return (
        <div>
            <h2>헤드라인 뉴스</h2>
            <nav>
                <NavLink className='subMenu' to='news_card'>카드형</NavLink>&nbsp;|&nbsp;
                <NavLink className='subMenu' to='news_list'>리스트형</NavLink>
            </nav>
            <Routes>
                <Route path="news_card" element={<NewsCard news={NewsData}/>}/>
                <Route path="news_list" element={<NewsList news={NewsData}/>}/>
            </Routes>
        </div>
    )
}

export default News;