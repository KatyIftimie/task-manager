package com.codecool.backend.user.service;

import com.codecool.backend.user.dto.RegisterRequest;
import com.codecool.backend.user.model.User;
import com.codecool.backend.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public User getUserByUsername(String username) {
        return userRepository.getByUsername(username);
    }
    public User getUserByEmail(String email) { return userRepository.getByEmail(email);}

    public ResponseEntity<String> register (RegisterRequest request) {
        ResponseEntity<String> validation = validateRegister(request);
        if (validation.getStatusCode().equals(HttpStatus.OK)) {
            User newUser = createUser(request);
            userRepository.save(newUser);
        }
        return validation;
    }

    private ResponseEntity<String> validateRegister (RegisterRequest request) {
        User userName = getUserByUsername(request.getUsername());
        User email = getUserByEmail(request.getEmail());
        if (userName != null) {
            return new ResponseEntity<>("Username already in use", HttpStatus.INTERNAL_SERVER_ERROR);

        }
        if (email != null) {
            return new ResponseEntity<>("Email already in use", HttpStatus.INTERNAL_SERVER_ERROR);

        }
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return new ResponseEntity<>("Password don't match", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>("Registration successful", HttpStatus.OK);
    }

    private User createUser(RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return user;
    }

    


}
