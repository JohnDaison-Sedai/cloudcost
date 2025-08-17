import React from 'react';

const ResourceRow = ({ resource, resourceTypes, onUpdate, onRemove, canRemove, resourceTypeSelected, setResourceTypeSelected }) => {
  const [allRegions, setAllRegions] = React.useState([]);
  const [regions, setRegions] = React.useState([]);
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

    if (selectedType) {
      setResourceTypeSelected(true);
      try {
        const response = await fetch(`http://localhost:8080/api/region/${selectedType}`);
        if (!response.ok) throw new Error('Failed to fetch regions');
        const data = await response.json(); // [{region, count}, ...]
        setAllRegions(data);
        // Filter regions for current count
        const count = resource.count > 0 ? resource.count : 1;
        setRegions(data.filter(r => r.count >= count));
      } catch (error) {
        setAllRegions([]);
        setRegions([]);
      }
    } else {
      setAllRegions([]);
      setRegions([]);
    }
  };

  const handleCountChange = (e) => {
    const val = e.target.value;
    const count = val === '' ? 0 : parseInt(val, 10);
    onUpdate(resource.id, 'count', count);
    setRegions(allRegions.filter(r => r.count >= (count > 0 ? count : 1)));
  };

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
            onChange={handleCountChange}
            onBlur={(e) => {
              if (!e.target.value || parseInt(e.target.value, 10) < 1) {
                onUpdate(resource.id, 'count', 1);
                setRegions(allRegions.filter(r => r.count >= 1));
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
            disabled={!resource.resourceType || !resource.count}
            title={!resource.resourceType ? 'Select a valid Resource type first!' : ''}
          >
            <option value="">Select region</option>
            {regions.map(region => (
              <option key={region.region} value={region.region}>
                {region.region}
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