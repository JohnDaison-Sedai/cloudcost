package com.example.cloudcost.dto;

import java.util.List;

public class EstimateRequest {
    private List<ResourceRequest> resources;
    private String businessRequirements;

    public EstimateRequest() {}

    public EstimateRequest(List<ResourceRequest> resources, String businessRequirements) {
        this.resources = resources;
        this.businessRequirements = businessRequirements;
    }

    public List<ResourceRequest> getResources() {
        return resources;
    }

    public void setResources(List<ResourceRequest> resources) {
        this.resources = resources;
    }

    public String getBusinessRequirements() {
        return businessRequirements;
    }

    public void setBusinessRequirements(String businessRequirements) {
        this.businessRequirements = businessRequirements;
    }

    public static class ResourceRequest {
        private String resourceType;
        private int count;
        private String region;

        public ResourceRequest() {}

        public ResourceRequest(String resourceType, int count, String region) {
            this.resourceType = resourceType;
            this.count = count;
            this.region = region;
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
    }
}
