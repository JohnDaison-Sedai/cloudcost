package com.example.cloudcost.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="region_resource")

public class RegionResource {
    @EmbeddedId
    private RegionResourceId id;

    @ManyToOne
    @MapsId("region_id")
    @JoinColumn(name="region_id")
    private Region region;

    @ManyToOne
    @MapsId("resource_type_id")
    @JoinColumn(name="resource_type_id")
    private ResourceType resourceType;

    private Integer count;

}
