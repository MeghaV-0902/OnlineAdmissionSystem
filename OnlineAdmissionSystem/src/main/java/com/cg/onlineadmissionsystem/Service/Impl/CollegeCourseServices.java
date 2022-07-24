package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.CollegeCourse;
import com.cg.onlineadmissionsystem.Repository.CollegeCourseRepository;
import com.cg.onlineadmissionsystem.helper.UserNotFoundException2;
import com.cg.onlineadmissionsystem.helper.UserNotFoundException4;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class CollegeCourseServices {
    private final CollegeCourseRepository collegeCourseRepository;

    @Autowired
    public CollegeCourseServices(CollegeCourseRepository collegeCourseRepository) {this.collegeCourseRepository = collegeCourseRepository; }

    public CollegeCourse addCollegeCourse(CollegeCourse collegeCourse) {
        collegeCourse.setCode(UUID.randomUUID().toString());
        return collegeCourseRepository.save(collegeCourse);
    }

    public List<CollegeCourse> findAllCollegeCourses() {

        return collegeCourseRepository.findAll();
    }

    public CollegeCourse updateCollegeCourse(CollegeCourse collegeCourse) {

        return collegeCourseRepository.save(collegeCourse);
    }

    public CollegeCourse findCollegeCourseById(Long id) {
        return collegeCourseRepository.findCollegeCourseById(id).orElseThrow(() -> new UserNotFoundException4("User by Id" + id + "was not found"));
    }

    public void deleteCollegeCourse(Long id) {

        collegeCourseRepository.deleteCollegeCourseById(id);
    }
}
