package com.codecool.backend.user.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class RegisterRequest {
    private String username, email, password, confirmPassword;
}
