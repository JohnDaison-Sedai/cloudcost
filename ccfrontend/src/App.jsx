import React, { useState, useEffect, useRef } from 'react';
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
  const [region, setRegion] = useState([])
  const [errorMsg, setErrorMsg] = useState('');
  const [resourceTypeSelected, setResourceTypeSelected] = useState(false);
  const buttonAreaRef = useRef(null); // 1. Create a ref

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

  const getListOfRegions = async () => {

    try {
    const response = await fetch('http://localhost:8080/api/region');
    console.log(response,"response");
    if (!response.ok) throw new Error('Failed to fetch regions');
    const data = await response.json();
    console.log("Fetched regions:", data);
    return data;
  } catch (error) {
    console.error("Error fetching regions:", error);
    return [];
  
  }
}

  const addResource = () => {
    const lastResource = resources[resources.length - 1];
    if (
      !lastResource.resourceType ||
      !lastResource.region ||
      !lastResource.count ||
      lastResource.count < 1
    ) {
      setErrorMsg('Please fill all fields (Resource Type, Count, Region) in the previous row before adding a new resource.');
      return;
    }
    setErrorMsg('');
    const newId = Math.max(...resources.map(r => r.id)) + 1;
    setResources([...resources, { id: newId, resourceType: '', count: 1, region: '' }]);
    setResourceTypeSelected(false);

    // 2. Scroll to the button area after adding a new resource (with a slight delay to ensure DOM update)
    setTimeout(() => {
      buttonAreaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
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
    // Check if at least one resource row is filled
    if (
      resources.length === 0 ||
      !resources[0].resourceType ||
      !resources[0].region ||
      !resources[0].count ||
      resources[0].count < 1
    ) {
      setErrorMsg('Please select at least one Resource Type, Region, and Count before calculating the estimate.');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');
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
        console.log("Estimate data:", data);
        if (data.error) {
          console.error("Error in estimate:", data.error);
        }
        setEstimate(data.totalCost ? data : calculateMockEstimate(resources));
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
    setResource_type(resource_type);
  };

  const fetchRegions = async () => {
    const region = await getListOfRegions();
    setRegion(region);
  }

  fetchResources();
  fetchRegions();
}, []);

  return (
    <div className="App">
      <BackgroundDecoration />
      <div className="container">
        <Header />
        <div className="main-content">
          {errorMsg && (
            <div style={{ color: 'red', marginBottom: '1rem', fontWeight: 'bold' }}>
              {errorMsg}
            </div>
          )}
          {!resourceTypeSelected && (
            <div style={{ color: 'red', marginBottom: '1rem', fontWeight: 'bold' }}>
              Please select a resource type before proceeding.
            </div>
          )}
          <ResourceConfiguration
            resourceTypeSelected={resourceTypeSelected}
            setResourceTypeSelected={setResourceTypeSelected}
            resources={resources}
            resourceTypes={resource_type}
            onUpdateResource={updateResource}
            onAddResource={addResource}
            onRemoveResource={removeResource}
          />

          {/* Place the ref here, wrapping the buttons */}
          <div ref={buttonAreaRef}>
            <button 
              onClick={calculateEstimate} 
              className="calculate-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Calculating...' : 'Calculate Estimate'}
            </button>
          </div>

          <CostEstimate estimate={estimate} /> 
        </div> 
      </div>
    </div>
  );
}

export default App;

