package com.example.cloudcost.controller;

import com.example.cloudcost.entity.ResourceType;
import com.example.cloudcost.service.ResourceService;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/resource_type")
@CrossOrigin(origins = "*")  // Allow frontend to access this endpoint
public class ResourceController {

    private final ResourceService resourceService;

    public ResourceController(ResourceService resourceService) {
        this.resourceService = resourceService;
    }

    @GetMapping
    public List<String> getAllResources() {
        return resourceService.getAllResources();
    }
}
