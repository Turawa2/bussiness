import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chart from './Chart';
import Home from './Home';
import Form from './Form';
import Element from './Element';
import Panel from './Panel';
import Table from './Table';

function Routing() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route  path='/home' element={<Home/>} />
        <Route  path='/chart' element={ <Chart/> } />
        <Route  path='/form' element={ <Form/> } />
        <Route  path='/element' element={ <Element/>} />
        <Route  path='/panel' element={ <Panel/> } />
        <Route  path='/table' element={ <Table/> } />

        <Route  path='*' element={<Home/>} />
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default Routing
