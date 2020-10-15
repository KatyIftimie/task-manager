package com.codecool.backend.user.model;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import com.codecool.backend.tasks.model.Task;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @NotNull
    @Email
    @Column(unique = true) private String username;
    @NotNull private String email;
    @NotNull private String password;

    @Transient
    @OneToMany(mappedBy = "user")
    private List<Task> taskList = new ArrayList<>();

}
