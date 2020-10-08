package com.codecool.backend.tasks.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class TaskRequest {
    private String name, day, username;
    private int difficulty;
    private boolean completed;
}
