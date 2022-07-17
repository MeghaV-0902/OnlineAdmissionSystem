package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService
{
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
    {
        User user = this.userRepository.findByEmail(email);
        if(user==null)
        {
            System.out.println("user not found");
            throw new UsernameNotFoundException("No user Found");
        }

        return user;
    }
}
