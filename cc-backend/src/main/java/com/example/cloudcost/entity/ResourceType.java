package com.example.cloudcost.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="resource_type")

public class ResourceType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private double base_price;

    public String getName() {
        return name;
    }

    public double getBase_price(){
        return base_price;
    }

}
