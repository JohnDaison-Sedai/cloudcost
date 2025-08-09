package com.example.cloudcost.repository;

import com.example.cloudcost.entity.ResourceType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

public interface ResourceTypeRepository extends JpaRepository<ResourceType, Long> {

    Optional<ResourceType> findByName(String Name);
}
