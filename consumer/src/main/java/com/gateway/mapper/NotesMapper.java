package com.gateway.mapper;

import com.gateway.controller.domain.response.GatewayResponse;
import com.gateway.integration.producer.domain.response.NotesResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class NotesMapper {
    public GatewayResponse mapNotesResponseToGatewayResponse(List<NotesResponse> notesResponse){
        GatewayResponse gatewayResponse = new GatewayResponse();
        List<String> notes = new ArrayList<String>();
        notesResponse.forEach(note -> {
            notes.add(note.getText());
        });
        gatewayResponse.setNotes(notes);
        return gatewayResponse;
    }
}
