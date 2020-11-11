package com.codecool.backend.tasks.controller;

import com.codecool.backend.tasks.dto.TaskRequest;
import com.codecool.backend.tasks.model.Task;
import com.codecool.backend.tasks.repository.TaskRepository;
import com.codecool.backend.tasks.service.TaskService;
import com.codecool.backend.user.model.User;
import com.codecool.backend.user.service.UserService;
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
    private final UserService userService;
    private final TaskRepository repository;

    @PostMapping("/add-task")
    public ResponseEntity<String> addATask(@RequestBody TaskRequest request) {
        User user = userService.getUserByUsername(request.getUsername());
         Task addedTask=taskService.addTask(request.getName(), request.getDay(), request.getDifficulty(), user ,request.isCompleted());
         return new ResponseEntity<>(Long.toString(addedTask.getTaskId()), HttpStatus.CREATED);
    }

    @GetMapping("/tasks/{username}")
    public List<Task> listTasks(@PathVariable("username") String username) {
        User user = userService.getUserByUsername(username);
        return taskService.getTasksByUser(user);
    }

    @PostMapping("/update-task-status")
    public ResponseEntity<String> updateTask(@RequestBody TaskRequest request) {
        taskService.updateTask(request.getTaskId());
        return new ResponseEntity<>("Status changed!", HttpStatus.OK);
    }
}
