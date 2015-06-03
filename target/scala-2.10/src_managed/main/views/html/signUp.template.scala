
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
object signUp extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template2[Form[User],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(userForm: Form[User],lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.34*/("""
"""),format.raw/*6.1*/("""

"""),_display_(Seq[Any](/*8.2*/main(Html("Login"), nav = "login", showBar = false,lang)/*8.58*/ {_display_(Seq[Any](format.raw/*8.60*/("""
	
	
	"""),_display_(Seq[Any](/*11.3*/form(action = routes.Application.signUpSave(),'class -> "form-vertical",'enctype -> "multipart/form-data")/*11.109*/{_display_(Seq[Any](format.raw/*11.110*/("""
		<script type="text/javascript">
		
		function checkUserForm()"""),format.raw/*14.27*/("""{"""),format.raw/*14.28*/("""
			var password = $('#password').val();
			var repassword = $('#repassword').val();
			
			if(password != repassword)"""),format.raw/*18.30*/("""{"""),format.raw/*18.31*/("""
				alert("密码不匹配，请重新输入");
				return;
			"""),format.raw/*21.4*/("""}"""),format.raw/*21.5*/("""
			
			document.forms[0].submit();
		"""),format.raw/*24.3*/("""}"""),format.raw/*24.4*/("""
	
	</script>
		<div class="page-header">
                    <h1 style="text-align:center;">"""),_display_(Seq[Any](/*28.53*/Messages/*28.61*/.get(lang,"sign_up"))),format.raw/*28.81*/("""</h1>
        </div>
		<div class="control-group" style="margin-top:40px;">
			<div class="controls" style="margin-left:25%;">
				"""),_display_(Seq[Any](/*32.6*/Messages/*32.14*/.get(lang,"name"))),format.raw/*32.31*/("""<input type="text" name="username" style="width:60%;background-position:5px -693px;background-repeat: no-repeat;padding:1px 11px 1px 36px;height:32px;" >
			</div>
		</div>
		<div class="control-group">
			<div class="controls" style="margin-left:25%;">
				"""),_display_(Seq[Any](/*37.6*/Messages/*37.14*/.get(lang,"pass"))),format.raw/*37.31*/("""<input type="password" id="password" name="password" style="width:60%;background-position:5px -734px;background-repeat: no-repeat;padding:1px 11px 1px 36px;height:32px;" id="inputPassword" placeholder=""""),_display_(Seq[Any](/*37.234*/Messages/*37.242*/.get(lang,"pass"))),format.raw/*37.259*/("""">
			</div>
			
		</div>
		
		<div class="control-group">
			<div class="controls" style="margin-left:25%;">
				"""),_display_(Seq[Any](/*44.6*/Messages/*44.14*/.get(lang,"pass"))),format.raw/*44.31*/("""<input type="password" id="repassword" name="repassword" style="width:60%;background-position:5px -734px;background-repeat: no-repeat;padding:1px 11px 1px 36px;height:32px;" id="inputPassword" placeholder=""""),_display_(Seq[Any](/*44.238*/Messages/*44.246*/.get(lang,"repass"))),format.raw/*44.265*/("""">
			</div>
			
		</div>
		
		<div class="control-group">
			<div class="controls" style="margin-left:34%;">
				
				<button type="button" onclick="checkUserForm()" class="regedit_button" style="background-color:#ec7500;width:100px;height:35px;">"""),_display_(Seq[Any](/*52.135*/Messages/*52.143*/.get(lang,"create"))),format.raw/*52.162*/("""</button>
			</div>
		</div>
	""")))})),format.raw/*55.3*/("""
""")))})))}
    }
    
    def render(userForm:Form[User],lang:Lang): play.api.templates.Html = apply(userForm,lang)
    
    def f:((Form[User],Lang) => play.api.templates.Html) = (userForm,lang) => apply(userForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 23:15:54 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/signUp.scala.html
                    HASH: 7624c096c7db489f64401770393bc63c0fc48779
                    MATRIX: 733->1|938->33|966->132|1005->137|1069->193|1108->195|1153->205|1269->311|1309->312|1404->379|1433->380|1583->502|1612->503|1684->548|1712->549|1780->590|1808->591|1942->689|1959->697|2001->717|2172->853|2189->861|2228->878|2527->1142|2544->1150|2583->1167|2823->1370|2841->1378|2881->1395|3038->1517|3055->1525|3094->1542|3338->1749|3356->1757|3398->1776|3692->2033|3710->2041|3752->2060|3817->2094
                    LINES: 26->1|36->1|37->6|39->8|39->8|39->8|42->11|42->11|42->11|45->14|45->14|49->18|49->18|52->21|52->21|55->24|55->24|59->28|59->28|59->28|63->32|63->32|63->32|68->37|68->37|68->37|68->37|68->37|68->37|75->44|75->44|75->44|75->44|75->44|75->44|83->52|83->52|83->52|86->55
                    -- GENERATED --
                */
            