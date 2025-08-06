export const calculateMockEstimate = (resources) => {
  const totalCost = resources.reduce((total, r) => {
    const baseCost = r.resourceType === 'compute' ? 50 : 
                   r.resourceType === 'database' ? 100 : 20;
    return total + (baseCost * r.count);
  }, 0);

  const breakdown = resources.map(r => ({
    resourceType: r.resourceType,
    count: r.count,
    region: r.region,
    cost: r.resourceType === 'compute' ? 50 * r.count : 
          r.resourceType === 'database' ? 100 * r.count : 20 * r.count
  }));

  return { totalCost, breakdown };
}; 