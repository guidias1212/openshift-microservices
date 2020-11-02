package com.auth.authentication.facade;

import com.auth.authentication.Repository.DbEntityRepository;
import com.auth.authentication.domain.DbEntity;
import com.auth.authentication.domain.Request;
import com.auth.authentication.domain.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TokenFacade {

    @Autowired
    DbEntityRepository dbEntityRepository;

    public Response generateToken (Request request) {

        List<DbEntity> dbEntityList = dbEntityRepository.findByUsernameAndPrivateKey(request.getUser(), request.getPublicKey());

        if (dbEntityList.size() > 0) {
            String token = "12341234";
            String message = "Token successfully created";
            Response response = Response.builder().token(token).message(message).build();
            return response;

        } else {
            Response response = Response.builder().token("").message("Invalid Username or Password").build();
            return response;
        }
    }
}
