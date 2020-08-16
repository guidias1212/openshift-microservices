package com.consumer.controller.domain;

import com.consumer.controller.domain.response.ConsumerResponse;
import com.consumer.facade.ConsumerFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/consumer"})
public class ConsumerController {

    @Autowired
    ConsumerFacade consumerFacade = new ConsumerFacade();

    @GetMapping
    @RequestMapping(value = "/get", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ConsumerResponse> getConsumerResponse(){
        ConsumerResponse response = new ConsumerResponse();
        response = consumerFacade.getResponse();
        return ResponseEntity.ok().body(response);
    }
}
