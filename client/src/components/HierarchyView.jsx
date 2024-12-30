import React, { useEffect, useState } from 'react';
import api from '../api';

const HierarchyView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/organizations');
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="hierarchy">
      <h2>Hierarchy View</h2>
      {data.map((org) => (
        <div key={org._id} className="organization">
          <h3>{org.name}</h3>
          {org.teams.map((team) => (
            <div key={team._id} className="team">
              <h4>{team.name}</h4>
              {team.members.map((member) => (
                <div key={member._id} className="member">
                  <p>
                    {member.name}{' '}
                    <span
                      style={{
                        color: member.imageUploaded ? 'green' : 'red',
                      }}
                    >
                      {member.imageUploaded ? 'Image Uploaded' : 'Image Not Uploaded'}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HierarchyView;
