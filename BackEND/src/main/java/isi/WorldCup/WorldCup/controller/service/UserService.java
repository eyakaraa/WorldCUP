package isi.WorldCup.WorldCup.controller.service;




import java.util.List;


import isi.WorldCup.WorldCup.entities.User;


public interface UserService {

    
    List<User> findAll();
    void delete(int id);
    User findOne(String username);
    User findById(int id);
	User save(User user);	
	//User getUser(String username,String password);
	

}