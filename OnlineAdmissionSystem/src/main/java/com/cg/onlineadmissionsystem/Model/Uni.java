package com.cg.onlineadmissionsystem.Model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
//@Table(name="users")
public class Uni implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String name;
    private String email;
    private String location;
    private String phone;
    private String imageUrl;
    @Column(nullable = false,updatable = false)
    private String UniversityCode;

    public Uni() {}

    public Uni(String name, String email, String location, String phone, String imageUrl, String UniversityCode) {
        this.name = name;
        this.email = email;
        this.location = location;
        this.phone = phone;
        this.imageUrl = imageUrl;
        this.UniversityCode = UniversityCode;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getUniversityCode() {
        return UniversityCode;
    }

    public void setUniversityCode(String universityCode) {
        UniversityCode = universityCode;
    }

    @Override
    public String toString(){

        return "University{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", location='" + location + '\'' +
                ", phone='" + phone + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';


    }


}
