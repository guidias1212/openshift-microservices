package com.auth.authentication.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
public class Response {

    private final String token;
    private final String message;
}
