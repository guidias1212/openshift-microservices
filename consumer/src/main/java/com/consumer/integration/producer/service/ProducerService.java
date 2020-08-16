package com.consumer.integration.producer.service;

import com.consumer.integration.producer.client.ProducerClient;
import com.consumer.integration.producer.domain.response.ProducerResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProducerService {

    @Autowired
    ProducerClient producerClient;

    public ProducerResponse getProducerResponse() {
        return producerClient.getProducerInformation();
    }
}
