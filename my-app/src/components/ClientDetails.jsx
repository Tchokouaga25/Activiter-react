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
    <div className="client-details"> 
      <h2>Détails du client</h2> 
      <div className="client-info"> 
        <p><strong>Nom:</strong> {client.name}</p> 
        <p><strong>Adresse:</strong> {client.adresse}</p> 
        <p><strong>Téléphone:</strong> {client.tel}</p> 
      </div> 
      <div className="buttons"> 
        <Link to="/clients"> 
          <button className="button">Retour à la liste</button> 
        </Link> 
        <Link to={`/clients/${id}/update`}> 
          <button className="button edit">Modifier</button> 
        </Link> 
      </div> 
    </div> 
  ); 
}; 
 
export default ClientDetails; 