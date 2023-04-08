package com.springapp.crud_spring.repository;

import com.springapp.crud_spring.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
