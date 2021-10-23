package com.example.com.respository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.com.model.Fries;

@Repository
// extend the interface to JpaRepository which holds a lot of built in methods like find all, sort etc
// JpaRespository <parameter 1 column name, parameter 2 data type>
public interface FriesRepository extends JpaRepository<Fries,Integer>{


}
