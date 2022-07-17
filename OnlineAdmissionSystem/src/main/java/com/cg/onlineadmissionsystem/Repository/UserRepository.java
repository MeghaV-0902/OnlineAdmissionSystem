package com.cg.onlineadmissionsystem.Repository;

import com.cg.onlineadmissionsystem.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface UserRepository extends JpaRepository<User,Integer>
{
    public User findByEmail(String email);

}
