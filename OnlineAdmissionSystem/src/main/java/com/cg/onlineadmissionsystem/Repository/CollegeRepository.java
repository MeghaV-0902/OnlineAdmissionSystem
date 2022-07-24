package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.College;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface CollegeRepository extends JpaRepository<College,Long> {
    void deleteCollegeById(Long id);

    Optional<College> findCollegeById(Long id);
}
