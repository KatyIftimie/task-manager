package com.codecool.backend.user.controller;

import com.codecool.backend.user.dto.LoginRequest;
import com.codecool.backend.user.dto.RegisterRequest;
import com.codecool.backend.user.repository.UserRepository;
import com.codecool.backend.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
public class UserController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterRequest request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest request, HttpSession session) {
        return userService.login(request,session);
    }

    @GetMapping("/logout")
    public void logoutUser(HttpSession session, HttpServletResponse response) throws IOException {
        session.removeAttribute("user");
        response.sendRedirect("/login");
    }


}
