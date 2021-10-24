package com.example.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.com.model.Fries;
import com.example.com.respository.FriesRepository;

// to avoid "blocked by CORS policy" error on localhost:3000 = API won't render; so add: 
@CrossOrigin(origins = "http://localhost:3000")
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
	
}
