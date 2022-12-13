import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Error from './Error';
import SimpleSpa from './list/02-simpleSpa';
import Jsx from './list/03-jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Link to='/'><h2 className='center'>리스트로 돌아가기</h2></Link>
		<hr/>
		<Routes>
			<Route exact path='/' element={<App/>} />
			{/* 하위 라우터가 있을 경우 /*를 붙여줘야 한다. */}
			<Route exact path='/simpleSpa/*' element={<SimpleSpa/>}/>
			<Route exact path='/jsx/*' element={<Jsx/>}/>

			{/* 에러페이지 : 에러 페이지는 항장 제일 아랫부분에 위치해야 함 */}
			<Route path='*' element={<Error/>}/>
		</Routes> 
	</BrowserRouter>
);
