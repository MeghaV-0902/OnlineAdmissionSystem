package com.cg.onlineadmissionsystem.Service;

import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Model.UserRoles;
import com.cg.onlineadmissionsystem.helper.UserFoundException;

import javax.persistence.SecondaryTable;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserService
{
    public User createuser(User user, Set<UserRoles> userRoles) throws UserFoundException;
    public User getUser(String email);
    public Optional<User> getUser(Integer id);
    public List<User> getAllStudents();
    public void deleteUser(Integer id);
    public User updateUser(User user, Integer id);
}
