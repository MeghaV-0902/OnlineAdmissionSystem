package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.Application;
import com.cg.onlineadmissionsystem.Model.College;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ApplicationRepository extends JpaRepository<Application,Long> {
    void deleteApplicationById(Long id);
    Optional<Application> findApplicationById(Long id);
}
