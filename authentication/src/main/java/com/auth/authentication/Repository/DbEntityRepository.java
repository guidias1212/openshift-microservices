package com.auth.authentication.Repository;

import com.auth.authentication.domain.DbEntity;
import org.springframework.data.repository.CrudRepository;

public interface DbEntityRepository extends CrudRepository<DbEntity, Long> {}
