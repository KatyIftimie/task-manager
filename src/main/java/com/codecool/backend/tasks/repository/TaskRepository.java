package com.codecool.backend.tasks.repository;

import com.codecool.backend.tasks.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByDayAndUsername(String day, String username);
}
