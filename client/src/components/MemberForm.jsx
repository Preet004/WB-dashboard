import React, { useState, useEffect } from 'react';
import api from '../api';

const MemberForm = () => {
  const [form, setForm] = useState({ name: '', team: '' });
  const [teams, setTeams] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await api.get('/teams');
      setTeams(response.data);
    };
    fetchTeams();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const memberResponse = await api.post('/members', form);

      if (file) {
        const formData = new FormData();
        formData.append('image', file);
        await api.post(`/members/${memberResponse.data._id}/image`, formData);
      }

      alert('Member added successfully!');
      setForm({ name: '', team: '' });
      setFile(null);
    } catch (err) {
      console.error(err);
      alert('Error adding member.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Member</h2>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <select
        value={form.team}
        onChange={(e) => setForm({ ...form, team: e.target.value })}
        required
      >
        <option value="">Select Team</option>
        {teams.map((team) => (
          <option key={team._id} value={team._id}>
            {team.name}
          </option>
        ))}
      </select>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default MemberForm;
