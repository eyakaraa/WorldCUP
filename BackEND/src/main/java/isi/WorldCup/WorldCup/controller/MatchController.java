package isi.WorldCup.WorldCup.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import isi.WorldCup.WorldCup.entities.Match;
import isi.WorldCup.WorldCup.entities.User;
import isi.WorldCup.WorldCup.repository.MatchRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class MatchController {
	
	@Autowired 
	MatchRepository matchRepository;
	
	
	
	@GetMapping("/matchs")
	public List<Match> getAllMatch() {
		List<Match> matchs = matchRepository.findAll();

        return matchs;
	    
	}
	
	
	
	@PostMapping("/addmatch")
	public Match createMatch( @RequestBody Match match) {
	    return matchRepository.save(match);
	}
	
	@DeleteMapping("/supprimerematch/{id}")
	public void deleteMatch(@PathVariable int id) {
		matchRepository.deleteById(id);
	}
	
	@GetMapping(value ="/match/{id}") //URL
	public Match afficherUnMatch(@PathVariable int id){
		Match match = matchRepository.findById(id);
			return match;
	}
	
	@PutMapping("/updatematch/{id}")
	
	public Match updateMatch(@PathVariable(value = "id") int id,
	                                        @RequestBody Match match) {
		
		Match m = matchRepository.findById(id);
		
		
	    match.set_dateMatch(match.get_dateMatch());
	    match.set_deuxiemeEquipe(match.get_deuxiemeEquipe());
	    match.set_premiereEquipe(match.get_premiereEquipe());
	    match.set_nbSpectateur(match.get_nbSpectateur());
	    match.setPrix(match.getPrix());
	   
	    m = matchRepository.save(match);
	   return match;
	}
	
	@GetMapping(value="/getTickets/{id_match}")
	public int CountTickets(@PathVariable Integer id_match) {
		return 	matchRepository.CountTickets(id_match);
		
	}
	
	
	
	
	

}
