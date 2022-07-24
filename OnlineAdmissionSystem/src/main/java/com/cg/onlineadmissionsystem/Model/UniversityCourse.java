package com.cg.onlineadmissionsystem.Model;

import javax.persistence.*;

@Entity
public class UniversityCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String UniversityCourseName;
    private String UniversityCourseDuration;
    @Column(nullable = false,updatable = false)
    private String code;

    public UniversityCourse() {
    }

    public UniversityCourse(Long id, String universityCourseName, String universityCourseDuration, String code) {
        this.id = id;
        UniversityCourseName = universityCourseName;
        UniversityCourseDuration = universityCourseDuration;
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUniversityCourseName() {
        return UniversityCourseName;
    }

    public void setUniversityCourseName(String universityCourseName) {
        UniversityCourseName = universityCourseName;
    }

    public String getUniversityCourseDuration() {
        return UniversityCourseDuration;
    }

    public void setUniversityCourseDuration(String universityCourseDuration) {
        UniversityCourseDuration = universityCourseDuration;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
