package com.gateway.integration.producer.client;

import com.gateway.controller.domain.request.GatewayRequest;
import com.gateway.integration.producer.domain.response.NotesResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Component
@FeignClient(name = "notesClient", url = "${notes.url}")
public interface NotesClient {
    @RequestMapping(method = RequestMethod.GET, value = "/notes/getAll")
    List<NotesResponse> getProducerInformation();

    @RequestMapping(method = RequestMethod.POST, value = "/notes/new")
    String writeNote(GatewayRequest gatewayRequest);

    @RequestMapping(method = RequestMethod.DELETE, value = "/notes/clear")
    String clearNotes();
}
