package com.auth.authentication;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class Request {

    private String user;
    private String publicKey;
}
