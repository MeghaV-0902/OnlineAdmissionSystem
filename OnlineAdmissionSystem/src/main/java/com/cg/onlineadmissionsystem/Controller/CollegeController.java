package com.cg.onlineadmissionsystem.Controller;

import com.cg.onlineadmissionsystem.Model.College;
import com.cg.onlineadmissionsystem.Service.Impl.CollegeServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("user/college")
public class CollegeController {
    @Autowired
    private final CollegeServices collegeService;

    public CollegeController(CollegeServices collegeService) {
        this.collegeService = collegeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<College>> getAllColleges(){
        List<College> colleges = collegeService.findAllColleges();
        return new ResponseEntity<>(colleges, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<College> getCollegeById(@PathVariable("id")Long id){
        System.out.println("herer");
        College college = collegeService.findCollegeById(id);
        return new ResponseEntity<>(college, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<College> addCollege(@RequestBody College college){
        College newcollege= collegeService.addcollege(college);
        return new ResponseEntity<>(newcollege,HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<College> updateCollege(@RequestBody College college){
        College updateCollege= collegeService.updateCollege(college);
        return new ResponseEntity<>(updateCollege,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCollege(@PathVariable("id") Long id){
        collegeService.deleteCollege(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
