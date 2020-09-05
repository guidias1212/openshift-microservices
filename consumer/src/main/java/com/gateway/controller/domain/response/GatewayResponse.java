package com.gateway.controller.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class GatewayResponse {

    @JsonProperty("notes")
    private List<String> notes;
}
