package com.example.com.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.com.exception.ResourceNotFoundException;
import com.example.com.model.Fries;
import com.example.com.respository.FriesRepository;

// to avoid "blocked by CORS policy" error on localhost:3000 = API won't render; so add: 
@CrossOrigin(origins = "http://localhost:3001")
// here is where the rest API is created
@RestController
// create standard URL starting point:
@RequestMapping("/api/")
public class FriesController {
	
	// add autowired to inject it to the spring container:
	@Autowired
	// inject fries repository here: 
	private FriesRepository friesRepository; 
	
	// this API will get called with URL code: 
	@GetMapping("/fries")
	// get all fries:
	public List<Fries> getAllFries(){
		return friesRepository.findAll();
	}
	
	// create fries rest API: 
	// PostMapping for mapping HTTP POST requests onto specific handler methods; 
	@PostMapping("/fries")
	public Fries createFries(@RequestBody Fries fries) {
		return friesRepository.save(fries);
	}
	
	// get fries by id rest API: 
	@GetMapping("/fries/{id}")
	public ResponseEntity<Fries> getFriesById(@PathVariable int id) {
		
		Fries fries = friesRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Fries don't exist with id:" + id));
		return ResponseEntity.ok(fries);
	}
	
	// update employee rest API: 
	@PutMapping("/fries/{id}")
	public ResponseEntity<Fries> updateFries(@PathVariable int id, @RequestBody Fries friesDetails){
		
		Fries fries = friesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Fries don't exist with id:"+ id));
		
		// adding updated info to the Fries fries object: 
		fries.setRestaurant(friesDetails.getRestaurant());
		fries.setCity(friesDetails.getCity());
		fries.setRating(friesDetails.getRating());
		fries.setNotes(friesDetails.getNotes());
		fries.setType(friesDetails.getType());
		
		Fries updatedFries = friesRepository.save(fries);
		return ResponseEntity.ok(updatedFries);
		
		
	}
	
	// delete fries rest API: 
	@DeleteMapping("/fries/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteFries(@PathVariable int id){
		Fries fries = friesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Fries don't exist with id:"+ id));
		
		friesRepository.delete(fries);
		// after getting deleted:
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
