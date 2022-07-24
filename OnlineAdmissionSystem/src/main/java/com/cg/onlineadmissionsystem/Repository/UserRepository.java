package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserRepository extends JpaRepository<User,Integer>
{
    public User findByEmail(String email);
    public Optional<User> findById(Integer id);

    @Query(value="SELECT CASE WHEN COUNT(u) > 0 THEN TRUE ELSE FALSE END FROM User u WHERE u.email= ?1")
    Boolean isUserExistByEmail(String email);


}
