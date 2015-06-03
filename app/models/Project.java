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
import javax.persistence.Table;

import controllers.Application;

import play.db.jpa.JPA;

@Entity
@Table(name="project")
public class Project implements Serializable{
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public long id;
	public String title;
	public String description;
	public Date createdTime;
	public Date updateTime;
	
	public static Project findById(long id) {
		return JPA.em().find(Project.class, id);
	}
	
	public static void add(Project p){
		JPA.em().persist(p);
	}
	
	public static void delete(long id) {
		JPA.em().remove(findById(id));
	}
	
	public static void update(Project p) {
		JPA.em().merge(p);
	}
	
	public static List<Project> getAll() {
		return JPA.em().createQuery("from Project").getResultList();
	}
	
	public static Page page(int pageIndex, int pageSize, String orderBy, String prder, String filter) {
		Page page = new Page();
		
		String query = "from Project ";
		
		Long total = (Long)JPA.em().createQuery("select count(*) " + query)
				.getSingleResult();
		
		List<Project> projectList = JPA.em().createQuery(query)
				.getResultList();
		
		page.setTotalRowCount(total);
		page.setPageIndex(pageIndex);
		page.setPageSize(pageSize);
		page.setProjectList(projectList);
		
		return page;
		
		
	}
	
}
