import React from 'react';
import ResourceRow from './ResourceRow';

const ResourceConfiguration = ({ resources, resourceTypes, regions, onUpdateResource, onAddResource, onRemoveResource, resourceTypeSelected, setResourceTypeSelected}) => {
  return (
    <div className="form-section">
      <h2 className="section-title">Resource Configuration</h2>
      
      {resources.map((resource) => (
        <ResourceRow
          key={resource.id}
          resource={resource}
          resourceTypes={resourceTypes}
          regions={regions}
          onUpdate={onUpdateResource}
          onRemove={onRemoveResource}
          canRemove={resources.length > 1}
          resourceTypeSelected={resourceTypeSelected}
          setResourceTypeSelected={setResourceTypeSelected}
        />
      ))}

      <button onClick={onAddResource} className="add-resource-btn">
        <span className="plus-icon">+</span>
        Add Another Resource
      </button>
    </div>
  );
};

export default ResourceConfiguration; 