package com.example.cloudcost.service;

import com.example.cloudcost.dto.EstimateRequest;
import com.example.cloudcost.dto.EstimateResponse;
import com.example.cloudcost.entity.Region;
import com.example.cloudcost.entity.ResourceType;
import com.example.cloudcost.repository.RegionRepository;
import com.example.cloudcost.repository.ResourceTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

//import static jdk.javadoc.internal.doclets.formats.html.markup.HtmlStyles.details;

@Service
//@RequiredArgsConstructor
public class EstimateService {

    private final RegionRepository regionRepository;
    private final ResourceTypeRepository resourceTypeRepository;

    public EstimateService(RegionRepository regionRepository, ResourceTypeRepository resourceTypeRepository){
        this.regionRepository = regionRepository;
        this.resourceTypeRepository = resourceTypeRepository;
    }



    public EstimateResponse calculateEstimate(EstimateRequest request) {
        double totalCost = 0;
        List<EstimateResponse.ResourceCost> details = new ArrayList<>();

        for (EstimateRequest.ResourceRequest item : request.getResources()) {
            Region region = regionRepository.findByName(item.getRegion())
                    .orElseThrow(() -> new RuntimeException("Region not found"));

            ResourceType resourceType = resourceTypeRepository.findByName(item.getResourceType())
                    .orElseThrow(() -> new RuntimeException("Resource type not found"));

            double cost = item.getCount() * region.getMultiplier() * resourceType.getBase_price();

            totalCost += cost;

            details.add(new EstimateResponse.ResourceCost(
                    resourceType.getName(),

                    item.getCount(),
                    region.getName(),

//                    region.getMultiplier(),
                    cost,
                    totalCost
            ));
        }

            return new EstimateResponse(totalCost, details);

        }
    }


