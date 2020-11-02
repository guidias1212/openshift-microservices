package com.auth.authentication.controller;

import com.auth.authentication.domain.Request;
import com.auth.authentication.domain.Response;
import com.auth.authentication.facade.TokenFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"auth/token"})
public class AuthController {

    @Autowired
    TokenFacade tokenFacade;

    @PostMapping
    @RequestMapping(value = "/new", produces = MediaType.APPLICATION_JSON_VALUE)
    public Response authenticate(@RequestBody Request request) {
        Response response = tokenFacade.generateToken(request);
        return response;
    }
}
