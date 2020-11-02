package com.auth.authentication.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Response {

    private String token;
    private String message;
}
