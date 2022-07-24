package com.cg.onlineadmissionsystem;

import com.cg.onlineadmissionsystem.Model.Role;
import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Model.UserRoles;
import com.cg.onlineadmissionsystem.Service.UserService;
import com.cg.onlineadmissionsystem.helper.UserFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class OnlineAdmissionSystemApplication implements CommandLineRunner {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(OnlineAdmissionSystemApplication.class, args);
    }


    @Override
    public void run(String... args) throws UserFoundException {
        try {


            System.out.println("starting code");
            User user = new User();
            user.setFirstName("Admin");
            user.setMiddleName("Admin");
            user.setLastName("cg");
            user.setEmail("admin@cg.com");
            user.setMobileNumber("1234567899");
            user.setPassword(this.bCryptPasswordEncoder.encode("abc"));
            user.setAadharCardNo("1234567899");
            Role role1 = new Role();
            role1.setRoleId(1);
            role1.setRoleName("ADMIN");

            Set<UserRoles> userRolesSet = new HashSet<>();
            UserRoles userRoles = new UserRoles();
            userRoles.setRole(role1);
            userRoles.setUser(user);
            userRolesSet.add(userRoles);

            User user1 = this.userService.createuser(user, userRolesSet);
            System.out.println(user1.getEmail());
        } catch (UserFoundException e) {
           // e.printStackTrace();
        }
    }

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200/"));
        corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type",
                "Accept", "Authorization", " Origin,Accept", "X-Requested-With",
                "Access-Control-Request-Method", "Access-Control-Request-Headers"));
        corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Tyoe", "Accept", "Authorization",
                "Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials"));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(urlBasedCorsConfigurationSource);
    }

}