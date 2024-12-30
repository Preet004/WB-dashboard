import React, { useState, useEffect } from 'react';
import api from '../api';

const TeamForm = () => {
  const [form, setForm] = useState({ name: '', organization: '' });
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const response = await api.get('/organizations');
      setOrganizations(response.data);
    };
    fetchOrganizations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/teams', form);
      alert('Team added successfully!');
      setForm({ name: '', organization: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding team.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Team</h2>
      <input
        type="text"
        placeholder="Team Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <select
        value={form.organization}
        onChange={(e) => setForm({ ...form, organization: e.target.value })}
        required
      >
        <option value="">Select Organization</option>
        {organizations.map((org) => (
          <option key={org._id} value={org._id}>
            {org.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Team</button>
    </form>
  );
};

export default TeamForm;
