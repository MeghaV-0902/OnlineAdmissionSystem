package com.cg.onlineadmissionsystem.Model;

public class JwtRequest
{
    String email;
    String password;

    public JwtRequest() {
    }

    public JwtRequest(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
