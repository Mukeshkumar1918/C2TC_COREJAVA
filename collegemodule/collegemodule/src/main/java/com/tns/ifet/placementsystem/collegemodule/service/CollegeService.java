package com.tns.ifet.placementsystem.collegemodule.service;

import java.util.List;

import com.tns.ifet.placementsystem.collegemodule.entity.College;

public interface CollegeService {
    College saveCollege(College college);
    List<College> getAllColleges();
    College getCollegeById(Long id);
    College updateCollege(Long id, College collegeDetails);
    void deleteCollege(Long id);
}
