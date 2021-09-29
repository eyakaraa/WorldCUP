package isi.WorldCup.WorldCup.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import isi.WorldCup.WorldCup.controller.service.UserService;
import isi.WorldCup.WorldCup.entities.User;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

	@Autowired 
	UserService userService;
	
	

	@GetMapping("/users")
	public List<User> getAllUser() {
		List<User> users = userService.findAll();

        return users;
	}


	@DeleteMapping("/supprimeruser/{id}")
	public void deleteUser(@PathVariable int id) {
		userService.delete(id);
	}
	
	

	@GetMapping(value ="/user/{id}") //URL
	public User afficherUser(@PathVariable int id){
		User user = userService.findById(id);
			return user;
	}


	
	@PutMapping("/updateuser/{id}")
	public User updateUser(@PathVariable(value = "id") int id,
	                                        @RequestBody User user) {

		User m = userService.findById(id);
	    
	   
		user.set_nom(user.get_nom());
		user.set_prenom(user.get_prenom());
		user.set_numTel(user.get_numTel());
		user.setUsername(user.getUsername());
		user.setPassword(user.getPassword());
		user.set_dateNaissance(user.get_dateNaissance());
		

	   m = userService.save(user);
	    return user;
	}

	
	  @RequestMapping(value="/signup", method = RequestMethod.POST)
	    public User saveUser(@RequestBody User user){
	        return userService.save(user);
	    }
	  
/*	  @GetMapping(value="/getUser/{username}/{password}")
	    public User getUser(@PathVariable(value = "username") String username,@PathVariable(value = "password") String password){
	        User user = userService.getUser(username,password);
	        return user;
	    }*/
	  
	  
		@GetMapping(value ="/getUser/{username}") //URL
		public User afficherUser(@PathVariable String username){
			User user = userService.findOne(username);
				return user;
		}
	
}
