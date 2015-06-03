
package views.html

import play.templates._
import play.templates.TemplateMagic._

import play.api.templates._
import play.api.templates.PlayMagic._
import models._
import controllers._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.api.i18n._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._
import views.html._
/**/
object dynamicRole extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template2[String,Html,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(roles:String)(contents: Html):play.api.templates.Html = {
        _display_ {import controllers._

def /*5.2*/show/*5.6*/(role:String,content:Html) = {{
	var myRoleId = session().get(Application.ROLE_ID)
	var roleName = User.userGroup().get(myRoleId);
	if(roleName.equals(role)){
		content
	}
}};
Seq[Any](format.raw/*1.32*/("""
"""),format.raw/*3.1*/("""

"""),format.raw/*11.2*/("""

"""),_display_(Seq[Any](/*13.2*/show(roles,contents))))}
    }
    
    def render(roles:String,contents:Html): play.api.templates.Html = apply(roles)(contents)
    
    def f:((String) => (Html) => play.api.templates.Html) = (roles) => (contents) => apply(roles)(contents)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:41 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/dynamicRole.scala.html
                    HASH: 9a9d8bcb102e91255c4b0c372e94d574d580c78b
                    MATRIX: 734->1|846->61|857->65|1066->31|1094->56|1125->244|1165->249
                    LINES: 26->1|29->5|29->5|36->1|37->3|39->11|41->13
                    -- GENERATED --
                */
            