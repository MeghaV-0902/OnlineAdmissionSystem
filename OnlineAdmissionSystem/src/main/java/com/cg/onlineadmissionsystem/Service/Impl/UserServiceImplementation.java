package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Model.UserRoles;
import com.cg.onlineadmissionsystem.Repository.RoleRepository;
import com.cg.onlineadmissionsystem.Repository.UserRepository;
import com.cg.onlineadmissionsystem.Service.UserService;
import com.cg.onlineadmissionsystem.helper.UserFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserServiceImplementation implements UserService
{

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
    public void deleteUser(Integer id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User updateUser(User user, String email,Set<UserRoles> userRoles) throws Exception {
        User local = this.userRepository.findByEmail(email);
        local.setFirstName(user.getFirstName());
        local.setMiddleName(user.getMiddleName());
        local.setLastName(user.getLastName());
        local.setEmail(user.getEmail());
        local.setMobileNumber(user.getMobileNumber());
        local.setAadharCardNo(user.getAadharCardNo());
        local.setPassword(user.getPassword());

        User createdUser = this.userRepository.save(local);

       // User createdUser=createuser(user,userRoles);

        return createdUser;
    }
}
