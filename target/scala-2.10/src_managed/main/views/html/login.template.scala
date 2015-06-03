
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
object login extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template2[Form[Application.Login],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(loginform: Form[Application.Login],lang: Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.49*/("""
"""),format.raw/*6.1*/("""
"""),_display_(Seq[Any](/*7.2*/main(Html("Login"), nav = "login", showBar = false,lang)/*7.58*/ {_display_(Seq[Any](format.raw/*7.60*/("""
	
	
	"""),_display_(Seq[Any](/*10.3*/form(action = routes.Application.authenticate(),'class -> "form-vertical",'enctype -> "multipart/form-data")/*10.111*/{_display_(Seq[Any](format.raw/*10.112*/("""
		<script type="text/javascript">
			function check_pn()"""),format.raw/*12.23*/("""{"""),format.raw/*12.24*/("""
				document.forms[0].submit();
			"""),format.raw/*14.4*/("""}"""),format.raw/*14.5*/("""
		</script>
		<div class="page-header">
                    <h1 style="text-align:center;">"""),_display_(Seq[Any](/*17.53*/Messages/*17.61*/.get(lang,"systitle"))),format.raw/*17.82*/("""</h1>
        </div>
		<div class="control-group" style="margin-top:40px;">
			<div class="controls" style="margin-left:25%;">
				"""),_display_(Seq[Any](/*21.6*/Messages/*21.14*/.get(lang,"name"))),format.raw/*21.31*/("""<input type="text" name="username" style="width:60%;background-position:5px -693px;background-repeat: no-repeat;padding:1px 11px 1px 36px;height:32px;" id="inputName" placeholder=""""),_display_(Seq[Any](/*21.212*/Messages/*21.220*/.get(lang,"name"))),format.raw/*21.237*/("""" value=""""),_display_(Seq[Any](/*21.247*/loginform("name")/*21.264*/.value)),format.raw/*21.270*/("""">
			</div>
		</div>
		<div class="control-group">
			<div class="controls" style="margin-left:25%;">
				"""),_display_(Seq[Any](/*26.6*/Messages/*26.14*/.get(lang,"pass"))),format.raw/*26.31*/("""<input type="password" name="password" style="width:60%;background-position:5px -734px;background-repeat: no-repeat;padding:1px 11px 1px 36px;height:32px;" id="inputPassword" placeholder=""""),_display_(Seq[Any](/*26.220*/Messages/*26.228*/.get(lang,"pass"))),format.raw/*26.245*/("""">
			</div>
			
		</div>
		<div class="control-group">
			<div class="controls" style="margin-left:34%;">
				<button type="button" onclick="check_pn()" class="login_button" style="background-color:#ec7500;width:100px;height:35px;">"""),_display_(Seq[Any](/*32.128*/Messages/*32.136*/.get(lang,"Sign_in"))),format.raw/*32.156*/("""</button>
				&nbsp;&nbsp;
				<button type="button" onclick="window.open('signup','_self')" class="regedit_button" style="background-color:#ec7500;width:100px;height:35px;">"""),_display_(Seq[Any](/*34.149*/Messages/*34.157*/.get(lang,"Sign_Up"))),format.raw/*34.177*/("""</button>
			</div>
		</div>
	""")))})),format.raw/*37.3*/("""
""")))})))}
    }
    
    def render(loginform:Form[Application.Login],lang:Lang): play.api.templates.Html = apply(loginform,lang)
    
    def f:((Form[Application.Login],Lang) => play.api.templates.Html) = (loginform,lang) => apply(loginform,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:42 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/login.scala.html
                    HASH: a0384b52e521157337022acafe4622ce4681d5da
                    MATRIX: 745->1|961->48|988->142|1024->144|1088->200|1127->202|1169->209|1287->317|1327->318|1412->375|1441->376|1504->412|1532->413|1661->506|1678->514|1721->535|1888->667|1905->675|1944->692|2162->873|2180->881|2220->898|2267->908|2294->925|2323->931|2466->1039|2483->1047|2522->1064|2748->1253|2766->1261|2806->1278|3077->1512|3095->1520|3138->1540|3350->1715|3368->1723|3411->1743|3473->1774
                    LINES: 26->1|36->1|37->6|38->7|38->7|38->7|41->10|41->10|41->10|43->12|43->12|45->14|45->14|48->17|48->17|48->17|52->21|52->21|52->21|52->21|52->21|52->21|52->21|52->21|52->21|57->26|57->26|57->26|57->26|57->26|57->26|63->32|63->32|63->32|65->34|65->34|65->34|68->37
                    -- GENERATED --
                */
            