package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.Application;
import com.cg.onlineadmissionsystem.Model.CollegeCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CollegeCourseRepository extends JpaRepository<CollegeCourse,Long> {
    void deleteCollegeCourseById(Long id);
    Optional<CollegeCourse> findCollegeCourseById(Long id);
}
