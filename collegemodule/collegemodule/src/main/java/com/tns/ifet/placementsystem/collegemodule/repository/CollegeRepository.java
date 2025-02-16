package com.tns.ifet.placementsystem.collegemodule.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tns.ifet.placementsystem.collegemodule.entity.College;

@Repository
public interface CollegeRepository extends JpaRepository<College, Long> {
}
