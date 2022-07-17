package com.cg.onlineadmissionsystem.Model;


import javax.persistence.*;

@Entity
public class UserRoles
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userRoleId;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;

    @ManyToOne
    private Role role;
    public Integer getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Integer userRoleId) {
        this.userRoleId = userRoleId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

}
