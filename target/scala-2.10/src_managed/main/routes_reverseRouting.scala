// @SOURCE:D:/repositories/work/school/wll/sports/conf/routes
// @HASH:9ada2fd7c22ef9236aa0acaa42c81a82b26fa41c
// @DATE:Tue Jun 02 13:34:38 CST 2015

import Routes.{prefix => _prefix, defaultPrefix => _defaultPrefix}
import play.core._
import play.core.Router._
import play.core.j._

import play.api.mvc._
import play.libs.F

import Router.queryString


// @LINE:54
package controllers.json {

// @LINE:54
class ReverseServerApi {
    

// @LINE:54
def downloadApp(filename:String): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "download/" + implicitly[PathBindable[String]].unbind("filename", filename))
}
                                                
    
}
                          
}
                  

// @LINE:65
// @LINE:64
// @LINE:63
// @LINE:62
// @LINE:61
// @LINE:60
// @LINE:59
// @LINE:58
// @LINE:57
// @LINE:48
// @LINE:47
// @LINE:46
// @LINE:45
// @LINE:44
// @LINE:38
// @LINE:37
// @LINE:36
// @LINE:35
// @LINE:34
// @LINE:33
// @LINE:30
// @LINE:29
// @LINE:28
// @LINE:27
// @LINE:26
// @LINE:25
// @LINE:21
// @LINE:17
// @LINE:16
// @LINE:15
// @LINE:11
// @LINE:10
// @LINE:9
// @LINE:8
// @LINE:7
// @LINE:6
package controllers {

// @LINE:21
class ReverseAssets {
    

// @LINE:21
def at(file:String): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "assets/" + implicitly[PathBindable[String]].unbind("file", file))
}
                                                
    
}
                          

// @LINE:65
// @LINE:64
// @LINE:63
// @LINE:62
// @LINE:61
// @LINE:60
// @LINE:59
// @LINE:58
// @LINE:57
class ReverseEnrollAction {
    

// @LINE:60
def update(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "enroll/update")
}
                                                

// @LINE:59
def edit(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "enroll/edit")
}
                                                

// @LINE:62
def listScore(p:Int = 1, g:Int = 0, u:Int = 0): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "listScore" + queryString(List(if(p == 1) None else Some(implicitly[QueryStringBindable[Int]].unbind("p", p)), if(g == 0) None else Some(implicitly[QueryStringBindable[Int]].unbind("g", g)), if(u == 0) None else Some(implicitly[QueryStringBindable[Int]].unbind("u", u)))))
}
                                                

// @LINE:64
def delete(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "enroll/delete/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:57
def create(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "enroll/create")
}
                                                

// @LINE:61
def list(p:Int = 1, g:Int = 0, u:Int = 0): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "listenroll" + queryString(List(if(p == 1) None else Some(implicitly[QueryStringBindable[Int]].unbind("p", p)), if(g == 0) None else Some(implicitly[QueryStringBindable[Int]].unbind("g", g)), if(u == 0) None else Some(implicitly[QueryStringBindable[Int]].unbind("u", u)))))
}
                                                

// @LINE:65
def listScoreQuickSearch(p:Int = 1, g:Int = 0): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "scorequicksearch" + queryString(List(if(p == 1) None else Some(implicitly[QueryStringBindable[Int]].unbind("p", p)), if(g == 0) None else Some(implicitly[QueryStringBindable[Int]].unbind("g", g)))))
}
                                                

// @LINE:58
def save(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "enroll/save")
}
                                                

// @LINE:63
def updateScore(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "score")
}
                                                
    
}
                          

// @LINE:30
// @LINE:29
// @LINE:28
// @LINE:27
// @LINE:26
// @LINE:25
// @LINE:16
class ReverseProjectAction {
    

// @LINE:29
def delete(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "project/delete/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:25
def create(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "project/add")
}
                                                

// @LINE:16
def list(p:Int = 1, s:String = "updateTime", o:String = "desc", f:String = ""): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "listproject" + queryString(List(if(p == 1) None else Some(implicitly[QueryStringBindable[Int]].unbind("p", p)), if(s == "updateTime") None else Some(implicitly[QueryStringBindable[String]].unbind("s", s)), if(o == "desc") None else Some(implicitly[QueryStringBindable[String]].unbind("o", o)), if(f == "") None else Some(implicitly[QueryStringBindable[String]].unbind("f", f)))))
}
                                                

// @LINE:28
def update(id:Long): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "project/update/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:26
def save(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "project/save")
}
                                                

// @LINE:27
def edit(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "project/edit/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:30
def info(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "project/info/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                
    
}
                          

// @LINE:11
// @LINE:10
// @LINE:9
// @LINE:8
// @LINE:7
// @LINE:6
class ReverseApplication {
    

// @LINE:7
def login(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "login")
}
                                                

// @LINE:10
def signUp(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "signup")
}
                                                

// @LINE:9
def logout(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "logout")
}
                                                

// @LINE:6
def index(): Call = {
   Call("GET", _prefix)
}
                                                

// @LINE:11
def signUpSave(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "save")
}
                                                

// @LINE:8
def authenticate(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "authenticate")
}
                                                
    
}
                          

// @LINE:38
// @LINE:37
// @LINE:36
// @LINE:35
// @LINE:34
// @LINE:33
// @LINE:17
class ReverseGameAction {
    

// @LINE:37
def delete(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "game/delete/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:33
def create(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "game/add")
}
                                                

// @LINE:17
def list(p:Int = 1, s:String = "updateTime", o:String = "desc", f:String = ""): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "listgame" + queryString(List(if(p == 1) None else Some(implicitly[QueryStringBindable[Int]].unbind("p", p)), if(s == "updateTime") None else Some(implicitly[QueryStringBindable[String]].unbind("s", s)), if(o == "desc") None else Some(implicitly[QueryStringBindable[String]].unbind("o", o)), if(f == "") None else Some(implicitly[QueryStringBindable[String]].unbind("f", f)))))
}
                                                

// @LINE:36
def update(id:Long): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "game/update/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:34
def save(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "game/save")
}
                                                

// @LINE:35
def edit(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "game/edit/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:38
def info(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "game/info/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                
    
}
                          

// @LINE:48
// @LINE:47
// @LINE:46
// @LINE:45
// @LINE:44
// @LINE:15
class ReverseUserAction {
    

// @LINE:48
def delete(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "user/delete/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:44
def create(): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "user/create")
}
                                                

// @LINE:15
def list(p:Int = 1, s:String = "uploadTime", o:String = "desc", f:String = ""): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "listUser" + queryString(List(if(p == 1) None else Some(implicitly[QueryStringBindable[Int]].unbind("p", p)), if(s == "uploadTime") None else Some(implicitly[QueryStringBindable[String]].unbind("s", s)), if(o == "desc") None else Some(implicitly[QueryStringBindable[String]].unbind("o", o)), if(f == "") None else Some(implicitly[QueryStringBindable[String]].unbind("f", f)))))
}
                                                

// @LINE:47
def update(id:Long): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "user/update/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                

// @LINE:45
def save(): Call = {
   Call("POST", _prefix + { _defaultPrefix } + "user/save")
}
                                                

// @LINE:46
def edit(id:Long): Call = {
   Call("GET", _prefix + { _defaultPrefix } + "user/edit/" + implicitly[PathBindable[Long]].unbind("id", id))
}
                                                
    
}
                          
}
                  


// @LINE:54
package controllers.json.javascript {

// @LINE:54
class ReverseServerApi {
    

// @LINE:54
def downloadApp : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.json.ServerApi.downloadApp",
   """
      function(filename) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "download/" + (""" + implicitly[PathBindable[String]].javascriptUnbind + """)("filename", filename)})
      }
   """
)
                        
    
}
              
}
        

// @LINE:65
// @LINE:64
// @LINE:63
// @LINE:62
// @LINE:61
// @LINE:60
// @LINE:59
// @LINE:58
// @LINE:57
// @LINE:48
// @LINE:47
// @LINE:46
// @LINE:45
// @LINE:44
// @LINE:38
// @LINE:37
// @LINE:36
// @LINE:35
// @LINE:34
// @LINE:33
// @LINE:30
// @LINE:29
// @LINE:28
// @LINE:27
// @LINE:26
// @LINE:25
// @LINE:21
// @LINE:17
// @LINE:16
// @LINE:15
// @LINE:11
// @LINE:10
// @LINE:9
// @LINE:8
// @LINE:7
// @LINE:6
package controllers.javascript {

// @LINE:21
class ReverseAssets {
    

// @LINE:21
def at : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Assets.at",
   """
      function(file) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "assets/" + (""" + implicitly[PathBindable[String]].javascriptUnbind + """)("file", file)})
      }
   """
)
                        
    
}
              

// @LINE:65
// @LINE:64
// @LINE:63
// @LINE:62
// @LINE:61
// @LINE:60
// @LINE:59
// @LINE:58
// @LINE:57
class ReverseEnrollAction {
    

// @LINE:60
def update : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.update",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "enroll/update"})
      }
   """
)
                        

// @LINE:59
def edit : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.edit",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "enroll/edit"})
      }
   """
)
                        

// @LINE:62
def listScore : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.listScore",
   """
      function(p,g,u) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "listScore" + _qS([(p == null ? """ +  implicitly[JavascriptLitteral[Int]].to(1) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("p", p)), (g == null ? """ +  implicitly[JavascriptLitteral[Int]].to(0) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("g", g)), (u == null ? """ +  implicitly[JavascriptLitteral[Int]].to(0) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("u", u))])})
      }
   """
)
                        

// @LINE:64
def delete : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.delete",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "enroll/delete/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:57
def create : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.create",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "enroll/create"})
      }
   """
)
                        

// @LINE:61
def list : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.list",
   """
      function(p,g,u) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "listenroll" + _qS([(p == null ? """ +  implicitly[JavascriptLitteral[Int]].to(1) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("p", p)), (g == null ? """ +  implicitly[JavascriptLitteral[Int]].to(0) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("g", g)), (u == null ? """ +  implicitly[JavascriptLitteral[Int]].to(0) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("u", u))])})
      }
   """
)
                        

// @LINE:65
def listScoreQuickSearch : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.listScoreQuickSearch",
   """
      function(p,g) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "scorequicksearch" + _qS([(p == null ? """ +  implicitly[JavascriptLitteral[Int]].to(1) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("p", p)), (g == null ? """ +  implicitly[JavascriptLitteral[Int]].to(0) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("g", g))])})
      }
   """
)
                        

// @LINE:58
def save : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.save",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "enroll/save"})
      }
   """
)
                        

// @LINE:63
def updateScore : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.EnrollAction.updateScore",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "score"})
      }
   """
)
                        
    
}
              

// @LINE:30
// @LINE:29
// @LINE:28
// @LINE:27
// @LINE:26
// @LINE:25
// @LINE:16
class ReverseProjectAction {
    

// @LINE:29
def delete : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.delete",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "project/delete/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:25
def create : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.create",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "project/add"})
      }
   """
)
                        

// @LINE:16
def list : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.list",
   """
      function(p,s,o,f) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "listproject" + _qS([(p == null ? """ +  implicitly[JavascriptLitteral[Int]].to(1) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("p", p)), (s == null ? """ +  implicitly[JavascriptLitteral[String]].to("updateTime") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("s", s)), (o == null ? """ +  implicitly[JavascriptLitteral[String]].to("desc") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("o", o)), (f == null ? """ +  implicitly[JavascriptLitteral[String]].to("") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("f", f))])})
      }
   """
)
                        

// @LINE:28
def update : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.update",
   """
      function(id) {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "project/update/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:26
def save : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.save",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "project/save"})
      }
   """
)
                        

// @LINE:27
def edit : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.edit",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "project/edit/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:30
def info : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.ProjectAction.info",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "project/info/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        
    
}
              

// @LINE:11
// @LINE:10
// @LINE:9
// @LINE:8
// @LINE:7
// @LINE:6
class ReverseApplication {
    

// @LINE:7
def login : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Application.login",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "login"})
      }
   """
)
                        

// @LINE:10
def signUp : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Application.signUp",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "signup"})
      }
   """
)
                        

// @LINE:9
def logout : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Application.logout",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "logout"})
      }
   """
)
                        

// @LINE:6
def index : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Application.index",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + """"})
      }
   """
)
                        

// @LINE:11
def signUpSave : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Application.signUpSave",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "save"})
      }
   """
)
                        

// @LINE:8
def authenticate : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.Application.authenticate",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "authenticate"})
      }
   """
)
                        
    
}
              

// @LINE:38
// @LINE:37
// @LINE:36
// @LINE:35
// @LINE:34
// @LINE:33
// @LINE:17
class ReverseGameAction {
    

// @LINE:37
def delete : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.delete",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "game/delete/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:33
def create : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.create",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "game/add"})
      }
   """
)
                        

// @LINE:17
def list : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.list",
   """
      function(p,s,o,f) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "listgame" + _qS([(p == null ? """ +  implicitly[JavascriptLitteral[Int]].to(1) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("p", p)), (s == null ? """ +  implicitly[JavascriptLitteral[String]].to("updateTime") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("s", s)), (o == null ? """ +  implicitly[JavascriptLitteral[String]].to("desc") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("o", o)), (f == null ? """ +  implicitly[JavascriptLitteral[String]].to("") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("f", f))])})
      }
   """
)
                        

// @LINE:36
def update : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.update",
   """
      function(id) {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "game/update/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:34
def save : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.save",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "game/save"})
      }
   """
)
                        

// @LINE:35
def edit : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.edit",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "game/edit/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:38
def info : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.GameAction.info",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "game/info/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        
    
}
              

// @LINE:48
// @LINE:47
// @LINE:46
// @LINE:45
// @LINE:44
// @LINE:15
class ReverseUserAction {
    

// @LINE:48
def delete : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.UserAction.delete",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "user/delete/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:44
def create : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.UserAction.create",
   """
      function() {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "user/create"})
      }
   """
)
                        

// @LINE:15
def list : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.UserAction.list",
   """
      function(p,s,o,f) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "listUser" + _qS([(p == null ? """ +  implicitly[JavascriptLitteral[Int]].to(1) + """ : (""" + implicitly[QueryStringBindable[Int]].javascriptUnbind + """)("p", p)), (s == null ? """ +  implicitly[JavascriptLitteral[String]].to("uploadTime") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("s", s)), (o == null ? """ +  implicitly[JavascriptLitteral[String]].to("desc") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("o", o)), (f == null ? """ +  implicitly[JavascriptLitteral[String]].to("") + """ : (""" + implicitly[QueryStringBindable[String]].javascriptUnbind + """)("f", f))])})
      }
   """
)
                        

// @LINE:47
def update : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.UserAction.update",
   """
      function(id) {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "user/update/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        

// @LINE:45
def save : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.UserAction.save",
   """
      function() {
      return _wA({method:"POST", url:"""" + _prefix + { _defaultPrefix } + """" + "user/save"})
      }
   """
)
                        

// @LINE:46
def edit : JavascriptReverseRoute = JavascriptReverseRoute(
   "controllers.UserAction.edit",
   """
      function(id) {
      return _wA({method:"GET", url:"""" + _prefix + { _defaultPrefix } + """" + "user/edit/" + (""" + implicitly[PathBindable[Long]].javascriptUnbind + """)("id", id)})
      }
   """
)
                        
    
}
              
}
        


// @LINE:54
package controllers.json.ref {

// @LINE:54
class ReverseServerApi {
    

// @LINE:54
def downloadApp(filename:String): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.json.ServerApi.downloadApp(filename), HandlerDef(this, "controllers.json.ServerApi", "downloadApp", Seq(classOf[String]), "GET", """appliaction service""", _prefix + """download/$filename<[^/]+>""")
)
                      
    
}
                          
}
                  

// @LINE:65
// @LINE:64
// @LINE:63
// @LINE:62
// @LINE:61
// @LINE:60
// @LINE:59
// @LINE:58
// @LINE:57
// @LINE:48
// @LINE:47
// @LINE:46
// @LINE:45
// @LINE:44
// @LINE:38
// @LINE:37
// @LINE:36
// @LINE:35
// @LINE:34
// @LINE:33
// @LINE:30
// @LINE:29
// @LINE:28
// @LINE:27
// @LINE:26
// @LINE:25
// @LINE:21
// @LINE:17
// @LINE:16
// @LINE:15
// @LINE:11
// @LINE:10
// @LINE:9
// @LINE:8
// @LINE:7
// @LINE:6
package controllers.ref {

// @LINE:21
class ReverseAssets {
    

// @LINE:21
def at(path:String, file:String): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Assets.at(path, file), HandlerDef(this, "controllers.Assets", "at", Seq(classOf[String], classOf[String]), "GET", """ Map static resources from the /public folder to the /assets URL path""", _prefix + """assets/$file<.+>""")
)
                      
    
}
                          

// @LINE:65
// @LINE:64
// @LINE:63
// @LINE:62
// @LINE:61
// @LINE:60
// @LINE:59
// @LINE:58
// @LINE:57
class ReverseEnrollAction {
    

// @LINE:60
def update(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.update(), HandlerDef(this, "controllers.EnrollAction", "update", Seq(), "POST", """""", _prefix + """enroll/update""")
)
                      

// @LINE:59
def edit(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.edit(), HandlerDef(this, "controllers.EnrollAction", "edit", Seq(), "GET", """""", _prefix + """enroll/edit""")
)
                      

// @LINE:62
def listScore(p:Int, g:Int, u:Int): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.listScore(p, g, u), HandlerDef(this, "controllers.EnrollAction", "listScore", Seq(classOf[Int], classOf[Int], classOf[Int]), "GET", """""", _prefix + """listScore""")
)
                      

// @LINE:64
def delete(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.delete(id), HandlerDef(this, "controllers.EnrollAction", "delete", Seq(classOf[Long]), "GET", """""", _prefix + """enroll/delete/$id<[^/]+>""")
)
                      

// @LINE:57
def create(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.create(), HandlerDef(this, "controllers.EnrollAction", "create", Seq(), "GET", """Enroll""", _prefix + """enroll/create""")
)
                      

// @LINE:61
def list(p:Int, g:Int, u:Int): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.list(p, g, u), HandlerDef(this, "controllers.EnrollAction", "list", Seq(classOf[Int], classOf[Int], classOf[Int]), "GET", """""", _prefix + """listenroll""")
)
                      

// @LINE:65
def listScoreQuickSearch(p:Int, g:Int): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.listScoreQuickSearch(p, g), HandlerDef(this, "controllers.EnrollAction", "listScoreQuickSearch", Seq(classOf[Int], classOf[Int]), "GET", """""", _prefix + """scorequicksearch""")
)
                      

// @LINE:58
def save(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.save(), HandlerDef(this, "controllers.EnrollAction", "save", Seq(), "POST", """""", _prefix + """enroll/save""")
)
                      

// @LINE:63
def updateScore(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.EnrollAction.updateScore(), HandlerDef(this, "controllers.EnrollAction", "updateScore", Seq(), "POST", """""", _prefix + """score""")
)
                      
    
}
                          

// @LINE:30
// @LINE:29
// @LINE:28
// @LINE:27
// @LINE:26
// @LINE:25
// @LINE:16
class ReverseProjectAction {
    

// @LINE:29
def delete(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.delete(id), HandlerDef(this, "controllers.ProjectAction", "delete", Seq(classOf[Long]), "GET", """""", _prefix + """project/delete/$id<[^/]+>""")
)
                      

// @LINE:25
def create(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.create(), HandlerDef(this, "controllers.ProjectAction", "create", Seq(), "GET", """Project""", _prefix + """project/add""")
)
                      

// @LINE:16
def list(p:Int, s:String, o:String, f:String): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.list(p, s, o, f), HandlerDef(this, "controllers.ProjectAction", "list", Seq(classOf[Int], classOf[String], classOf[String], classOf[String]), "GET", """""", _prefix + """listproject""")
)
                      

// @LINE:28
def update(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.update(id), HandlerDef(this, "controllers.ProjectAction", "update", Seq(classOf[Long]), "POST", """""", _prefix + """project/update/$id<[^/]+>""")
)
                      

// @LINE:26
def save(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.save(), HandlerDef(this, "controllers.ProjectAction", "save", Seq(), "POST", """""", _prefix + """project/save""")
)
                      

// @LINE:27
def edit(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.edit(id), HandlerDef(this, "controllers.ProjectAction", "edit", Seq(classOf[Long]), "GET", """""", _prefix + """project/edit/$id<[^/]+>""")
)
                      

// @LINE:30
def info(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.ProjectAction.info(id), HandlerDef(this, "controllers.ProjectAction", "info", Seq(classOf[Long]), "GET", """""", _prefix + """project/info/$id<[^/]+>""")
)
                      
    
}
                          

// @LINE:11
// @LINE:10
// @LINE:9
// @LINE:8
// @LINE:7
// @LINE:6
class ReverseApplication {
    

// @LINE:7
def login(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Application.login(), HandlerDef(this, "controllers.Application", "login", Seq(), "GET", """""", _prefix + """login""")
)
                      

// @LINE:10
def signUp(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Application.signUp(), HandlerDef(this, "controllers.Application", "signUp", Seq(), "GET", """""", _prefix + """signup""")
)
                      

// @LINE:9
def logout(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Application.logout(), HandlerDef(this, "controllers.Application", "logout", Seq(), "GET", """""", _prefix + """logout""")
)
                      

// @LINE:6
def index(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Application.index(), HandlerDef(this, "controllers.Application", "index", Seq(), "GET", """ Home page""", _prefix + """""")
)
                      

// @LINE:11
def signUpSave(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Application.signUpSave(), HandlerDef(this, "controllers.Application", "signUpSave", Seq(), "POST", """""", _prefix + """save""")
)
                      

// @LINE:8
def authenticate(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.Application.authenticate(), HandlerDef(this, "controllers.Application", "authenticate", Seq(), "POST", """""", _prefix + """authenticate""")
)
                      
    
}
                          

// @LINE:38
// @LINE:37
// @LINE:36
// @LINE:35
// @LINE:34
// @LINE:33
// @LINE:17
class ReverseGameAction {
    

// @LINE:37
def delete(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.delete(id), HandlerDef(this, "controllers.GameAction", "delete", Seq(classOf[Long]), "GET", """""", _prefix + """game/delete/$id<[^/]+>""")
)
                      

// @LINE:33
def create(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.create(), HandlerDef(this, "controllers.GameAction", "create", Seq(), "GET", """Game""", _prefix + """game/add""")
)
                      

// @LINE:17
def list(p:Int, s:String, o:String, f:String): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.list(p, s, o, f), HandlerDef(this, "controllers.GameAction", "list", Seq(classOf[Int], classOf[String], classOf[String], classOf[String]), "GET", """""", _prefix + """listgame""")
)
                      

// @LINE:36
def update(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.update(id), HandlerDef(this, "controllers.GameAction", "update", Seq(classOf[Long]), "POST", """""", _prefix + """game/update/$id<[^/]+>""")
)
                      

// @LINE:34
def save(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.save(), HandlerDef(this, "controllers.GameAction", "save", Seq(), "POST", """""", _prefix + """game/save""")
)
                      

// @LINE:35
def edit(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.edit(id), HandlerDef(this, "controllers.GameAction", "edit", Seq(classOf[Long]), "GET", """""", _prefix + """game/edit/$id<[^/]+>""")
)
                      

// @LINE:38
def info(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.GameAction.info(id), HandlerDef(this, "controllers.GameAction", "info", Seq(classOf[Long]), "GET", """""", _prefix + """game/info/$id<[^/]+>""")
)
                      
    
}
                          

// @LINE:48
// @LINE:47
// @LINE:46
// @LINE:45
// @LINE:44
// @LINE:15
class ReverseUserAction {
    

// @LINE:48
def delete(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.UserAction.delete(id), HandlerDef(this, "controllers.UserAction", "delete", Seq(classOf[Long]), "GET", """""", _prefix + """user/delete/$id<[^/]+>""")
)
                      

// @LINE:44
def create(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.UserAction.create(), HandlerDef(this, "controllers.UserAction", "create", Seq(), "GET", """user""", _prefix + """user/create""")
)
                      

// @LINE:15
def list(p:Int, s:String, o:String, f:String): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.UserAction.list(p, s, o, f), HandlerDef(this, "controllers.UserAction", "list", Seq(classOf[Int], classOf[String], classOf[String], classOf[String]), "GET", """admin""", _prefix + """listUser""")
)
                      

// @LINE:47
def update(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.UserAction.update(id), HandlerDef(this, "controllers.UserAction", "update", Seq(classOf[Long]), "POST", """""", _prefix + """user/update/$id<[^/]+>""")
)
                      

// @LINE:45
def save(): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.UserAction.save(), HandlerDef(this, "controllers.UserAction", "save", Seq(), "POST", """""", _prefix + """user/save""")
)
                      

// @LINE:46
def edit(id:Long): play.api.mvc.HandlerRef[_] = new play.api.mvc.HandlerRef(
   controllers.UserAction.edit(id), HandlerDef(this, "controllers.UserAction", "edit", Seq(classOf[Long]), "GET", """""", _prefix + """user/edit/$id<[^/]+>""")
)
                      
    
}
                          
}
                  
      