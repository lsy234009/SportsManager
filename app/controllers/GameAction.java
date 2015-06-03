package controllers;

import models.Game;
import models.Project;
import play.data.Form;
import play.db.jpa.Transactional;
import play.i18n.Lang;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Security;
import security.Secured;
import views.html.listgame;
import views.html.game.gameCreate;
import views.html.game.gameEdit;
import views.html.game.gameInfo;

@Security.Authenticated(Secured.class)
public class GameAction extends Controller{
	private static final int PAGE_SIZE = 10;
	private static final Result GO_LIST = redirect(routes.GameAction.list(1, "updateTime", "desc", ""));;
	
	@Transactional(readOnly = true)
	public static Result list(int pageIndex, String orderBy, String order, String filter) {
		
		
		return ok(listgame.render(Game.page(pageIndex, PAGE_SIZE, orderBy, order, filter),
				orderBy, order, filter,new Form(Game.class),Lang.get(Application.lang).get()));
	}
	
	@Transactional(readOnly = true)
	public static Result create() {
		
		return ok(gameCreate.render(Project.getAll(),new Form(Project.class),play.api.i18n.Lang.get(Application.lang).get()));
	}
	
	@Transactional
	public static Result save() {
		@SuppressWarnings({ "unchecked", "rawtypes" })
		Form<Game> projectForm = new Form(Game.class).bindFromRequest();
		
		Game p = projectForm.get();
		p.createdTime = new java.util.Date();
		p.updateTime = p.createdTime;
		Game.add(p);
		
		return GO_LIST;
	}
	
	@Transactional(readOnly = true)
	public static Result edit(long id) {
		Form<Game> form = new Form(Game.class).fill(Game.findById(id));
		
		return ok(gameEdit.render(id, Project.getAll(), form,play.api.i18n.Lang.get(Application.lang).get()));
	}
	
	@Transactional
	public static Result update(long id) {
		Form<Game> form = new Form(Game.class).bindFromRequest();
		
		Game before = Game.findById(id);
		
		Game after = form.get();
		
		before.description = after.description;
		before.updateTime = new java.util.Date();
		before.project = after.project;
		Game.update(before);
		
		return GO_LIST;
	}
	
	@Transactional
	public static Result delete(long id) {
		Game.delete(id);
		
		return GO_LIST;
	}
	
	@Transactional(readOnly = true)
	public static Result info(long id) {
		Form<Game> form = new Form(Game.class).fill(Game.findById(id));
		
		return ok(gameInfo.render(form,play.api.i18n.Lang.get(Application.lang).get()));
	}
}
