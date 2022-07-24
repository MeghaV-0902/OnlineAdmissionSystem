package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.Application;
import com.cg.onlineadmissionsystem.Model.UniversityCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UniversityCourseRepository extends JpaRepository<UniversityCourse,Long> {
    void deleteUniversityCourseById(Long id);
    Optional<UniversityCourse> findUniversityCourseById(Long id);
}
