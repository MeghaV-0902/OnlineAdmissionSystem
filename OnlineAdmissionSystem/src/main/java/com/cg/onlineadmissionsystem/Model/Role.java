package com.cg.onlineadmissionsystem.Model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="roles")
public class Role
{
    @Id
    private Integer roleId;
    private String roleName;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "role")
    private Set<UserRoles> userRoles= new HashSet<>();


    public Role() {
    }

    public Set<UserRoles> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRoles> userRoles) {
        this.userRoles = userRoles;
    }

    public Role(Integer roleId, String roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
