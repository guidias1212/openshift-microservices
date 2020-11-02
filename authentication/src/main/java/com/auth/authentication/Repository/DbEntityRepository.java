package com.auth.authentication.Repository;

import com.auth.authentication.domain.DbEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface DbEntityRepository extends CrudRepository<DbEntity, Long> {
    List<DbEntity> findByUsernameAndPrivateKey(String username, String privateKey);
}
