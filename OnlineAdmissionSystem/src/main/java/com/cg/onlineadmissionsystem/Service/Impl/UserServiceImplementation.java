package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Model.UserRoles;
import com.cg.onlineadmissionsystem.Repository.RoleRepository;
import com.cg.onlineadmissionsystem.Repository.UserRepository;
import com.cg.onlineadmissionsystem.Service.UserService;
import com.cg.onlineadmissionsystem.helper.UserFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImplementation implements UserService
{
    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Override
    public User createuser(User user, Set<UserRoles> userRoles) throws UserFoundException {
        User local= this.userRepository.findByEmail(user.getEmail());
        if(local!=null)
        {
            System.out.println("User exists");
            throw new UserFoundException();
        }
        else
        {
            for(UserRoles ur : userRoles)
            {
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local= this.userRepository.save(user);
        }
        return local;
    }

    @Override
    public User getUser(String email) {
        return this.userRepository.findByEmail(email);
    }

    @Override
    public Optional<User> getUser(Integer id) {
        return this.userRepository.findById(id);
    }


    @Override
    public List<User> getAllStudents() {
        List<User> allUsers = userRepository.findAll();
        return allUsers;
    }

    @Override
    public void deleteUser(Integer id) {
        this.userRepository.deleteById(id);
    }


    @Override
    public User updateUser(User user,Integer id)
    {
        //Integer id = user.getUserId();
        System.out.println(id);
        User newUser= userRepository.findById(id).get();
        newUser.setFirstName(user.getFirstName());
        newUser.setMiddleName(user.getMiddleName());
        newUser.setLastName(user.getLastName());
        newUser.setEmail(user.getEmail());
        newUser.setMobileNumber(user.getMobileNumber());
        newUser.setAadharCardNo(user.getAadharCardNo());
        return userRepository.save(newUser);
    }


}
