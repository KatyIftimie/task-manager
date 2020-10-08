package com.codecool.backend.tasks.service;

import com.codecool.backend.tasks.dto.TaskRequest;
import com.codecool.backend.tasks.model.Task;
import com.codecool.backend.tasks.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;

    private Task createTask(TaskRequest request) {
        Task newTask = new Task();
        newTask.setName(request.getName());
        newTask.setDay(request.getDay());
        newTask.setDifficulty(request.getDifficulty());
        newTask.setUsername(request.getUsername());
        newTask.setCompleted(request.isCompleted());
        return newTask;
    }

    public  void addTask(TaskRequest request) {
        Task newTask = createTask(request);
        taskRepository.save(newTask);
    }

    public List<Task> getTasksByDayAndUser(String day, String username) {
        return taskRepository.findAllByDayAndUsername(day, username);
    }

    public List<Task> getTasksByUser(String username) {
        return taskRepository.findAllByUsername(username);
    }
}
