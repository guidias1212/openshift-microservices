package com.gateway.integration.producer.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NotesResponse {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("text")
    private String text;
}
