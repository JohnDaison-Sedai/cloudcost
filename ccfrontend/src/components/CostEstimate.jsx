import React from 'react';

const CostEstimate = ({ estimate }) => {
  if (!estimate) return null;

  return (
    <div className="estimate-section">
      <h2 className="section-title">Cost Estimate</h2>
      <div className="estimate-card">
        <div className="total-cost">
          <span className="cost-label">Total Monthly Cost:</span>
          <span className="cost-amount">${estimate.totalCost}</span>
        </div>
        
        <div className="breakdown">
          <h3>Cost Breakdown</h3>
          {estimate.breakdown.map((item, index) => (
            <div key={index} className="breakdown-item">
              <span className="item-details">
                {item.resourceType} × {item.count} ({item.region})
              </span>
              <span className="item-cost">${item.cost}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostEstimate; 