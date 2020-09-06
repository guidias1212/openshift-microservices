package com.gateway.controller.domain.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GatewayRequest {

    @JsonProperty("text")
    private String note;
}
