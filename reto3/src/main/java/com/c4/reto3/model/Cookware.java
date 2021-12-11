package com.c4.reto3.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author Jhon Rob
 */
@Document(collection = "supplements")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cookware {

    @Id
    private String reference;
    private String brand;
    private String category;
    private String materiales;
    private String dimensiones;
    private String description;
    private boolean availability = true;
    private double price;
    private int quantity;
    private String photography;
}
