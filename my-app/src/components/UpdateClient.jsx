import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const UpdateClient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    adresse: '',
    tel: ''
  });

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/clients/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement du client:', error);
      }
    };

    fetchClient();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/clients/${id}`, formData);
      navigate('/clients');
    } catch (error) {
      console.error('Erreur lors de la mise à jour du client:', error);
    }
  };

  return (
    <div className="update-client">
      <h2>Modifier le Client</h2>
      <form onSubmit={handleSubmit} className="client-form">
        <div className="form-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="adresse">Adresse:</label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Téléphone:</label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttons">
          <button type="submit" className="button update">
            Mettre à jour
          </button>
          <Link to={`/clients/${id}`}>
            <button type="button" className="button view">
              Voir détails
            </button>
          </Link>
          <Link to="/clients">
            <button type="button" className="button cancel">
              Annuler
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;