package isi.WorldCup.WorldCup.entities;

import java.io.Serializable;
import java.sql.Date;
import java.util.Set;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User implements Serializable {

	
	@Id
    @GeneratedValue
    @Column(name="idUser", nullable = false)
    private int _idUser;
    private String _nom;
    private String _prenom;
    private int _numTel;
    private String username;
    private String password;
    private Date _dateNaissance;
    

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "USER_ROLES", joinColumns = {
            @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
            @JoinColumn(name = "ROLE_ID") })
    private Set<Role> roles;
	
    
    @ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "Billet", joinColumns = { 
			@JoinColumn(name = "user_id")}, inverseJoinColumns = { 
			@JoinColumn (name = "match_id")})
    private Set<Match> matchs;
    
    
	public int get_idUser() {
		return _idUser;
	}
	public void set_idUser(int _idUser) {
		this._idUser = _idUser;
	}
	public String get_nom() {
		return _nom;
	}
	public void set_nom(String _nom) {
		this._nom = _nom;
	}
	public String get_prenom() {
		return _prenom;
	}
	public void set_prenom(String _prenom) {
		this._prenom = _prenom;
	}
	public int get_numTel() {
		return _numTel;
	}
	public void set_numTel(int _numTel) {
		this._numTel = _numTel;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Date get_dateNaissance() {
		return _dateNaissance;
	}
	public void set_dateNaissance(Date _dateNaissance) {
		this._dateNaissance = _dateNaissance;
	}
	public Set<Match> getmatchs() {
		return matchs;
	}
	public void setmatchs(Set<Match> matchs) {
		this.matchs = matchs;
	}
	public User() {
		super();
		
	}
	
	
	
	public User(int _idUser, String _nom, String _prenom, int _numTel, String username, String password,
			Date _dateNaissance, Set<Role> roles, Set<Match> matchs) {
		super();
		this._idUser = _idUser;
		this._nom = _nom;
		this._prenom = _prenom;
		this._numTel = _numTel;
		this.username = username;
		this.password = password;
		this._dateNaissance = _dateNaissance;
		this.roles = roles;
		this.matchs = matchs;
	}
	
	@Override
	public String toString() {
		return "User [_idUser=" + _idUser + ", _nom=" + _nom + ", _prenom=" + _prenom + ", _numTel=" + _numTel
				+ ", username=" + username + ", password=" + password + ", _dateNaissance=" + _dateNaissance
				+ ", roles=" + roles + ", matchs=" + matchs + "]";
	}

	
	
	
	


	
	  

}
