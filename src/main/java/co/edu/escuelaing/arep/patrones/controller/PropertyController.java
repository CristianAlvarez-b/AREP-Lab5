package co.edu.escuelaing.arep.patrones.controller;

import co.edu.escuelaing.arep.patrones.model.Property;
import co.edu.escuelaing.arep.patrones.repository.PropertyRepository;
import co.edu.escuelaing.arep.patrones.service.PropertyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/properties")
public class PropertyController {

    private final PropertyService propertyService;

    @Autowired
    PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping
    List<Property> getAllProperties() {
        return propertyService.getAllProperties();
    }

    @GetMapping("/{id}")
    Property getPropertyById(@PathVariable Long id) {
        return propertyService.getPropertyById(id);
    }

    @PostMapping
    Property createProperty(@RequestBody Property property) {
        return propertyService.save(property);
    }

    @PutMapping("/{id}")
    Property updateProperty(@PathVariable Long id, @RequestBody Property propertyDetails) {
        Property property = propertyService.getPropertyById(id);
        property.setAddress(propertyDetails.getAddress());
        property.setPrice(propertyDetails.getPrice());
        property.setSize(propertyDetails.getSize());
        property.setDescription(propertyDetails.getDescription());
        return propertyService.save(property);
    }

    @DeleteMapping("/{id}")
    void deleteProperty(@PathVariable Long id) {
        propertyService.delete(id);
    }
}

