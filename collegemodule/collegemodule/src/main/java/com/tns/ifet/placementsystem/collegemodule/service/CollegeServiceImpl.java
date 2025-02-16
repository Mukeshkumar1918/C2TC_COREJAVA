package com.tns.ifet.placementsystem.collegemodule.service;


import org.springframework.stereotype.Service;

import com.tns.ifet.placementsystem.collegemodule.entity.College;
import com.tns.ifet.placementsystem.collegemodule.repository.CollegeRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CollegeServiceImpl implements CollegeService {

    private final CollegeRepository collegeRepository;

    public CollegeServiceImpl(CollegeRepository collegeRepository) {
        this.collegeRepository = collegeRepository;
    }

    @Override
    public College saveCollege(College college) {
        return collegeRepository.save(college);
    }

    @Override
    public List<College> getAllColleges() {
        return collegeRepository.findAll();
    }

    @Override
    public College getCollegeById(Long id) {
        return collegeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("College not found with ID: " + id));
    }

    @Override
    public College updateCollege(Long id, College collegeDetails) {
        Optional<College> optionalCollege = collegeRepository.findById(id);
        if (optionalCollege.isPresent()) {
            College existingCollege = optionalCollege.get();
            existingCollege.setCollegeName(collegeDetails.getCollegeName());
            existingCollege.setLocation(collegeDetails.getLocation());
            existingCollege.setEmail(collegeDetails.getEmail());
            existingCollege.setPhoneNumber(collegeDetails.getPhoneNumber());
            return collegeRepository.save(existingCollege);
        } else {
            throw new RuntimeException("College not found with ID: " + id);
        }
    }

    @Override
    public void deleteCollege(Long id) {
        if (collegeRepository.existsById(id)) {
            collegeRepository.deleteById(id);
        } else {
            throw new RuntimeException("College not found with ID: " + id);
        }
    }
}
