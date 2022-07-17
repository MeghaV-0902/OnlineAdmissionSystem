package com.cg.onlineadmissionsystem.Controller;

import com.cg.onlineadmissionsystem.Config.JwtUtil;
import com.cg.onlineadmissionsystem.Model.JwtRequest;
import com.cg.onlineadmissionsystem.Model.User;
import com.cg.onlineadmissionsystem.Service.Impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticateController
{
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {
            authenticate(jwtRequest.getEmail(),jwtRequest.getPassword());
        }
        catch (UsernameNotFoundException e)
        {
            e.printStackTrace();
            throw new Exception("User not found");
        }


        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getEmail());
        String token = this.jwtUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtRequest(token));
    }

    private void authenticate(String email, String password) throws Exception {
        try
        {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email,password));
        }
        catch (DisabledException e)
        {
            throw new Exception("USER DISABLED "+e.getMessage());
        }
        catch (BadCredentialsException e)
        {
            throw new Exception("Invalid Credentials "+e.getMessage());
        }
    }

    @GetMapping("/current-user")
    public User getCurrentUser(Principal principal)
    {
        return ((User)this.userDetailsService.loadUserByUsername(principal.getName()));
    }




}
