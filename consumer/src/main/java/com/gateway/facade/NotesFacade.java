package com.gateway.facade;

import com.gateway.controller.domain.request.GatewayRequest;
import com.gateway.controller.domain.response.GatewayResponse;
import com.gateway.integration.producer.service.NotesService;
import com.gateway.mapper.NotesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotesFacade {

    @Autowired
    NotesService notesService = new NotesService();

    @Autowired
    NotesMapper notesMapper = new NotesMapper();

    public GatewayResponse getNotes() {
        return notesMapper.mapNotesResponseToGatewayResponse(notesService.getProducerResponse());
    }

    public void writeNote(GatewayRequest note) {
        notesService.writeNote(note);
    }

    public void clearNotes() {
        notesService.clearNotes();
    }
}
