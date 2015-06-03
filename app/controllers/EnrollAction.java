package controllers;

import java.util.List;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.node.ObjectNode;

import models.Enroll;
import models.Game;
import models.Page;
import models.User;
import play.data.Form;
import play.db.jpa.Transactional;
import play.i18n.Lang;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Http.RequestBody;
import play.mvc.Result;
import play.mvc.Security;
import security.Secured;
import views.html.enroll.enrollCreate;
import views.html.enroll.enrollEdit;
import views.html.enroll.listEnroll;
import views.html.enroll.listEnrollScore;
import views.html.enroll.scoreQuickSearch;


@Security.Authenticated(Secured.class)
public class EnrollAction extends Controller{
	private static final int PAGE_SIZE = 10;
	private static final Result GO_LIST = redirect(routes.ProjectAction.list(1, "updateTime", "desc", ""));
	
	@Transactional(readOnly=true)
	public static Result list(int pageIndex, int gameId, int userId){
		
		return ok(listEnroll.render(Enroll.page(pageIndex, PAGE_SIZE, gameId, userId),pageIndex,gameId,  Lang.get(Application.lang).get()));
	}
	
	@Transactional(readOnly=true)
	public static Result listScore(int pageIndex, int gameId, int userId){
		
		return ok(listEnrollScore.render(Enroll.page(pageIndex, PAGE_SIZE, gameId, userId),pageIndex,gameId,  Lang.get(Application.lang).get()));
	}
	
	@Transactional(readOnly=true)
	public static Result listScoreQuickSearch(int pageIndex, int gameId){
		
		String uId = session(Application.USER_KEY_ID);
		int userId = Integer.parseInt(uId);
		
		return ok(scoreQuickSearch.render(Enroll.page(pageIndex, PAGE_SIZE, gameId, userId),pageIndex,gameId,  Lang.get(Application.lang).get()));
	}
	
	public static class EnrollForm{
		public String game_id;
		public EnrollForm(){}
	}
	
	public static class ScoreForm{
		public String score;
		public String id;
	}
	
	@Transactional
	public static Result updateScore(){
		Form<ScoreForm> form  = new Form(ScoreForm.class).bindFromRequest();
		
		String score = form.get().score;
		String id = form.get().id;
		
		int enrollId = Integer.parseInt(id);
		Enroll enroll = Enroll.findById(enrollId);
		
		
		enroll.score = score;
		
		Enroll.update(enroll);
		String result = "success";
		
		ObjectNode resultJson=Json.newObject();
		response().setContentType("text/json; charset=UTF-8");
		resultJson.put("result", result);
		
		return  ok(resultJson);
		
	}
	
	@Transactional
	public static Result save() {
		
		Form<EnrollForm> form = new Form(EnrollForm.class).bindFromRequest();
		
		String[] ids = form.get().game_id.split(",");
		
		long userId = Long.parseLong(session(Application.USER_KEY_ID));
		
		for(String id :ids) {
			User u = User.findById(userId);
			Enroll e = new Enroll();
			e.user = u;
			e.game = new Game();
			e.game.id = Long.parseLong(id);
			Enroll.add(e);
		}
		
		return GO_LIST;
	}
	
	@Transactional(readOnly=true)
	public static Result create() {
		
		
		
		
		
		return ok(enrollCreate.render(Game.page(1, PAGE_SIZE, "%", "%", "%"),
				new Form(Game.class), Lang.get(Application.lang).get()));
	}
	
	public static Result saveScore() {
		
		return ok();
	}
	
	@Transactional(readOnly=true)
	public static Result edit(){
		long userId = Long.parseLong(session(Application.USER_KEY_ID));
		List<Enroll> list = Enroll.page(1, 100, 0, userId).getScoreList();
		
		
		return ok(enrollEdit.render(Game.page(1, PAGE_SIZE, "%", "%", "%"),
				new Form(Game.class),list,Lang.get(Application.lang).get()));
	}
	
	@Transactional
	public static Result update(){
		
		Form<EnrollForm> form = new Form(EnrollForm.class).bindFromRequest();
		
		String[] ids = form.get().game_id.split(",");
		
		long userId = Long.parseLong(session(Application.USER_KEY_ID));
		List<Enroll> list = Enroll.page(1, 100, 0, userId).getScoreList();
		
		for(Enroll e : list) {
			Enroll.delete(e.id);
		}
		
		
		for(String id :ids) {
			if(!id.trim().equals("")){
			
			User u = User.findById(userId);
			Enroll e = new Enroll();
			e.user = u;
			e.game = new Game();
			e.game.id = Long.parseLong(id);
			Enroll.add(e);
			}
		}
		
		return GO_LIST;
	}
	
	
	@Transactional
	public static Result delete(long id ){
		
		Enroll.delete(id);
		
		return redirect(request().getHeader("referer"));
		
	}
	
	public static Result info(long id) {
		
		return ok();
	}
	
	
	
	
}











