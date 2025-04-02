// ClientDetails.js 
import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios'; 
 
const ClientDetails = () => { 
  const [client, setClient] = useState({}); 
  const { id } = useParams(); 
 
  useEffect(() => { 
    const fetchClient = async () => { 
      try { 
        const response = await axios.get(`http://localhost:3001/clients/${id}`); 
        setClient(response.data); 
      } catch (error) { 
        console.error('Erreur lors du chargement du client:', error); 
      } 
    }; 
 
    fetchClient(); 
  }, [id]); 
 
  return ( 
    <div className="client-details rounded-sm bg-gray-100"> 
      <h2  className="text-3xl font-bold my-6 text-center">Détails du client</h2> 
      <div className=" flex flex-col space-y-3 justify-left client-info bg-gray-50"> 
        <p className=" w-full text-left text-xl font-medium mx-3"><strong className="mr-10  ">Nom:</strong> {client.name}</p> 
        <p className="w-full text-left text-xl font-medium mx-3"><strong className="mr-10  ">Adresse:</strong> {client.adresse}</p> 
        <p className="w-full text-left text-xl font-medium mx-3"><strong className="mr-10  ">Téléphone:</strong> {client.tel}</p> 
      </div> 
      <div className="flex justify-end buttons "> 
        <Link to="/clients"> 
          <button className="button bg-green-800 hover:bg-blue-800 rounded-sm text-white">Retour à la liste</button> 
        </Link> 
        <Link to={`/clients/${id}/update`}> 
          <button className="button edit bg-blue-800 hover:bg-green-800 rounded-sm text-white">Modifier</button> 
        </Link> 
      </div> 
    </div> 
  ); 
}; 
 
export default ClientDetails; 