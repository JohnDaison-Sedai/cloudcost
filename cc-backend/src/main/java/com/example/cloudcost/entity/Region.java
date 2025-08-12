package com.example.cloudcost.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
//@entity used frompersis.entity used similar to autowired type - to get all functionality of entity bean
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    private String name;
    private Double multiplier;


    @OneToMany(mappedBy = "region", cascade = CascadeType.ALL)
    private List<RegionResource> regionResources = new ArrayList<>();


    public String getName() {
        return name;
    }

    public Double getMultiplier(){
        return multiplier;
    }
}
