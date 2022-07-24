package com.cg.onlineadmissionsystem.Controller;

import com.cg.onlineadmissionsystem.Model.CollegeCourse;
import com.cg.onlineadmissionsystem.Model.UniversityCourse;
import com.cg.onlineadmissionsystem.Service.Impl.CollegeCourseServices;
import com.cg.onlineadmissionsystem.Service.Impl.UniversityCourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/UniversityCourse")
public class UniversityCourseController {
    @Autowired
    private final UniversityCourseServices universityCourseServices;

    public UniversityCourseController(UniversityCourseServices universityCourseServices) {
        this.universityCourseServices = universityCourseServices;
    }
    @GetMapping("/all")
    public ResponseEntity<List<UniversityCourse>> getAllUniversityCourses(){
        List<UniversityCourse> universityCourses = universityCourseServices.findAllUniversityCourses();
        return new ResponseEntity<>(universityCourses, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<UniversityCourse> getUniversityCourseById(@PathVariable("id")Long id){
        UniversityCourse universityCourse = universityCourseServices.findUniversityCourseById(id);
        return new ResponseEntity<>(universityCourse, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<UniversityCourse> addUniversityCourse(@RequestBody UniversityCourse universityCourse){
        UniversityCourse newuniversityCourse= universityCourseServices.addUniversityCourse(universityCourse);
        return new ResponseEntity<>(newuniversityCourse,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<UniversityCourse> updateCollegeCourse(@RequestBody UniversityCourse universityCourse){
        UniversityCourse updateUniversityCourse= universityCourseServices.updateUniversityCourse(universityCourse);
        return new ResponseEntity<>(updateUniversityCourse,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCollegeCourse(@PathVariable("id") Long id){
        universityCourseServices.deleteUniversityCourse(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
