package com.consumer.facade;

import com.consumer.controller.domain.response.ConsumerResponse;
import com.consumer.integration.producer.service.ProducerService;
import com.consumer.mapper.ProducerMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConsumerFacade {

    @Autowired
    ProducerService producerService = new ProducerService();

    @Autowired
    ProducerMapper producerMapper = new ProducerMapper();

    public ConsumerResponse getResponse() {
        return producerMapper.mapProducerResponseToConsumerResponse(producerService.getProducerResponse());
    }
}
