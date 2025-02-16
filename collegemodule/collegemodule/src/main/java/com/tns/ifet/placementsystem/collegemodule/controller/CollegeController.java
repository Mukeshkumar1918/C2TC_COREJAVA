package com.tns.ifet.placementsystem.collegemodule.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tns.ifet.placementsystem.collegemodule.entity.College;
import com.tns.ifet.placementsystem.collegemodule.service.CollegeService;

import java.util.List;

@RestController
@RequestMapping("/api/colleges")
public class CollegeController {

    private final CollegeService collegeService;

    public CollegeController(CollegeService collegeService) {
        this.collegeService = collegeService;
    }

    @PostMapping
    public ResponseEntity<College> createCollege(@RequestBody College college) {
        return ResponseEntity.ok(collegeService.saveCollege(college));
    }

    @GetMapping
    public ResponseEntity<List<College>> getAllColleges() {
        return ResponseEntity.ok(collegeService.getAllColleges());
    }

    @GetMapping("/{id}")
    public ResponseEntity<College> getCollegeById(@PathVariable Long id) {
        return ResponseEntity.ok(collegeService.getCollegeById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<College> updateCollege(@PathVariable Long id, @RequestBody College collegeDetails) {
        return ResponseEntity.ok(collegeService.updateCollege(id, collegeDetails));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCollege(@PathVariable Long id) {
        collegeService.deleteCollege(id);
        return ResponseEntity.ok("College deleted successfully.");
    }
}
