package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.Application;
import com.cg.onlineadmissionsystem.Model.College;
import com.cg.onlineadmissionsystem.Repository.ApplicationRepository;
import com.cg.onlineadmissionsystem.Repository.CollegeRepository;
import com.cg.onlineadmissionsystem.helper.UserNotFoundException2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class ApplicationServices {
    private final ApplicationRepository applicationRepository;

    @Autowired
    public ApplicationServices(ApplicationRepository applicationRepository) {this.applicationRepository = applicationRepository; }

    public Application addapplication(Application application) {
        application.setCode(UUID.randomUUID().toString());
        return applicationRepository.save(application);
    }

    public List<Application> findAllApplications() {

        return applicationRepository.findAll();
    }

    public Application updateApplication(Application application) {

        return applicationRepository.save(application);
    }

    public Application findApplicationById(Long id) {
        return applicationRepository.findApplicationById(id).orElseThrow(() -> new UserNotFoundException2("User by Id" + id + "was not found"));
    }

    public void deleteApplication(Long id) {

        applicationRepository.deleteApplicationById(id);
    }
}
