package com.codecool.backend.user.repository;

import com.codecool.backend.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User getByUsername(String username);
    User getByEmail(String email);
    User getByUserId(long userId);
}
