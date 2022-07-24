package com.cg.onlineadmissionsystem.Model;

import javax.persistence.*;

@Entity
public class CollegeCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String CollegeCourseName;
    private String CollegeCourseDuration;
    @Column(nullable = false,updatable = false)
    private String code;

    public CollegeCourse() {
    }

    public CollegeCourse(Long id, String collegeCourseName, String collegeCourseDuration, String code) {
        this.id = id;
        CollegeCourseName = collegeCourseName;
        CollegeCourseDuration = collegeCourseDuration;
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCollegeCourseName() {
        return CollegeCourseName;
    }

    public void setCollegeCourseName(String collegeCourseName) {
        CollegeCourseName = collegeCourseName;
    }

    public String getCollegeCourseDuration() {
        return CollegeCourseDuration;
    }

    public void setCollegeCourseDuration(String collegeCourseDuration) {
        CollegeCourseDuration = collegeCourseDuration;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
