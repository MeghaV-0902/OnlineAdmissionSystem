package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.CollegeCourse;
import com.cg.onlineadmissionsystem.Model.UniversityCourse;
import com.cg.onlineadmissionsystem.Repository.CollegeCourseRepository;
import com.cg.onlineadmissionsystem.Repository.UniversityCourseRepository;
import com.cg.onlineadmissionsystem.helper.UserNotFoundException2;
import com.cg.onlineadmissionsystem.helper.UserNotFoundException3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class UniversityCourseServices {
    private final UniversityCourseRepository universityCourseRepository;

    @Autowired
    public UniversityCourseServices(UniversityCourseRepository universityCourseRepository) {this.universityCourseRepository = universityCourseRepository; }

    public UniversityCourse addUniversityCourse(UniversityCourse universityCourse) {
        universityCourse.setCode(UUID.randomUUID().toString());
        return universityCourseRepository.save(universityCourse);
    }

    public List<UniversityCourse> findAllUniversityCourses() {

        return universityCourseRepository.findAll();
    }

    public UniversityCourse updateUniversityCourse(UniversityCourse universityCourse) {

        return universityCourseRepository.save(universityCourse);
    }

    public UniversityCourse findUniversityCourseById(Long id) {
        return universityCourseRepository.findUniversityCourseById(id).orElseThrow(() -> new UserNotFoundException3("User by Id" + id + "was not found"));
    }

    public void deleteUniversityCourse(Long id) {

        universityCourseRepository.deleteUniversityCourseById(id);
    }
}
