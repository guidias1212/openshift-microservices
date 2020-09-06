package com.gateway.integration.producer.service;

import com.gateway.controller.domain.request.GatewayRequest;
import com.gateway.integration.producer.client.NotesClient;
import com.gateway.integration.producer.domain.response.NotesResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotesService {

    @Autowired
    NotesClient notesClient;

    public List<NotesResponse> getProducerResponse() {
        return notesClient.getProducerInformation();
    }

    public void writeNote(GatewayRequest note) {
        notesClient.writeNote(note);
    }

    public void clearNotes() {
        notesClient.clearNotes();
    }
}
