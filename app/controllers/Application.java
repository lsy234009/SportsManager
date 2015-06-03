package controllers;

import models.User;
import play.*;
import play.api.mvc.Request;
import play.data.Form;
import play.db.jpa.Transactional;
import play.i18n.Lang;
import play.i18n.Messages;
import play.mvc.*;
import play.mvc.Http.Session;
import views.html.*;

public class Application extends Controller {
	public static final String USER_NAME = "user_name";
	public static final String ROLE_ID = "roleid";
	public static final String USER_KEY_ID = "user_key_id";
	public static final String AD_MANAGER = "3";
	public static final String ADMIN = "admin";
	public static final String USER = "user";
	
	private static final Result GO_Admin_HOME = redirect(routes.EnrollAction.list(1,0,0));
	private static final Result GO_USER_HOME = redirect(routes.EnrollAction.listScoreQuickSearch(1,0));
	public static String lang = "cn";
	
    public static Result index() {
    	Session mySession = session();
    	
    	if(mySession.containsKey(USER_NAME)){
    		return GO_USER_HOME;
    	}
       return login();
    }
    
    public static class Login {
		public String username;
		public String password;
		
		public String validate(){
			User user = User.authenticate(username, password);
			
			if(user == null){
				return Messages.get(lang, "username_or_password_wrong");
			}
			return  null;
		}

	}
    
    @Transactional
	public static Result authenticate(){
		Form<Login> loginForm = new Form(Login.class).bindFromRequest();
    	
    	if(loginForm.hasErrors()){
    		return badRequest(login.render(new Form(Login.class), Lang.get(Application.lang).get()));
    	}
    	User u = User.authenticate(loginForm.get().username, loginForm.get().password);
    	
    	session().clear();
    	session(USER_NAME,u.username);
    	session(USER_KEY_ID,""+u.id);
    	session(ROLE_ID,u.typeId);
    	
    	if(u.typeId.equals("1")){
    		return GO_Admin_HOME;
    	}else{
    		return GO_USER_HOME;
    	}
    	
    	
    }
    
    @SuppressWarnings("unchecked")
	public static Result login(){
    	
    	return ok(login.render(new Form(Login.class), Lang.get(Application.lang).get()));
    }
    
	public static String getfilePath(){
		String rootPath = play.Play.application().path().getAbsolutePath();
	
		return rootPath;
	}
	
	public static Result logout(){
		session().clear();
		return login();
	}
	
	public static Result signUp(){
		
		Form<User> form = new Form(User.class);
		
		return ok(signUp.render(form,play.api.i18n.Lang.get(Application.lang).get()));
	}
	
	@Transactional
	public static Result signUpSave() {
Form<User> userForm = new Form(User.class).bindFromRequest();
		
		User u = userForm.get();
		u.isEnable = 1;
		u.typeId="2";
		User.add(u);
		
		return redirect("/login");
	}
	
}
