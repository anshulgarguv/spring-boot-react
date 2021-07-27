package io.javbrains.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import io.javbrains.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>{
    Team findByTeamName(String teamName);
}
