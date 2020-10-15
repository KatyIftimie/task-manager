package com.codecool.backend.tasks.service;

import com.codecool.backend.tasks.dto.TaskRequest;
import com.codecool.backend.tasks.model.Task;
import com.codecool.backend.tasks.repository.TaskRepository;
import com.codecool.backend.user.model.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private TaskRepository taskRepository;


    public  void addTask(String name, String day, int difficulty, User user, boolean completed) {
        Task newTask = new Task();
        newTask.setName(name);
        newTask.setDay(day);
        newTask.setDifficulty(difficulty);
        newTask.setUser(user);
        newTask.setCompleted(completed);
        taskRepository.save(newTask);
    }


    public List<Task> getTasksByUser(User user) {
        return taskRepository.findAllByUser(user);
    }


    public void updateTask(long taskId ) {
        Task updatedTask = taskRepository.getByTaskId(taskId);
        System.out.println(updatedTask);
        updatedTask.setCompleted(!updatedTask.isCompleted());
        taskRepository.save(updatedTask);
    }
}
