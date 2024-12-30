import React, { useState } from 'react';
import api from '../api';

const OrganizationForm = () => {
  const [form, setForm] = useState({ name: '', email: '', location: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/organizations', form);
      alert('Organization added successfully!');
      setForm({ name: '', email: '', location: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding organization.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Organization</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        required
      />
      <button type="submit">Add Organization</button>
    </form>
  );
};

export default OrganizationForm;
