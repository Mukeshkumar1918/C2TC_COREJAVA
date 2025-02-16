package com.tns.ifet.placementsystem.collegemodule.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "colleges")
public class College {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String collegeName;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String phoneNumber;

    // Constructors
    public College() {
    	
    }

    public College(String collegeName, String location, String email, String phoneNumber) {
        this.collegeName = collegeName;
        this.location = location;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getCollegeName() { return collegeName; }
    public void setCollegeName(String collegeName) { this.collegeName = collegeName; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
}
