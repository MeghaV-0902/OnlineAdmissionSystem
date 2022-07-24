package com.cg.onlineadmissionsystem;

import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Repository.UserRepository;
import com.cg.onlineadmissionsystem.Service.UserService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    private UserService userService;

    // Junit - Save User
    @Test
    public void saveUserTest(){
        User user = User.builder()
                .firstName("Ian")
                .middleName("Somerhalder")
                .lastName("Wesley")
                .email("ian@gmail.com")
                .mobileNumber("4321567")
                .aadharCardNo("33219")
                .build();
        userRepository.save(user);
        Assertions.assertThat(user.getUserId()).isGreaterThan(0);
    }

    // Junit - Get User
    @Test
    public void getUserTest(){
        User user = userRepository.findById(10).get();
        Assertions.assertThat(user.getUserId()).isEqualTo(10);            // id num
    }

    // Junit - Get List of Users
    @Test
    public void getListOfUsersTest(){
        List<User> users = userRepository.findAll();
        Assertions.assertThat(users.size()).isGreaterThan(0);            // isLessThan(0)
    }

    // Junit - Update User
    @Test
    public void updateUserTest(){
        User user = userRepository.findById(4).get();        // existing record
        user.setEmail("abd@gmail.com");
        User userUpdated = userRepository.save(user);
        Assertions.assertThat(userUpdated.getEmail()).isEqualTo("abd@gmail.com");
    }

    // Junit - Delete User
    @Test
    public void deleteUserTest(){
        User user = userRepository.findById(10).get();

        //userRepository.delete(user);
        userRepository.deleteById(10);

        User user1 = null;

        Optional<User> optionalUser = userRepository.findById(10);

        if(optionalUser.isPresent()){
            user1 = optionalUser.get();
        }

        Assertions.assertThat(user1).isNull();
    }

    User student;
    @Test
    void isUserExistByEmail() {
        student = new User("raina","megh","khan","s@gmail.com","987653223","34532243","ddlj");
        userRepository.save(student);

        Boolean actualResult = userRepository.isUserExistByEmail("s@gmail.com");
        assertThat(actualResult).isTrue();
    }

//    @AfterEach
//    void tearDown() {
//        userRepository.delete(student);
//    }


}