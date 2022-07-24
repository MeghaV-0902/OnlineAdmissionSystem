package com.cg.onlineadmissionsystem.Controller;

import com.cg.onlineadmissionsystem.Model.Application;
import com.cg.onlineadmissionsystem.Model.CollegeCourse;
import com.cg.onlineadmissionsystem.Service.Impl.CollegeCourseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/CollegeCourse")
public class CollegeCourseController {
    @Autowired
    private final CollegeCourseServices collegeCourseServices;

    public CollegeCourseController(CollegeCourseServices collegeCourseServices) {
        this.collegeCourseServices = collegeCourseServices;
    }
    @GetMapping("/all")
    public ResponseEntity<List<CollegeCourse>> getAllCollegeCourses(){
        List<CollegeCourse> collegeCourses = collegeCourseServices.findAllCollegeCourses();
        return new ResponseEntity<>(collegeCourses, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<CollegeCourse> getCollegeCourseById(@PathVariable("id")Long id){
        CollegeCourse collegeCourse = collegeCourseServices.findCollegeCourseById(id);
        return new ResponseEntity<>(collegeCourse, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<CollegeCourse> addCollegeCourse(@RequestBody CollegeCourse collegeCourse){
        CollegeCourse newcollegeCourse= collegeCourseServices.addCollegeCourse(collegeCourse);
        return new ResponseEntity<>(newcollegeCourse,HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<CollegeCourse> updateCollegeCourse(@RequestBody CollegeCourse collegeCourse){
        CollegeCourse updatecollegeCourse= collegeCourseServices.updateCollegeCourse(collegeCourse);
        return new ResponseEntity<>(updatecollegeCourse,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCollegeCourse(@PathVariable("id") Long id){
        collegeCourseServices.deleteCollegeCourse(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
