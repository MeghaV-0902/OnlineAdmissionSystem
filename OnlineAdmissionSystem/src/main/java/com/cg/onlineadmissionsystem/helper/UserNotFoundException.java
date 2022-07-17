package com.cg.onlineadmissionsystem.helper;

public class UserNotFoundException extends Exception
{
    public UserNotFoundException()
    {
        super("User name does not exist. Please try again.");
    }
    public UserNotFoundException(String msg)
    {
        super(msg);
    }
}
