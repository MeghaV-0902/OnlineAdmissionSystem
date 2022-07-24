package com.cg.onlineadmissionsystem.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@Builder
@Entity
@Table(name="users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User implements UserDetails
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    @NotNull(message = "Name cannot be null")
    @Column(nullable = false)
    private String firstName;
    private String middleName;
    @Column(nullable = false)
    private String lastName;
    @Email(message = "Email should be valid")
    private String email;
    @Column(length = 10, nullable = false)
    @Size(min = 10, max = 10)
    private String mobileNumber;
    @Column(length = 12, nullable = false)
    @Size(min = 12, max = 12)
    private String aadharCardNo;
    private String password;
    private boolean enabled = true;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "user")
    @JsonIgnore
    private Set<UserRoles> userRoles = new HashSet<>();
    public Set<UserRoles> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRoles> userRoles) {
        this.userRoles = userRoles;
    }

    public User() {
    }

    public User(String firstName, String middleName, String lastName, String email, String mobileNumber, String aadharCardNo, String password) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.aadharCardNo = aadharCardNo;
        this.password = password;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getAadharCardNo() {
        return aadharCardNo;
    }

    public void setAadharCardNo(String aadharCardNo) {
        this.aadharCardNo = aadharCardNo;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
    public boolean getEnabled()
    {
        return this.enabled;
    }

    //user details
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        Set<Authority> set = new HashSet<>();
        this.userRoles.forEach(userRole ->
        {
            set.add(new Authority(userRole.getRole().getRoleName()));
        });
        return set;
    }



    @Override
    public String getUsername() {
        return getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", middleName='" + middleName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", aadharCardNo='" + aadharCardNo + '\'' +
                ", password='" + password + '\'' +
                ", enabled=" + enabled +
                ", userRoles=" + userRoles +
                '}';
    }
}
