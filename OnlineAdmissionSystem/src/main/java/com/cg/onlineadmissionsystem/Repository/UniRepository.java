package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.Uni;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UniRepository extends JpaRepository<Uni,Long> {
    public void deleteUniversityById(Long id);

    public Optional<Uni> findUniversityById(Long id);


}
