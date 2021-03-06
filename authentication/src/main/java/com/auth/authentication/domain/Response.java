package com.auth.authentication.domain;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class Response {

    private final String token;
    private final String message;
}
