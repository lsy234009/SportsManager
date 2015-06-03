package models;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import play.db.jpa.JPA;

/**
 * 报名管理，同时有成绩字段，可以少一个表
 *
 */
@Entity
@Table(name="enroll")
public class Enroll implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public long id;
	@ManyToOne
	@JoinColumn(name="user_id")
	public User user;
	@ManyToOne
	@JoinColumn(name="game_id")
	public Game game;
	public String score;
	public Date createdTime;
	public Date updateTime;
	
	public static Enroll findById(long id) {
		return JPA.em().find(Enroll.class, id);
	}
	
	public static void add(Enroll score) {
		JPA.em().persist(score);
	}
	
	public static void delete(long id) {
		JPA.em().remove(findById(id));
	}
	
	public static void update(Enroll score) {
		JPA.em().merge(score);
	}
	
	public static Page page(int pageIndex, int pageSize, long gameId, long userId) {
		Page page = new Page();
		
		String query = "from Enroll s where game_id like ? and user_id like ?";
		
		String strGameId = "", strUserId = "";
		
		strGameId = gameId == 0? "%":""+gameId;
		strUserId = userId == 0? "%":"" + userId;
		
		long total = (Long)JPA.em().createQuery("select count(*) " + query)
				.setParameter(1, strGameId)
				.setParameter(2, strUserId)
				.getSingleResult();
		
		List<Enroll> list = JPA.em().createQuery(query)
				.setParameter(1, strGameId)
				.setParameter(2, strUserId)
				.setFirstResult((pageIndex - 1) * pageSize)
				.getResultList();
		
		page.setScoreList(list);
		page.setPageIndex(pageIndex);
		page.setPageSize(pageSize);
		page.setTotalRowCount(total);
		
		return page;
	}
	
}















