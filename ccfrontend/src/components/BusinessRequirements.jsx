import React from 'react';

const BusinessRequirements = ({ value, onChange }) => {
  return (
    <div className="form-section">
      <h2 className="section-title">Business Requirements</h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Describe your business requirements, use cases, and any specific needs..."
        className="requirements-textarea"
        rows="4"
      />
    </div>
  );
};

export default BusinessRequirements; 