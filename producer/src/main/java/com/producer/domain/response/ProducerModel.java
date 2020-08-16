package com.producer.domain.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProducerModel {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("model_name")
    private String name;
}
