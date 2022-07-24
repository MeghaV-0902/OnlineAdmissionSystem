package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.Uni;
import com.cg.onlineadmissionsystem.Repository.UniRepository;
import com.cg.onlineadmissionsystem.helper.UserNotFoundException1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class UniServices {

    @Autowired
    UniRepository universityRepo;


    public Uni addUniversity(Uni university) {
        university.setUniversityCode(UUID.randomUUID().toString());
        return universityRepo.save(university);
    }

    public List<Uni> findAllUniversities(){
        return universityRepo.findAll();
    }

    public Uni updateUniversity(Uni university){
        return universityRepo.save(university);
    }

    public Uni findUniversityById(Long id){
        return universityRepo.findUniversityById(id)
                .orElseThrow(()-> new UserNotFoundException1("User by id"+id+"was not found"));
    }

    public void deleteUniversity(Long id){
        this.universityRepo.deleteUniversityById(id);


    }
}
