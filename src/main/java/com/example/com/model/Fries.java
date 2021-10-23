package com.example.com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

// entity shows that a class is connected to a database
@Entity
// table annotation to provide table name
@Table(name="fries")
public class Fries {
	
	// @Id specifies the primary key of an entity
	@Id
	// GeneratedValue applied to a primary key property or field of an entity or mapped superclass in conjunction with the Id annotation:
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String restaurant;
	private String city;
	private int rating;
	private String notes;
	private String type;
	
	// add default constructor (necessary when using hibernate and a parametrized constructor):
	public Fries() {
		
	}
	
	// add parametrized constructor; de-select id: 
	public Fries(String restaurant, String city, int rating, String notes, String type) {
		super();
		this.restaurant = restaurant;
		this.city = city;
		this.rating = rating;
		this.notes = notes;
		this.type = type;
	}
	
	// public setters & getters: 
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getRestaurant() {
		return restaurant;
	}
	public void setRestaurant(String restaurant) {
		this.restaurant = restaurant;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	} 

	
	
}
