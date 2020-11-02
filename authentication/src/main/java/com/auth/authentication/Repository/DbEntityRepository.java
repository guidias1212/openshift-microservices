package com.auth.authentication.Repository;

import com.auth.authentication.domain.DbEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DbEntityRepository extends CrudRepository<DbEntity, Long> {
    List<DbEntity> findByUsernameAndPrivateKey(String username, String privateKey);
}
