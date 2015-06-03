// @SOURCE:D:/repositories/work/school/wll/sports/conf/routes
// @HASH:9ada2fd7c22ef9236aa0acaa42c81a82b26fa41c
// @DATE:Tue Jun 02 13:34:38 CST 2015


import play.core._
import play.core.Router._
import play.core.j._

import play.api.mvc._
import play.libs.F

import Router.queryString

object Routes extends Router.Routes {

private var _prefix = "/"

def setPrefix(prefix: String) {
  _prefix = prefix  
  List[(String,Routes)]().foreach {
    case (p, router) => router.setPrefix(prefix + (if(prefix.endsWith("/")) "" else "/") + p)
  }
}

def prefix = _prefix

lazy val defaultPrefix = { if(Routes.prefix.endsWith("/")) "" else "/" } 


// @LINE:6
private[this] lazy val controllers_Application_index0 = Route("GET", PathPattern(List(StaticPart(Routes.prefix))))
        

// @LINE:7
private[this] lazy val controllers_Application_login1 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("login"))))
        

// @LINE:8
private[this] lazy val controllers_Application_authenticate2 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("authenticate"))))
        

// @LINE:9
private[this] lazy val controllers_Application_logout3 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("logout"))))
        

// @LINE:10
private[this] lazy val controllers_Application_signUp4 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("signup"))))
        

// @LINE:11
private[this] lazy val controllers_Application_signUpSave5 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("save"))))
        

// @LINE:15
private[this] lazy val controllers_UserAction_list6 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("listUser"))))
        

// @LINE:16
private[this] lazy val controllers_ProjectAction_list7 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("listproject"))))
        

// @LINE:17
private[this] lazy val controllers_GameAction_list8 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("listgame"))))
        

// @LINE:21
private[this] lazy val controllers_Assets_at9 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("assets/"),DynamicPart("file", """.+"""))))
        

// @LINE:25
private[this] lazy val controllers_ProjectAction_create10 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("project/add"))))
        

// @LINE:26
private[this] lazy val controllers_ProjectAction_save11 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("project/save"))))
        

// @LINE:27
private[this] lazy val controllers_ProjectAction_edit12 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("project/edit/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:28
private[this] lazy val controllers_ProjectAction_update13 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("project/update/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:29
private[this] lazy val controllers_ProjectAction_delete14 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("project/delete/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:30
private[this] lazy val controllers_ProjectAction_info15 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("project/info/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:33
private[this] lazy val controllers_GameAction_create16 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("game/add"))))
        

// @LINE:34
private[this] lazy val controllers_GameAction_save17 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("game/save"))))
        

// @LINE:35
private[this] lazy val controllers_GameAction_edit18 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("game/edit/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:36
private[this] lazy val controllers_GameAction_update19 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("game/update/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:37
private[this] lazy val controllers_GameAction_delete20 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("game/delete/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:38
private[this] lazy val controllers_GameAction_info21 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("game/info/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:44
private[this] lazy val controllers_UserAction_create22 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("user/create"))))
        

// @LINE:45
private[this] lazy val controllers_UserAction_save23 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("user/save"))))
        

// @LINE:46
private[this] lazy val controllers_UserAction_edit24 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("user/edit/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:47
private[this] lazy val controllers_UserAction_update25 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("user/update/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:48
private[this] lazy val controllers_UserAction_delete26 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("user/delete/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:54
private[this] lazy val controllers_json_ServerApi_downloadApp27 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("download/"),DynamicPart("filename", """[^/]+"""))))
        

// @LINE:57
private[this] lazy val controllers_EnrollAction_create28 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("enroll/create"))))
        

// @LINE:58
private[this] lazy val controllers_EnrollAction_save29 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("enroll/save"))))
        

// @LINE:59
private[this] lazy val controllers_EnrollAction_edit30 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("enroll/edit"))))
        

// @LINE:60
private[this] lazy val controllers_EnrollAction_update31 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("enroll/update"))))
        

// @LINE:61
private[this] lazy val controllers_EnrollAction_list32 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("listenroll"))))
        

// @LINE:62
private[this] lazy val controllers_EnrollAction_listScore33 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("listScore"))))
        

// @LINE:63
private[this] lazy val controllers_EnrollAction_updateScore34 = Route("POST", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("score"))))
        

// @LINE:64
private[this] lazy val controllers_EnrollAction_delete35 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("enroll/delete/"),DynamicPart("id", """[^/]+"""))))
        

// @LINE:65
private[this] lazy val controllers_EnrollAction_listScoreQuickSearch36 = Route("GET", PathPattern(List(StaticPart(Routes.prefix),StaticPart(Routes.defaultPrefix),StaticPart("scorequicksearch"))))
        
def documentation = List(("""GET""", prefix,"""controllers.Application.index()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """login""","""controllers.Application.login()"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """authenticate""","""controllers.Application.authenticate()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """logout""","""controllers.Application.logout()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """signup""","""controllers.Application.signUp()"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """save""","""controllers.Application.signUpSave()"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """listUser""","""controllers.UserAction.list(p:Int ?= 1, s:String ?= "uploadTime", o:String ?= "desc", f:String ?= "")"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """listproject""","""controllers.ProjectAction.list(p:Int ?= 1, s:String ?= "updateTime", o:String ?= "desc", f:String ?= "")"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """listgame""","""controllers.GameAction.list(p:Int ?= 1, s:String ?= "updateTime", o:String ?= "desc", f:String ?= "")"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """assets/$file<.+>""","""controllers.Assets.at(path:String = "/public", file:String)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """project/add""","""controllers.ProjectAction.create"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """project/save""","""controllers.ProjectAction.save"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """project/edit/$id<[^/]+>""","""controllers.ProjectAction.edit(id:Long)"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """project/update/$id<[^/]+>""","""controllers.ProjectAction.update(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """project/delete/$id<[^/]+>""","""controllers.ProjectAction.delete(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """project/info/$id<[^/]+>""","""controllers.ProjectAction.info(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """game/add""","""controllers.GameAction.create"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """game/save""","""controllers.GameAction.save"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """game/edit/$id<[^/]+>""","""controllers.GameAction.edit(id:Long)"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """game/update/$id<[^/]+>""","""controllers.GameAction.update(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """game/delete/$id<[^/]+>""","""controllers.GameAction.delete(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """game/info/$id<[^/]+>""","""controllers.GameAction.info(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """user/create""","""controllers.UserAction.create"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """user/save""","""controllers.UserAction.save"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """user/edit/$id<[^/]+>""","""controllers.UserAction.edit(id:Long)"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """user/update/$id<[^/]+>""","""controllers.UserAction.update(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """user/delete/$id<[^/]+>""","""controllers.UserAction.delete(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """download/$filename<[^/]+>""","""controllers.json.ServerApi.downloadApp(filename:String)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """enroll/create""","""controllers.EnrollAction.create"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """enroll/save""","""controllers.EnrollAction.save"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """enroll/edit""","""controllers.EnrollAction.edit"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """enroll/update""","""controllers.EnrollAction.update"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """listenroll""","""controllers.EnrollAction.list(p:Int ?= 1, g:Int ?= 0, u:Int ?= 0)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """listScore""","""controllers.EnrollAction.listScore(p:Int ?= 1, g:Int ?= 0, u:Int ?= 0)"""),("""POST""", prefix + (if(prefix.endsWith("/")) "" else "/") + """score""","""controllers.EnrollAction.updateScore"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """enroll/delete/$id<[^/]+>""","""controllers.EnrollAction.delete(id:Long)"""),("""GET""", prefix + (if(prefix.endsWith("/")) "" else "/") + """scorequicksearch""","""controllers.EnrollAction.listScoreQuickSearch(p:Int ?= 1, g:Int ?= 0)""")).foldLeft(List.empty[(String,String,String)]) { (s,e) => e match {
  case r @ (_,_,_) => s :+ r.asInstanceOf[(String,String,String)]
  case l => s ++ l.asInstanceOf[List[(String,String,String)]] 
}}
       
    
def routes:PartialFunction[RequestHeader,Handler] = {        

// @LINE:6
case controllers_Application_index0(params) => {
   call { 
        invokeHandler(controllers.Application.index(), HandlerDef(this, "controllers.Application", "index", Nil,"GET", """ Home page""", Routes.prefix + """"""))
   }
}
        

// @LINE:7
case controllers_Application_login1(params) => {
   call { 
        invokeHandler(controllers.Application.login(), HandlerDef(this, "controllers.Application", "login", Nil,"GET", """""", Routes.prefix + """login"""))
   }
}
        

// @LINE:8
case controllers_Application_authenticate2(params) => {
   call { 
        invokeHandler(controllers.Application.authenticate(), HandlerDef(this, "controllers.Application", "authenticate", Nil,"POST", """""", Routes.prefix + """authenticate"""))
   }
}
        

// @LINE:9
case controllers_Application_logout3(params) => {
   call { 
        invokeHandler(controllers.Application.logout(), HandlerDef(this, "controllers.Application", "logout", Nil,"GET", """""", Routes.prefix + """logout"""))
   }
}
        

// @LINE:10
case controllers_Application_signUp4(params) => {
   call { 
        invokeHandler(controllers.Application.signUp(), HandlerDef(this, "controllers.Application", "signUp", Nil,"GET", """""", Routes.prefix + """signup"""))
   }
}
        

// @LINE:11
case controllers_Application_signUpSave5(params) => {
   call { 
        invokeHandler(controllers.Application.signUpSave(), HandlerDef(this, "controllers.Application", "signUpSave", Nil,"POST", """""", Routes.prefix + """save"""))
   }
}
        

// @LINE:15
case controllers_UserAction_list6(params) => {
   call(params.fromQuery[Int]("p", Some(1)), params.fromQuery[String]("s", Some("uploadTime")), params.fromQuery[String]("o", Some("desc")), params.fromQuery[String]("f", Some(""))) { (p, s, o, f) =>
        invokeHandler(controllers.UserAction.list(p, s, o, f), HandlerDef(this, "controllers.UserAction", "list", Seq(classOf[Int], classOf[String], classOf[String], classOf[String]),"GET", """admin""", Routes.prefix + """listUser"""))
   }
}
        

// @LINE:16
case controllers_ProjectAction_list7(params) => {
   call(params.fromQuery[Int]("p", Some(1)), params.fromQuery[String]("s", Some("updateTime")), params.fromQuery[String]("o", Some("desc")), params.fromQuery[String]("f", Some(""))) { (p, s, o, f) =>
        invokeHandler(controllers.ProjectAction.list(p, s, o, f), HandlerDef(this, "controllers.ProjectAction", "list", Seq(classOf[Int], classOf[String], classOf[String], classOf[String]),"GET", """""", Routes.prefix + """listproject"""))
   }
}
        

// @LINE:17
case controllers_GameAction_list8(params) => {
   call(params.fromQuery[Int]("p", Some(1)), params.fromQuery[String]("s", Some("updateTime")), params.fromQuery[String]("o", Some("desc")), params.fromQuery[String]("f", Some(""))) { (p, s, o, f) =>
        invokeHandler(controllers.GameAction.list(p, s, o, f), HandlerDef(this, "controllers.GameAction", "list", Seq(classOf[Int], classOf[String], classOf[String], classOf[String]),"GET", """""", Routes.prefix + """listgame"""))
   }
}
        

// @LINE:21
case controllers_Assets_at9(params) => {
   call(Param[String]("path", Right("/public")), params.fromPath[String]("file", None)) { (path, file) =>
        invokeHandler(controllers.Assets.at(path, file), HandlerDef(this, "controllers.Assets", "at", Seq(classOf[String], classOf[String]),"GET", """ Map static resources from the /public folder to the /assets URL path""", Routes.prefix + """assets/$file<.+>"""))
   }
}
        

// @LINE:25
case controllers_ProjectAction_create10(params) => {
   call { 
        invokeHandler(controllers.ProjectAction.create, HandlerDef(this, "controllers.ProjectAction", "create", Nil,"GET", """Project""", Routes.prefix + """project/add"""))
   }
}
        

// @LINE:26
case controllers_ProjectAction_save11(params) => {
   call { 
        invokeHandler(controllers.ProjectAction.save, HandlerDef(this, "controllers.ProjectAction", "save", Nil,"POST", """""", Routes.prefix + """project/save"""))
   }
}
        

// @LINE:27
case controllers_ProjectAction_edit12(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.ProjectAction.edit(id), HandlerDef(this, "controllers.ProjectAction", "edit", Seq(classOf[Long]),"GET", """""", Routes.prefix + """project/edit/$id<[^/]+>"""))
   }
}
        

// @LINE:28
case controllers_ProjectAction_update13(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.ProjectAction.update(id), HandlerDef(this, "controllers.ProjectAction", "update", Seq(classOf[Long]),"POST", """""", Routes.prefix + """project/update/$id<[^/]+>"""))
   }
}
        

// @LINE:29
case controllers_ProjectAction_delete14(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.ProjectAction.delete(id), HandlerDef(this, "controllers.ProjectAction", "delete", Seq(classOf[Long]),"GET", """""", Routes.prefix + """project/delete/$id<[^/]+>"""))
   }
}
        

// @LINE:30
case controllers_ProjectAction_info15(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.ProjectAction.info(id), HandlerDef(this, "controllers.ProjectAction", "info", Seq(classOf[Long]),"GET", """""", Routes.prefix + """project/info/$id<[^/]+>"""))
   }
}
        

// @LINE:33
case controllers_GameAction_create16(params) => {
   call { 
        invokeHandler(controllers.GameAction.create, HandlerDef(this, "controllers.GameAction", "create", Nil,"GET", """Game""", Routes.prefix + """game/add"""))
   }
}
        

// @LINE:34
case controllers_GameAction_save17(params) => {
   call { 
        invokeHandler(controllers.GameAction.save, HandlerDef(this, "controllers.GameAction", "save", Nil,"POST", """""", Routes.prefix + """game/save"""))
   }
}
        

// @LINE:35
case controllers_GameAction_edit18(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.GameAction.edit(id), HandlerDef(this, "controllers.GameAction", "edit", Seq(classOf[Long]),"GET", """""", Routes.prefix + """game/edit/$id<[^/]+>"""))
   }
}
        

// @LINE:36
case controllers_GameAction_update19(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.GameAction.update(id), HandlerDef(this, "controllers.GameAction", "update", Seq(classOf[Long]),"POST", """""", Routes.prefix + """game/update/$id<[^/]+>"""))
   }
}
        

// @LINE:37
case controllers_GameAction_delete20(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.GameAction.delete(id), HandlerDef(this, "controllers.GameAction", "delete", Seq(classOf[Long]),"GET", """""", Routes.prefix + """game/delete/$id<[^/]+>"""))
   }
}
        

// @LINE:38
case controllers_GameAction_info21(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.GameAction.info(id), HandlerDef(this, "controllers.GameAction", "info", Seq(classOf[Long]),"GET", """""", Routes.prefix + """game/info/$id<[^/]+>"""))
   }
}
        

// @LINE:44
case controllers_UserAction_create22(params) => {
   call { 
        invokeHandler(controllers.UserAction.create, HandlerDef(this, "controllers.UserAction", "create", Nil,"GET", """user""", Routes.prefix + """user/create"""))
   }
}
        

// @LINE:45
case controllers_UserAction_save23(params) => {
   call { 
        invokeHandler(controllers.UserAction.save, HandlerDef(this, "controllers.UserAction", "save", Nil,"POST", """""", Routes.prefix + """user/save"""))
   }
}
        

// @LINE:46
case controllers_UserAction_edit24(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.UserAction.edit(id), HandlerDef(this, "controllers.UserAction", "edit", Seq(classOf[Long]),"GET", """""", Routes.prefix + """user/edit/$id<[^/]+>"""))
   }
}
        

// @LINE:47
case controllers_UserAction_update25(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.UserAction.update(id), HandlerDef(this, "controllers.UserAction", "update", Seq(classOf[Long]),"POST", """""", Routes.prefix + """user/update/$id<[^/]+>"""))
   }
}
        

// @LINE:48
case controllers_UserAction_delete26(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.UserAction.delete(id), HandlerDef(this, "controllers.UserAction", "delete", Seq(classOf[Long]),"GET", """""", Routes.prefix + """user/delete/$id<[^/]+>"""))
   }
}
        

// @LINE:54
case controllers_json_ServerApi_downloadApp27(params) => {
   call(params.fromPath[String]("filename", None)) { (filename) =>
        invokeHandler(controllers.json.ServerApi.downloadApp(filename), HandlerDef(this, "controllers.json.ServerApi", "downloadApp", Seq(classOf[String]),"GET", """appliaction service""", Routes.prefix + """download/$filename<[^/]+>"""))
   }
}
        

// @LINE:57
case controllers_EnrollAction_create28(params) => {
   call { 
        invokeHandler(controllers.EnrollAction.create, HandlerDef(this, "controllers.EnrollAction", "create", Nil,"GET", """Enroll""", Routes.prefix + """enroll/create"""))
   }
}
        

// @LINE:58
case controllers_EnrollAction_save29(params) => {
   call { 
        invokeHandler(controllers.EnrollAction.save, HandlerDef(this, "controllers.EnrollAction", "save", Nil,"POST", """""", Routes.prefix + """enroll/save"""))
   }
}
        

// @LINE:59
case controllers_EnrollAction_edit30(params) => {
   call { 
        invokeHandler(controllers.EnrollAction.edit, HandlerDef(this, "controllers.EnrollAction", "edit", Nil,"GET", """""", Routes.prefix + """enroll/edit"""))
   }
}
        

// @LINE:60
case controllers_EnrollAction_update31(params) => {
   call { 
        invokeHandler(controllers.EnrollAction.update, HandlerDef(this, "controllers.EnrollAction", "update", Nil,"POST", """""", Routes.prefix + """enroll/update"""))
   }
}
        

// @LINE:61
case controllers_EnrollAction_list32(params) => {
   call(params.fromQuery[Int]("p", Some(1)), params.fromQuery[Int]("g", Some(0)), params.fromQuery[Int]("u", Some(0))) { (p, g, u) =>
        invokeHandler(controllers.EnrollAction.list(p, g, u), HandlerDef(this, "controllers.EnrollAction", "list", Seq(classOf[Int], classOf[Int], classOf[Int]),"GET", """""", Routes.prefix + """listenroll"""))
   }
}
        

// @LINE:62
case controllers_EnrollAction_listScore33(params) => {
   call(params.fromQuery[Int]("p", Some(1)), params.fromQuery[Int]("g", Some(0)), params.fromQuery[Int]("u", Some(0))) { (p, g, u) =>
        invokeHandler(controllers.EnrollAction.listScore(p, g, u), HandlerDef(this, "controllers.EnrollAction", "listScore", Seq(classOf[Int], classOf[Int], classOf[Int]),"GET", """""", Routes.prefix + """listScore"""))
   }
}
        

// @LINE:63
case controllers_EnrollAction_updateScore34(params) => {
   call { 
        invokeHandler(controllers.EnrollAction.updateScore, HandlerDef(this, "controllers.EnrollAction", "updateScore", Nil,"POST", """""", Routes.prefix + """score"""))
   }
}
        

// @LINE:64
case controllers_EnrollAction_delete35(params) => {
   call(params.fromPath[Long]("id", None)) { (id) =>
        invokeHandler(controllers.EnrollAction.delete(id), HandlerDef(this, "controllers.EnrollAction", "delete", Seq(classOf[Long]),"GET", """""", Routes.prefix + """enroll/delete/$id<[^/]+>"""))
   }
}
        

// @LINE:65
case controllers_EnrollAction_listScoreQuickSearch36(params) => {
   call(params.fromQuery[Int]("p", Some(1)), params.fromQuery[Int]("g", Some(0))) { (p, g) =>
        invokeHandler(controllers.EnrollAction.listScoreQuickSearch(p, g), HandlerDef(this, "controllers.EnrollAction", "listScoreQuickSearch", Seq(classOf[Int], classOf[Int]),"GET", """""", Routes.prefix + """scorequicksearch"""))
   }
}
        
}
    
}
        