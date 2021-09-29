package isi.WorldCup.WorldCup.entities;



import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="lematch")
public class Match implements Serializable {
	@Id
    @GeneratedValue
	private int  id;
	
	private Date _dateMatch;
	private String _premiereEquipe;
	private String _deuxiemeEquipe;
	private String _stade;
	private int _nbSpectateur;
	private float prix;



	public float getPrix() {
		return prix;
	}


	public void setPrix(float prix) {
		this.prix = prix;
	}


	public Date get_dateMatch() {
		return _dateMatch;
	}


	public void set_dateMatch(Date _dateMatch) {
		this._dateMatch = _dateMatch;
	}


	public String get_premiereEquipe() {
		return _premiereEquipe;
	}


	public void set_premiereEquipe(String _premiereEquipe) {
		this._premiereEquipe = _premiereEquipe;
	}


	public String get_deuxiemeEquipe() {
		return _deuxiemeEquipe;
	}


	public void set_deuxiemeEquipe(String _deuxiemeEquipe) {
		this._deuxiemeEquipe = _deuxiemeEquipe;
	}


	public String get_stade() {
		return _stade;
	}


	public void set_stade(String _stade) {
		this._stade = _stade;
	}


	public int get_nbSpectateur() {
		return _nbSpectateur;
	}


	public void set_nbSpectateur(int _nbSpectateur) {
		this._nbSpectateur = _nbSpectateur;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	


	@Override
	public String toString() {
		return "Match [id=" + id + ", _dateMatch=" + _dateMatch + ", _premiereEquipe=" + _premiereEquipe
				+ ", _deuxiemeEquipe=" + _deuxiemeEquipe + ", _stade=" + _stade + ", _nbSpectateur=" + _nbSpectateur
				+ ", prix=" + prix + "]";
	}


	public Match(int id, Date _dateMatch, String _premiereEquipe, String _deuxiemeEquipe, String _stade,
			int _nbSpectateur, float prix) {
		super();
		this.id = id;
		this._dateMatch = _dateMatch;
		this._premiereEquipe = _premiereEquipe;
		this._deuxiemeEquipe = _deuxiemeEquipe;
		this._stade = _stade;
		this._nbSpectateur = _nbSpectateur;
		this.prix=prix;
	}


	public Match() {
		super();
		
	}




}
