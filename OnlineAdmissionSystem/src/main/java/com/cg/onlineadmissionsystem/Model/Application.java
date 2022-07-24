package com.cg.onlineadmissionsystem.Model;

import javax.persistence.*;

@Entity
public class Application {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String appliedto;   //dropdown - either clg/uni
    private String course;      //dropdown - courses
    private String status="PENDING";
    @Column(nullable = false,updatable = false)
    private String code;

    public Application() {
    }

    public Application(Long id, String name, String email, String phone, String appliedto, String course, String status, String code) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.appliedto = appliedto;
        this.course = course;
        this.status = status;
        this.code = code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAppliedto() {
        return appliedto;
    }

    public void setAppliedto(String appliedto) {
        this.appliedto = appliedto;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
