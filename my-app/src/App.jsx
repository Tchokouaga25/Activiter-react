// App.js 
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

//importation des composants 
import ClientsList from './components/ClientsList.jsx'; 
import CreateClient from './components/CreateClient.jsx'; 
import ClientDetails from './components/ClientDetails.jsx'; 
import UpdateClient from './components/UpdateClient.jsx'; 
import './App.css';
const App = () => { 
  return ( 
    <div className="App">
        <Router> 
            <Routes> 
                <Route path="/" element={<ClientsList/>} />
                <Route path="/clients" element={<ClientsList/>} /> 
                <Route path="/clients/create" element={<CreateClient/>} /> 
                <Route path="/clients/:id" element={<ClientDetails/>} /> 
                <Route path="/clients/:id/update" element={<UpdateClient/>} /> 
            </Routes> 
        </Router> 
    </div>
  ); 
}; 
export default App; 