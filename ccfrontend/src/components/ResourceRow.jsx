import React from 'react';

const ResourceRow = ({ resource, resourceTypes, onUpdate, onRemove, canRemove, resourceTypeSelected, setResourceTypeSelected }) => {

  const [regions,setRegion] = React.useState([]);
  const resourceTypeIdMap = {
  'Compute': 1,
  'Storage': 2,
  'Database': 3,
  'Networking': 4,
  'Security and Identity': 5,
  'AI/ML': 6,
};


  const handleResourceTypeChange = async (e) => {
    const selectedType = resourceTypeIdMap[e.target.value];
    onUpdate(resource.id, 'resourceType', e.target.value);
    console.log("Selected resource type:", selectedType);

    if (selectedType) {
      setResourceTypeSelected(true);
    }

    // Fetch regions based on the selected resource type
    if (selectedType) {

      try {
        const response = await fetch(`http://localhost:8080/api/region/${selectedType}`);
        if (!response.ok) throw new Error('Failed to fetch regions');

        const data = await response.json();
        console.log("Fetched regions for resource type:", selectedType, data);
        setRegion(data);
      } catch (error) {
        console.error("Error fetching regions:", error);
        setRegion([]);
      }
    } else {
      setRegion([]);
    }
  }


  return (
    <div className="resource-row">
      <div className="resource-fields">
        <div className="field-group">
          <label>Resource Type</label>
          <select
            value={resource.resourceType}
            onChange={handleResourceTypeChange}
            className="select-field"
          >
            <option value="">Select resource type</option>
            {/* {resourceTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))} */}
            {resourceTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="field-group">
          <label>Count</label>
          <input
            type="number"
            min="1"
            value={resource.count === 0 ? '' : resource.count}
            onChange={(e) => {
              // Allow empty string for user editing
              const val = e.target.value;
              if (val === '') {
                onUpdate(resource.id, 'count', 0);
              } else {
                onUpdate(resource.id, 'count', parseInt(val, 10));
              }
            }}
            onBlur={(e) => {
              // On blur, reset to 1 if empty or invalid
              if (!e.target.value || parseInt(e.target.value, 10) < 1) {
                onUpdate(resource.id, 'count', 1);
              }
            }}
            className="input-field"
          />
        </div>

        <div className="field-group">
          <label>Region</label>
          <select
            value={resource.region}
            onChange={(e) => onUpdate(resource.id, 'region', e.target.value)}
            className="select-field"
            disabled={!resource.resourceType}
            title={!resource.resourceType?'Select a valid Resource type first!':''}
          >
            <option value="">Select region</option>
            {regions.map(region => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>

      {canRemove && (
        <button
          onClick={() => onRemove(resource.id)}
          className="remove-btn"
          title="Remove resource"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default ResourceRow;