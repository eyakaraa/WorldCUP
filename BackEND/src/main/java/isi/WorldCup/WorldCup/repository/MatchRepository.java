package isi.WorldCup.WorldCup.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import isi.WorldCup.WorldCup.entities.Match;



public interface MatchRepository extends JpaRepository<Match,Integer>{
	
	Match findById(int id);
	 @Transactional
	    @Query("SELECT Count(*) FROM Match m JOIN User u WHERE m.id = 'id_match'")
	    public int CountTickets(@Param("id_match") Integer id_match);
}
