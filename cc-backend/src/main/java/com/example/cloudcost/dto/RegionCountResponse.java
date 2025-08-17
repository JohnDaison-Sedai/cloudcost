package com.example.cloudcost.dto;

import com.example.cloudcost.entity.Region;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class RegionCountResponse {
    private String region;
    private Integer count;

    public RegionCountResponse(Region region, Integer count){
        this.region = region.getName();
        this.count = count;
    }

}
