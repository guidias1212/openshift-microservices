package com.gateway.controller.domain;

import com.gateway.controller.domain.request.GatewayRequest;
import com.gateway.controller.domain.response.GatewayResponse;
import com.gateway.facade.NotesFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"/gateway"})
public class GatewayController {

    @Autowired
    NotesFacade notesFacade = new NotesFacade();

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/getNotes", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<GatewayResponse> getNotes(){
        return ResponseEntity.ok().body(notesFacade.getNotes());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/writeNote", produces = MediaType.APPLICATION_JSON_VALUE)
    public String writeNote(@RequestBody GatewayRequest note) {
        notesFacade.writeNote(note);
        return "Note added";
    }

    @DeleteMapping
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/clear")
    public String clearNotes() {
        notesFacade.clearNotes();
        return "Notes erased";
    }

}
