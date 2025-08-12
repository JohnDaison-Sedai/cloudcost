package com.example.cloudcost.service;

import com.example.cloudcost.repository.RegionRepository;
import org.springframework.stereotype.Service;
import com.example.cloudcost.entity.Region;

import java.util.List;
import java.util.stream.Collectors;

@Service

public class RegionService {
    private final RegionRepository regionRepository;

    public RegionService(RegionRepository regionRepository){
        this.regionRepository = regionRepository;
    }

    public List<String> getAllRegions(){
        return regionRepository.findAll().stream().map(Region::getName).collect(Collectors.toList());
    }

    public List<String> getRegionsByResourceType(Long ResourceTypeId) {
        return regionRepository.findRegionsByResourceType(ResourceTypeId).stream().map(Region::getName).collect(Collectors.toList());
    }
}
