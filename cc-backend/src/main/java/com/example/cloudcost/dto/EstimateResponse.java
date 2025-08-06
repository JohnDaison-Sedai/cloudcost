package com.example.cloudcost.dto;

import java.util.List;

public class EstimateResponse {
    private List<ResourceCost> resourceCosts;
    private double totalCost;
    private String currency;

    public EstimateResponse() {}

    public EstimateResponse(List<ResourceCost> resourceCosts, double totalCost, String currency) {
        this.resourceCosts = resourceCosts;
        this.totalCost = totalCost;
        this.currency = currency;
    }

    public List<ResourceCost> getResourceCosts() {
        return resourceCosts;
    }

    public void setResourceCosts(List<ResourceCost> resourceCosts) {
        this.resourceCosts = resourceCosts;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public static class ResourceCost {
        private String resourceType;
        private int count;
        private String region;
        private double unitCost;
        private double totalCost;

        public ResourceCost() {}

        public ResourceCost(String resourceType, int count, String region, double unitCost, double totalCost) {
            this.resourceType = resourceType;
            this.count = count;
            this.region = region;
            this.unitCost = unitCost;
            this.totalCost = totalCost;
        }

        public String getResourceType() {
            return resourceType;
        }

        public void setResourceType(String resourceType) {
            this.resourceType = resourceType;
        }

        public int getCount() {
            return count;
        }

        public void setCount(int count) {
            this.count = count;
        }

        public String getRegion() {
            return region;
        }

        public void setRegion(String region) {
            this.region = region;
        }

        public double getUnitCost() {
            return unitCost;
        }

        public void setUnitCost(double unitCost) {
            this.unitCost = unitCost;
        }

        public double getTotalCost() {
            return totalCost;
        }

        public void setTotalCost(double totalCost) {
            this.totalCost = totalCost;
        }
    }
}
