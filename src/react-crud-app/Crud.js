// important imports
import React from 'react'
import { BrowserRouter as Router,Route, Routes }
	from 'react-router-dom';
import './Crud.css';
import Create from './Create';
import Edit from './Edit';
import Home from './Home';

function App() {
return (
	<div className='App' >

	<HashRouter>
	<Routes>
		<Route path='/' element={<Home/>}/>
		<Route  path='/create' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}/>
	</Routes>
	</HashRouter>
</div>
);

}

export default App;
