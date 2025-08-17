package com.example.cloudcost.repository;

import com.example.cloudcost.dto.RegionCountResponse;
import com.example.cloudcost.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RegionRepository extends JpaRepository<Region,Long>{
    Optional<Region> findByName(String Name);

    @Query("""
        SELECT new com.example.cloudcost.dto.RegionCountResponse(r, rr.count) FROM Region r JOIN r.regionResources rr WHERE rr.resourceType.id = :resourceTypeId AND rr.count > 0
    """)
    List<RegionCountResponse> findRegionsByResourceType(@Param("resourceTypeId") Long resourceTypeId);

}