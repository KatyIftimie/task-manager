package com.codecool.backend.tasks.model;

import com.codecool.backend.user.model.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name="tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long taskId;

    @NotNull String name;
    @NotNull String day;
    @NotNull int difficulty;
    @Column(columnDefinition = "boolean default false")
    @NotNull  boolean  completed ;

    @ManyToOne(targetEntity = User.class)
    User user;
}
