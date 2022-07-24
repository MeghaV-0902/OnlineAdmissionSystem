package com.cg.onlineadmissionsystem.Service.Impl;

import com.cg.onlineadmissionsystem.Repository.UserRepository;
import com.cg.onlineadmissionsystem.Service.Impl.UserServiceImplementation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserServiceImplementationTest {

    @Mock
    private UserRepository userRepository;

    private UserServiceImplementation userServiceImplementation;
    @BeforeEach
    void setUp() {
        this.userServiceImplementation=new UserServiceImplementation(this.userRepository);
    }

    @Test
    void getAllStudents() {
        userServiceImplementation.getAllStudents();
        verify(userRepository).findAll();
    }

}