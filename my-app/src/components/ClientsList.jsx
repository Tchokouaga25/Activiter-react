// ClientsList.jsx 
import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
 
const ClientsList = () => { 
  const [clients, setClients] = useState([]); 
 
  useEffect(() => { 
    fetchData(); 
  },[]);//lancer la fonction fetchData une seule fois au premier render 
 
  const fetchData = async () => { 
    try {
      const response = await axios.get('http://localhost:3001/clients'); 
      setClients(response.data);//chargement du résultat de la requête 
    } catch (error) {
      console.error('Erreur lors du chargement des clients:', error);
    }
  };// axios est un API 
 
  const handleDelete = async (id) => { 
    await axios.delete(`http://localhost:3001/clients/${id}`); 
    fetchData(); 
  };//axios.delete pour supprimer le client identifié par id 
 
  return ( 
    <div> 
        <center> 
            <h1 className="text-3xl font-bold my-6 text-center">Liste des clients</h1> 
            <Link to={`/clients/create`}><button className= "bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Ajouter</button></Link><br/><br/> 
            <table className="w-full border border-gray-800 rounded-lg shadow-md"> 
                <thead className="  bg-green-500 m-2 "> 
                    <tr className=" mx-2 border-gray-800"> 
                        <th className="px-6  py-5 text-left text-md font-medium text-black uppercase tracking-wider">Nom</th> 
                        <th className="px-6  py-5 text-left text-md font-medium text-black uppercase tracking-wider">Adresse</th> 
                        <th className="px-6  py-5 text-left text-md font-medium text-black uppercase tracking-wider">Tel</th> 
                        <th className="px-6  py-5 text-center text-md font-medium text-black uppercase tracking-wider">Opérations</th> 
                    </tr> 
                </thead> 
                <tbody className="bg-white divide-y divide-gray-200 "> 
                    {clients.map(client => ( //pour chaque client 
                    <tr  key={client.id}> 
                        <td className="px-6 py-4  text-left " ><Link to={`/clients/${client.id}`} className="  text-left" >{client.name}</Link></td> 
                        <td className="px-6 py-4">{client.adresse}</td> 
                        <td className="px-6 py-4">{client.tel}</td> 
                        <td className="flex space-x-2 my-4 items-center justify-center">{/*colonne opérations (modifier, supprimer)*/} 
                          <Link to={`/clients/${client.id}/update`}> 
                            <button className="bg-blue-500 text-white mx-5 px-3 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Modifier</button></Link>  
                          <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={()=>handleDelete(client.id)}>Supprimer</button> 
                        </td> 
                    </tr> 
                    ))} 
                </tbody> 
            </table> 
        </center> 
    </div> 
  ); 
}; 
 
export default ClientsList; 