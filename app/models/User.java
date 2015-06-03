package models;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import controllers.Application;

import play.db.jpa.JPA;

@Entity
@Table(name="user")
public class User implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public long id;
	public String username;
	public String password;
//	public String displayName;
	public String email;
	public String phone;
	public String typeId;
	public String department;
	public String remarks;
	public int isEnable;
	
	private static  Map<String,String> roles = new HashMap<String, String>();
	private static  Map<String,String> status = new HashMap<String, String>();
	static {
		roles.put("1", Application.ADMIN);
		roles.put("2", Application.USER);
		
		status.put("1", "可用");
		status.put("0", "不可用");
	}
	
	public static Map<String,String> userGroup(){
		return roles;
	}
	
	public static User authenticate(String username, String password){
		String queryString = "from User user where isEnable =1 and username=? and password=?";
		
		@SuppressWarnings("unchecked")
		List<User> result = JPA.em().createQuery(queryString)
				.setParameter(1, username)
				.setParameter(2, password)
				.getResultList();
		
		if(result.size() > 0){
			return result.get(0);
		}
		
		return null;
	}
	
	
	public static User findById(Long id){
		return JPA.em().find(User.class, id);
	}
	
	public static void add(User user){
		JPA.em().persist(user);
	}
	
	public static void update(User user){
		JPA.em().merge(user);
	}
	
	public static void delete(Long id){
		User user = findById(id);
		JPA.em().remove(user);
	}
	
	public static Page page(int pageIndex, int pageSize, String orderBy, String order,String filter){
		Page page = new Page();
		
		Long total = (Long) JPA.em().createQuery("select count(*) from User").getSingleResult();
		
		String queryString = "from User";
		
		@SuppressWarnings("unchecked")
		List<User> result = JPA.em().createQuery(queryString)
				.setFirstResult((pageIndex - 1) * pageSize)
				.setMaxResults(pageSize)
				.getResultList();
		
		page.setTotalRowCount(total);
		page.setUserList(result);
		page.setPageIndex(pageIndex);
		page.setPageSize(pageSize);
		
		return page;
	}
	
	
	
}





























