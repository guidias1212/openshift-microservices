package com.producer.controller;

import com.producer.domain.response.ProducerModel;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
@RequestMapping("/producer")
public class ProducerController {

    @GetMapping
    @RequestMapping(value = "/getInformation", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProducerModel> getProducerResponse(){

        ProducerModel response = new ProducerModel();
        response.setId(1L);
        response.setName("Hello from producer microsservice!");

        return ResponseEntity.ok().body(response);
    }
}
