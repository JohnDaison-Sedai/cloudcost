import React from 'react';

const currencyMultipliers = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  INR: 83.1,
  AUD: 1.52,
};

const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  INR: '₹',
  AUD: 'A$',
};

const CostEstimate = ({ estimate }) => {
  const [currency, setCurrency] = React.useState('Select a Currency');

  if (!estimate) return null;


  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }

  // Calculate the converted cost
  const multiplier = currencyMultipliers[currency] || 1;
  const symbol = currencySymbols[currency] || '$';
  const convertedCost = (estimate.totalCost * multiplier).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="estimate-section">
      <div className="estimate-header">
        <h2 className="section-title">
        Cost Estimate
        </h2>
        <select className="select-field" value={currency} onChange={handleCurrencyChange}>
          <option value="">Select a Currency</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
          <option value="AUD">AUD</option>
          Select a Currency
        </select>
      

        
      </div>
      
      <div className="estimate-card">
        <div className="total-cost">
          <span className="cost-label">Total Monthly Cost:</span>
          <span className="cost-amount">{symbol}{convertedCost}</span>
        </div>
        
        <div className="breakdown"> 
          <h3>Cost Breakdown</h3>
          {estimate.resourceCosts.map((item, index) => (
            <div key={index} className="breakdown-item">
              <span className="item-details">
                {item.resourceType} × {item.count} ({item.region})
              </span>
              <span className="item-cost">{symbol}{(item.unitCost * multiplier).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
</span>
            </div>
          ))}
        </div> 
       </div>
    </div>
  );
};

export default CostEstimate;