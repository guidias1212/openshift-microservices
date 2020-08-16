package com.consumer.integration.producer.client;

import com.consumer.integration.producer.domain.response.ProducerResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Component
@FeignClient(name = "producerClient", url = "${producer.url}")
public interface ProducerClient {
    @RequestMapping(method = RequestMethod.GET, value = "/producer/getInformation")
    ProducerResponse getProducerInformation();
}
