package co.edu.escuelaing.arep.patrones.service;

import co.edu.escuelaing.arep.patrones.model.Property;
import co.edu.escuelaing.arep.patrones.repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {
    private PropertyRepository propertyRepository;
    @Autowired
    public PropertyService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }
    public List<Property> getAllProperties(){
        return (List<Property>) propertyRepository.findAll();
    }
    public Property getPropertyById(Long id){
        return propertyRepository.findById(id).orElseThrow(() -> new RuntimeException("Property not found"));
    }
    public Property save(Property property){
        propertyRepository.save(property);
        return property;
    }
    public void delete(Long id){
        propertyRepository.deleteById(id);
    }

}
