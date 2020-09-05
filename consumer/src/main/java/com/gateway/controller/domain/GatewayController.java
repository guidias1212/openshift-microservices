package com.gateway.controller.domain;

import com.gateway.controller.domain.response.GatewayResponse;
import com.gateway.facade.NotesFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/gateway"})
public class GatewayController {

    @Autowired
    NotesFacade notesFacade = new NotesFacade();

    @GetMapping
    @RequestMapping(value = "/getNotes", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GatewayResponse> getNotes(){
        return ResponseEntity.ok().body(notesFacade.getResponse());
    }

//    TODO
//    @PostMapping

//    TODO
//    @DeleteMapping


}
