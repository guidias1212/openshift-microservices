package com.auth.authentication.facade;

import com.auth.authentication.Repository.DbEntityRepository;
import com.auth.authentication.domain.DbEntity;
import com.auth.authentication.domain.Request;
import com.auth.authentication.domain.Response;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.RSAKeyProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.List;

@Component
public class TokenFacade {

    @Autowired
    DbEntityRepository dbEntityRepository;

    public Response generateToken (Request request) {

        //TODO: Create methods for hashing and de-hashing the password on Database
        // https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/crypto/bcrypt/BCrypt.html
        final String user = request.getUser();
        final String publicKey = request.getPublicKey();

        List<DbEntity> dbEntityList = dbEntityRepository.findByUsernameAndPrivateKey(user, publicKey);

        if (dbEntityList.size() > 0) {
            Algorithm algorithm = Algorithm.HMAC256(publicKey);
            String token = JWT.create()
                    .withIssuer(user)
                    .sign(algorithm);
            String message = "Token successfully created";
            Response response = Response.builder().token(token).message(message).build();
            return response;
        } else {
            Response response = Response.builder().token("").message("Invalid Username or Password").build();
            return response;
        }
    }
}
