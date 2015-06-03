package controllers;

import models.Project;
import models.User;
import play.data.Form;
import play.db.jpa.Transactional;
import play.i18n.Lang;
import play.mvc.Result;
import play.mvc.Controller;
import play.mvc.Security;
import security.Secured;
import views.html.listproject;
import views.html.project.*;

@Security.Authenticated(Secured.class)
public class ProjectAction extends Controller{
	
	private static final int PAGE_SIZE = 10;
	private static final Result GO_LIST = redirect(routes.ProjectAction.list(1, "updateTime", "desc", ""));;
	
	@Transactional(readOnly = true)
	public static Result list(int pageIndex, String orderBy, String order, String filter) {
		
		
		return ok(listproject.render(Project.page(pageIndex, PAGE_SIZE, orderBy, order, filter),
				orderBy, order, filter,new Form(Project.class),Lang.get(Application.lang).get()));
	}
	
	
	public static Result create() {
		
		return ok(projectCreate.render(new Form(Project.class),play.api.i18n.Lang.get(Application.lang).get()));
	}
	
	@Transactional
	public static Result save() {
		@SuppressWarnings({ "unchecked", "rawtypes" })
		Form<Project> projectForm = new Form(Project.class).bindFromRequest();
		
		Project p = projectForm.get();
		p.createdTime = new java.util.Date();
		p.updateTime = p.createdTime;
		Project.add(p);
		
		return GO_LIST;
	}
	
	@Transactional(readOnly = true)
	public static Result edit(long id) {
		Form<Project> form = new Form(Project.class).fill(Project.findById(id));
		
		return ok(projectEdit.render(id,form,play.api.i18n.Lang.get(Application.lang).get()));
	}
	
	@Transactional
	public static Result update(long id) {
		Form<Project> form = new Form(Project.class).bindFromRequest();
		
		Project before = Project.findById(id);
		
		Project after = form.get();
		
		before.title = after.title;
		before.description = after.description;
		before.updateTime = new java.util.Date();
		
		Project.update(before);
		
		return GO_LIST;
	}
	
	@Transactional
	public static Result delete(long id) {
		Project.delete(id);
		
		return GO_LIST;
	}
	
	@Transactional(readOnly = true)
	public static Result info(long id) {
		Form<Project> form = new Form(Project.class).fill(Project.findById(id));
		
		return ok(projectInfo.render(form,play.api.i18n.Lang.get(Application.lang).get()));
	}
	

}
