package isi.WorldCup.WorldCup.repository;



import java.sql.Date;

import javax.transaction.Transactional;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


import isi.WorldCup.WorldCup.entities.User;

public interface UserRepository extends CrudRepository<User,Integer> {

    User findByUsername(String username);
    
	/* @Transactional
	    @Query("SELECT _nom,_prenom,_numTel,username,password,_dateNaissance FROM User WHERE id='id' AND username ='username' AND password='password' ")
	    public User getUser(@Param("username") String username,@Param("password")  String password );*/
   

}
