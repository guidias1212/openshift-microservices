package com.auth.authentication.controller;

import com.auth.authentication.domain.Request;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"auth/token"})
public class AuthController {

    @PostMapping
    @RequestMapping(value = "/new", produces = MediaType.APPLICATION_JSON_VALUE)
    public Request authenticate(@RequestBody Request request) {
        return request;
    }
}
