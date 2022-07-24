package com.cg.onlineadmissionsystem.Controller;

import com.cg.onlineadmissionsystem.Model.Role;
import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Model.UserRoles;
import com.cg.onlineadmissionsystem.Repository.UserRepository;
import com.cg.onlineadmissionsystem.Service.UserService;
import com.cg.onlineadmissionsystem.helper.UserFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController
{
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    // Creating user
    @PostMapping("/")
    public User createUser(@RequestBody User user) throws Exception {

        // Encoding password with bcryptpasswordencoder
        user.setPassword(this.bCryptPasswordEncoder.encode(user.getPassword()));

        Set<UserRoles> roles = new HashSet<>();

        Role role = new Role();
        role.setRoleId(2);
        role.setRoleName("STUDENT");

        UserRoles userRole = new UserRoles();
        userRole.setUser(user);
        userRole.setRole(role);

        roles.add(userRole);

        return this.userService.createuser(user,roles);
    }

    @GetMapping("/")
    public List<User> getAllStudents()
    {
        return userService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Optional<User> getUser(@PathVariable("id") Integer id)
    {
        return this.userService.getUser(id);
    }

    @GetMapping("/{email}")
    public User getUser(@PathVariable("email") String email)
    {
        return this.userService.getUser(email);
    }

    //delete by id
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Integer id)
    {
        this.userService.deleteUser(id);
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id,@RequestBody User userDetails)
    {
          //System.out.println(userDetails);
          User user = this.userService.updateUser(userDetails,id);
          return ResponseEntity.ok(user);

    }

    @ExceptionHandler(UserFoundException.class)
    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
        return ResponseEntity.ok(ex.getMessage());
    }




}
