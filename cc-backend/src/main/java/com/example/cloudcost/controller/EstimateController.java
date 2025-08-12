package com.example.cloudcost.controller;

import com.example.cloudcost.dto.EstimateRequest;
import com.example.cloudcost.dto.EstimateResponse;
import com.example.cloudcost.service.EstimateService;
//import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/estimate")
//@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3001")
public class EstimateController {

    private final EstimateService estimateService;

    public EstimateController(EstimateService estimateService){
        this.estimateService = estimateService;
    }

    @PostMapping
    public EstimateResponse getEstimate(@RequestBody EstimateRequest request) {
        return estimateService.calculateEstimate(request);
    }
}

