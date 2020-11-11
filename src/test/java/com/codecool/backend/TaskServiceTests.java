package com.codecool.backend;

import com.codecool.backend.tasks.dto.TaskRequest;
import com.codecool.backend.tasks.model.Task;
import com.codecool.backend.tasks.repository.TaskRepository;
import com.codecool.backend.tasks.service.TaskService;
import com.codecool.backend.user.model.User;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


import static org.mockito.Mockito.*;
@RunWith(SpringRunner.class)
public class TaskServiceTests {
//    TaskService taskService;
//    @Test
//    public void addTaskTest() throws Exception {
//
//        User user= new User(1, "yoo", "dsadksa@gmail.com", "21333", new ArrayList<>());
//        Task expected = new Task(5,"name", "monday", 3, false, user);
//
//        assertEquals(expected, taskService.addTask("name", "monday", 3, user, false));
//
//    }
}
