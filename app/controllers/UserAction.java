package controllers;

import play.data.Form;
import play.db.jpa.Transactional;
import play.i18n.Lang;
import play.i18n.Messages;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;
import security.AdminSecured;
import security.Secured;
import models.User;
import views.html.*;
import views.html.user.*;


@Security.Authenticated(Secured.class)
public class UserAction extends Controller {
	private static final Result GO_LIST = redirect(routes.UserAction.list(1, "updateTime", "desc", ""));
	private static final int PAGE_SIZE = 5;
	
	
	@Transactional(readOnly = true)
	public static Result list(int page, String sortBy, String order,
			String filter){
		return ok(listuser.render(User.page(page, PAGE_SIZE, sortBy, order, filter),
				sortBy, order, filter,new Form(User.class),Lang.get(Application.lang).get()));
	}
	
	@Transactional(readOnly = true)
	@Security.Authenticated(AdminSecured.class)
	public static Result create(){
		@SuppressWarnings("unchecked")
		Form<User> form = new Form(User.class);
		
		return ok(userCreate.render(form,play.api.i18n.Lang.get(Application.lang).get()));
	}
	
	@Transactional(readOnly = true)
	@Security.Authenticated(AdminSecured.class)
	public static Result edit(Long id){
		User user = User.findById(id);
		Form<User> form = new Form(User.class).fill(user);
		
		return ok(userEdit.render(id,form,Lang.get(Application.lang).get()));
	}
	
	@Transactional
	@Security.Authenticated(AdminSecured.class)
	public static Result save(){
		
		@SuppressWarnings({ "unchecked", "rawtypes" })
		Form<User> userForm = new Form(User.class).bindFromRequest();
		
		User u = userForm.get();
		u.isEnable = 1;
		User.add(u);
		
		return GO_LIST;
	}
	
	@Transactional
	@Security.Authenticated(AdminSecured.class)
	public static Result delete(Long id){
		User user  = User.findById(id);
		
		String deleteMessage = Messages.get(Lang.get(Application.lang).get(), "delete_success");
		String userName = user.username;
		String userStr = Messages.get(Lang.get(Application.lang).get(), "user");
		
		User.delete(id);
		
		flash("success", userStr + ": " + userName +" "+ deleteMessage);
		
		return GO_LIST;
	}
	
	@Transactional
	@Security.Authenticated(AdminSecured.class)
	public static Result update(Long id){
		
		@SuppressWarnings({ "unchecked", "rawtypes" })
		Form<User> userForm = new Form(User.class).bindFromRequest();
		User userBefore = User.findById(id);
		User userAfter = userForm.get();
		
		userBefore.department = userAfter.department;
		userBefore.remarks = userAfter.remarks;
		userBefore.typeId = userAfter.typeId;
		userBefore.username = userAfter.username;
		
		User.update(userBefore);
		
		String deleteMessage = Messages.get(Lang.get(Application.lang).get(), "update_success");
		String userName = userBefore.username;
		String userStr = Messages.get(Lang.get(Application.lang).get(), "user");
		
		
		flash("success", userStr + ": " + userName +" "+ deleteMessage);
		
		return GO_LIST;
	}
	
}




















