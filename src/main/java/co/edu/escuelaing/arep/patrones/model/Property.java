package co.edu.escuelaing.arep.patrones.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Property" )
public class Property {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String address;
    private Double price;
    private Double size;
    private String description;

    public Long getId() {
        return id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getSize() {
        return size;
    }

    public void setSize(Double size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
