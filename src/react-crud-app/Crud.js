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

	
	<Router>
	<Routes>
	<Route path='/react-app' element={<Home/>}/>
		<Route path='/' element={<Home/>}/>
		<Route  path='/create' element={<Create/>}/>
		<Route path='/edit' element={<Edit/>}/>
	</Routes>
	</Router>

</div>
);

}

export default App;
