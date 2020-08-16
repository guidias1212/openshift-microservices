package com.consumer.mapper;

import com.consumer.controller.domain.response.ConsumerResponse;
import com.consumer.integration.producer.domain.response.ProducerResponse;
import org.springframework.stereotype.Component;

@Component
public class ProducerMapper {
    public ConsumerResponse mapProducerResponseToConsumerResponse(ProducerResponse producerResponse){
        ConsumerResponse consumerResponse = new ConsumerResponse();
        consumerResponse.setId(producerResponse.getId());
        consumerResponse.setName(producerResponse.getName());
        return consumerResponse;
    }
}
