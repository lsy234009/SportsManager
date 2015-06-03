package models;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import play.db.jpa.JPA;

@Entity
@Table(name="game")
public class Game implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public long id;
	public Date createdTime;
	public Date updateTime;
	public String gameStartTime;//比赛开始时间
	@ManyToOne
	@JoinColumn(name="project_id")
	public Project project;
	public String description;
	
	
	public static Game findById(long id) {
		return JPA.em().find(Game.class, id);
	}
	
	public static void add(Game g) {
		JPA.em().persist(g);
	}
	
	public static void delete(long id) {
		JPA.em().remove(findById(id));
	}
	
	public static void update(Game g) {
		JPA.em().merge(g);
	}
	
	public static Map<String,String> allGame(){
		Map<String, String> map = new HashMap<String,String>();
		
		List<Game> list  = null;
		
		String query = "from Game ";
		
		list = JPA.em().createQuery(query)
				.getResultList();
		
		for(Game game:list){
			map.put(""+game.id, game.project.title);
		}
		
		return map;
		
	}
	
	public static Page page(int pageIndex, int pageSize, String orderBy, String prder, String filter) {
		Page page = new Page();
		
		String query = "from Game ";
		
		Long total = (Long)JPA.em().createQuery("select count(*) " + query)
				.getSingleResult();
		
		List<Game> gameList = JPA.em().createQuery(query +" order by project.id ,updateTime")
				.getResultList();
		
		page.setTotalRowCount(total);
		page.setPageIndex(pageIndex);
		page.setPageSize(pageSize);
		page.setGameList(gameList);
		
		return page;
	}

}














