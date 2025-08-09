package com.example.cloudcost.service;

import com.example.cloudcost.entity.ResourceType;
import com.example.cloudcost.repository.ResourceTypeRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class ResourceService {




        private final ResourceTypeRepository resourceRepository;

        public ResourceService(ResourceTypeRepository resourceRepository) {
            this.resourceRepository = resourceRepository;
        }

        public List<String> getAllResources() {
            return resourceRepository.findAll().stream()
                    .map(ResourceType::getName)

                    .collect(Collectors.toList());

    }

}
