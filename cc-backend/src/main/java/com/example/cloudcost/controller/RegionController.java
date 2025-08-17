package com.example.cloudcost.controller;


import com.example.cloudcost.dto.RegionCountResponse;
import com.example.cloudcost.service.RegionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/api/region")
public class RegionController {
    private final RegionService regionService;

    public RegionController(RegionService regionService){
        this.regionService = regionService;
    }

    @GetMapping
    public List<String> getAllRegions(){
        return regionService.getAllRegions();
    }

    @GetMapping("/{resourceTypeId}")
    public List<RegionCountResponse> getRegionsByResource(@PathVariable Long resourceTypeId){
        return regionService.getRegionsByResourceType(resourceTypeId);
    }







}
