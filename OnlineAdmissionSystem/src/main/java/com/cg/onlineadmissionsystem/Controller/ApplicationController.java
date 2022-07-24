package com.cg.onlineadmissionsystem.Controller;

import com.cg.onlineadmissionsystem.Model.Application;
import com.cg.onlineadmissionsystem.Model.College;
import com.cg.onlineadmissionsystem.Service.Impl.ApplicationServices;
import com.cg.onlineadmissionsystem.Service.Impl.CollegeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/application")
public class ApplicationController {
    @Autowired
    private final ApplicationServices applicationServices;

    public ApplicationController(ApplicationServices applicationServices) {
        this.applicationServices = applicationServices;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Application>> getAllApplications(){
        List<Application> applications = applicationServices.findAllApplications();
        return new ResponseEntity<>(applications, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Application> getApplicationById(@PathVariable("id")Long id){
        Application application = applicationServices.findApplicationById(id);
        return new ResponseEntity<>(application, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Application> addApplication(@RequestBody Application application){
        Application newapplication= applicationServices.addapplication(application);
        return new ResponseEntity<>(newapplication,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Application> updateApplication(@RequestBody Application application){
        Application updateapplication= applicationServices.updateApplication(application);
        return new ResponseEntity<>(updateapplication,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteApplication(@PathVariable("id") Long id){
        applicationServices.deleteApplication(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
