package com.auth.authentication.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Builder
@Entity
@Table(name = "USERS")
public class DbEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String username;
    private String privateKey;

    public DbEntity(){}

    public DbEntity(final Long id, final String username, final String privateKey){
        this.id = id;
        this.username = username;
        this.privateKey = privateKey;
    }
}