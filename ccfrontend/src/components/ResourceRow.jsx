import React from 'react';

const ResourceRow = ({ resource, resourceTypes, regions, onUpdate, onRemove, canRemove }) => {
  return (
    <div className="resource-row">
      <div className="resource-fields">
        <div className="field-group">
          <label>Resource Type</label>
          <select
            value={resource.resourceType}
            onChange={(e) => onUpdate(resource.id, 'resourceType', e.target.value)}
            className="select-field"
          >
            <option value="">Select resource type</option>
            {resourceTypes.map(type => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="field-group">
          <label>Count</label>
          <input
            type="number"
            min="1"
            value={resource.count}
            onChange={(e) => onUpdate(resource.id, 'count', parseInt(e.target.value) || 1)}
            className="input-field"
          />
        </div>

        <div className="field-group">
          <label>Region</label>
          <select
            value={resource.region}
            onChange={(e) => onUpdate(resource.id, 'region', e.target.value)}
            className="select-field"
          >
            <option value="">Select region</option>
            {regions.map(region => (
              <option key={region.value} value={region.value}>
                {region.label}
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