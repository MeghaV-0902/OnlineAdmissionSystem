package com.cg.onlineadmissionsystem.Config;

import com.cg.onlineadmissionsystem.Service.Impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter
{
    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException
    {
       final String requestTokenHeader= request.getHeader("Authorization");

        String email=null;
        String jwtToken=null;

        if(requestTokenHeader!=null && requestTokenHeader.startsWith("Bearer "))
        {
            jwtToken=requestTokenHeader.replace("Bearer ", "");

            try
            {
                email=this.jwtUtil.extractUsername(jwtToken);
            }
            catch(ExpiredJwtException e)
            {
                e.printStackTrace();
                System.out.println("jwt token expired");
            }
            catch (Exception e)
            {
                e.printStackTrace();
                System.out.println("error");
            }
        }
        else
        {
            System.out.println("Invalid token doesnt starts with Bearer");
        }

        //validated
        if(email!=null && SecurityContextHolder.getContext().getAuthentication()==null)
        {
            final UserDetails userDetails = this.userDetailsService.loadUserByUsername(email);
            if(this.jwtUtil.validateToken(jwtToken,userDetails))
            {
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }

        }
        else
        {
            System.out.println("token not valid");
        }

        filterChain.doFilter(request,response);
    }

}
