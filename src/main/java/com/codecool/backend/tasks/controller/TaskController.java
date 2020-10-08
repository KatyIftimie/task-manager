package com.codecool.backend.tasks.controller;

import com.codecool.backend.tasks.dto.TaskRequest;
import com.codecool.backend.tasks.model.Task;
import com.codecool.backend.tasks.repository.TaskRepository;
import com.codecool.backend.tasks.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
public class TaskController {
    private final TaskService taskService;
    private final TaskRepository repository;

    @PostMapping("/add-task")
    public ResponseEntity<String> addATask(@RequestBody TaskRequest request) {
        System.out.println(request);
         taskService.addTask(request);
         return new ResponseEntity<>("it added task", HttpStatus.OK);
    }

    @GetMapping("/tasks/{username}")
    public List<Task> listTasks(@PathVariable("username") String username) {
//        return taskService.getTasksByDayAndUser(day, username);
        return taskService.getTasksByUser(username);
    }
}
