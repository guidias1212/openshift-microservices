package com.auth.authentication.facade;

import com.auth.authentication.domain.Request;
import com.auth.authentication.domain.Response;

public class TokenFacade {

    public static Response generateToken (Request request) {

        String token = "12341234";
        String message = "Token successfully created";
        Response response = Response.builder().token(token).message(message).build();
        return response;
    }
}
