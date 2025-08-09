import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import BackgroundDecoration from './components/BackgroundDecoration';
import ResourceConfiguration from './components/ResourceConfiguration';
import BusinessRequirements from './components/BusinessRequirements';
import CostEstimate from './components/CostEstimate';

import { resourceTypes, regions } from './utils/constants';
import { calculateMockEstimate } from './utils/costCalculator';
import { computeHeadingLevel } from '@testing-library/dom';

function App() {
  const [resources, setResources] = useState([
    { id: 1, resourceType: '', count: 1, region: '' }
  ]);
  const [businessRequirements, setBusinessRequirements] = useState('');
  const [estimate, setEstimate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resource_type, setResource_type] = useState([])

  const getListOfResourceTypes = async () => {

    try {
    const response = await fetch('http://localhost:8080/api/resource_type');
    console.log(response,"response");
    if (!response.ok) throw new Error('Failed to fetch resources');
    const data = await response.json();
    console.log("Fetched resourcetypes:", data);
    return data;
  } catch (error) {
    console.error("Error fetching resourcetypes:", error);
    return [];
  
  }
}

  const addResource = () => {
    const newId = Math.max(...resources.map(r => r.id)) + 1;
    setResources([...resources, { id: newId, resourceType: '', count: 1, region: '' }]);
  };

  const removeResource = (id) => {
    if (resources.length > 1) {
      setResources(resources.filter(r => r.id !== id));
    }
  };

  const updateResource = (id, field, value) => {
    setResources(resources.map(r => 
      r.id === id ? { ...r, [field]: value } : r
    ));
  };

  const calculateEstimate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resources: resources.map(r => ({
            resourceType: r.resourceType,
            count: r.count,
            region: r.region
          })),
          businessRequirements
        })
      });

      if (response.ok) {
        const data = await response.json();
        
        setEstimate(data);
      } else {
        setEstimate(calculateMockEstimate(resources));
      }
    } catch (error) {
      console.error('Error calculating estimate:', error);
      setEstimate(calculateMockEstimate(resources));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
  const fetchResources = async () => {
    const resource_type = await getListOfResourceTypes();
    setResource_type(resources);
  };

  fetchResources();
}, []);

  return (
    <div className="App">
      <BackgroundDecoration />
      
      <div className="container">
        <Header />

          <div className="main-content">
          <ResourceConfiguration
            resources={resources}
            resourceTypes={resourceTypes}
            regions={regions}
            onUpdateResource={updateResource}
            onAddResource={addResource}
            onRemoveResource={removeResource}
          />

          {/* <BusinessRequirements
            value={businessRequirements}
            onChange={setBusinessRequirements}
          />

          <button 
            onClick={calculateEstimate} 
            className="calculate-btn"
            disabled={isLoading}
          >
            {isLoading ? 'Calculating...' : 'Calculate Estimate'}
          </button>

          <CostEstimate estimate={estimate} /> */}
        </div> 
      </div>
    </div>
  );
}

export default App;

