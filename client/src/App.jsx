import React from 'react';
import OrganizationForm from './components/OrganizationForm';
import TeamForm from './components/TeamForm';
import MemberForm from './components/MemberForm';
import HierarchyView from './components/HierarchyView';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Web-Based Dashboard</h1>
      <div className="forms-container">
        <OrganizationForm />
        <TeamForm />
        <MemberForm />
      </div>
      <div className="hierarchy-container">
        <HierarchyView />
      </div>
    </div>
  );
};

export default App;
