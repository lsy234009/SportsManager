
package views.html.game

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
object gameCreate extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template3[List[Project],Form[Game],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(projects:List[Project],messageForm: Form[Game], lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.61*/("""
"""),format.raw/*6.1*/("""

"""),_display_(Seq[Any](/*8.2*/admin_main(Html("CreateGame"), nav = "admin",adminnav="game", showBar = true,lang)/*8.84*/ {_display_(Seq[Any](format.raw/*8.86*/("""
<script src=""""),_display_(Seq[Any](/*9.15*/routes/*9.21*/.Assets.at("date/WdatePicker.js"))),format.raw/*9.54*/("""" type="text/javascript"></script>
<script type="text/javascript">
var GO_LIST = "/listgame";
function goList()"""),format.raw/*12.18*/("""{"""),format.raw/*12.19*/("""
	window.location = GO_LIST;
"""),format.raw/*14.1*/("""}"""),format.raw/*14.2*/("""

</script>

"""),_display_(Seq[Any](/*18.2*/if(flash.containsKey("success"))/*18.34*/ {_display_(Seq[Any](format.raw/*18.36*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*21.22*/Messages/*21.30*/.get(lang,"done"))),format.raw/*21.47*/("""</strong> """),_display_(Seq[Any](/*21.58*/flash/*21.63*/.get("success"))),format.raw/*21.78*/("""
        </div>
""")))})),format.raw/*23.2*/(""" 
"""),_display_(Seq[Any](/*24.2*/if(flash.containsKey("error"))/*24.32*/ {_display_(Seq[Any](format.raw/*24.34*/("""
        <div class="alert alert-error">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*27.22*/Messages/*27.30*/.get(lang,"fail"))),format.raw/*27.47*/("""</strong> """),_display_(Seq[Any](/*27.58*/flash/*27.63*/.get("error"))),format.raw/*27.76*/("""
        </div>
""")))})),format.raw/*29.2*/(""" 
<div class="alert alert-info">
		  	<strong>添加比赛</strong>
</div>
        
"""),_display_(Seq[Any](/*34.2*/form(routes.GameAction.save,'class -> "form-horizontal",'enctype -> "multipart/form-data")/*34.92*/{_display_(Seq[Any](format.raw/*34.93*/("""
	<fieldset>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*37.34*/Messages/*37.42*/.get(lang,"select_project"))),format.raw/*37.69*/("""</label>
		<div class="controls" >
			<select name="project.id" id="project.id">
			"""),_display_(Seq[Any](/*40.5*/for(proj <- projects) yield /*40.26*/{_display_(Seq[Any](format.raw/*40.27*/("""
				<option value=""""),_display_(Seq[Any](/*41.21*/proj/*41.25*/.id)),format.raw/*41.28*/("""">"""),_display_(Seq[Any](/*41.31*/proj/*41.35*/.title)),format.raw/*41.41*/("""</option>
			""")))})),format.raw/*42.5*/("""
		</select>
		</div>
	</div>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*47.34*/Messages/*47.42*/.get(lang,"game_start_time"))),format.raw/*47.70*/("""</label>
		<div class="controls" >
						<input class="Wdate" name="gameStartTime"type="text" onFocus="WdatePicker("""),format.raw/*49.81*/("""{"""),format.raw/*49.82*/("""dateFmt:'yyyy年MM月dd日 HH时mm分ss秒'"""),format.raw/*49.113*/("""}"""),format.raw/*49.114*/(""")"/>
		</div>
	</div>
	<div class="control-group" >
		<label class="control-label" for="itextarea">"""),_display_(Seq[Any](/*53.49*/Messages/*53.57*/.get(lang,"alarm_content"))),format.raw/*53.83*/("""</label>
		<div class="controls">
			<textarea class="input-xlarge" id="description" name="description" rows="7" style="width:540px;white-space:nowrap; overflow:auto;" placeholder="请输入描述内容"></textarea>
		</div>
	</div>
	</fieldset>
	<div style="height:35px;" class="save_button">
		<input type="submit" id="save_button"  value="保存" onClick=""  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
		<input type="button" id="save_button"  value="取消" onClick="goList()"  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
	</div>
	
""")))})),format.raw/*64.2*/("""

""")))})))}
    }
    
    def render(projects:List[Project],messageForm:Form[Game],lang:Lang): play.api.templates.Html = apply(projects,messageForm,lang)
    
    def f:((List[Project],Form[Game],Lang) => play.api.templates.Html) = (projects,messageForm,lang) => apply(projects,messageForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:43 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/game/gameCreate.scala.html
                    HASH: 803a5451b43418af69497f3d276f19f2b5ef1113
                    MATRIX: 756->1|988->60|1016->159|1055->164|1145->246|1184->248|1235->264|1249->270|1303->303|1444->416|1473->417|1531->448|1559->449|1611->466|1652->498|1692->500|1875->647|1892->655|1931->672|1978->683|1992->688|2029->703|2079->722|2118->726|2157->756|2197->758|2378->903|2395->911|2434->928|2481->939|2495->944|2530->957|2580->976|2697->1058|2796->1148|2835->1149|2950->1228|2967->1236|3016->1263|3139->1351|3176->1372|3215->1373|3273->1395|3286->1399|3311->1402|3350->1405|3363->1409|3391->1415|3437->1430|3571->1528|3588->1536|3638->1564|3783->1681|3812->1682|3872->1713|3902->1714|4042->1818|4059->1826|4107->1852|4732->2446
                    LINES: 26->1|36->1|37->6|39->8|39->8|39->8|40->9|40->9|40->9|43->12|43->12|45->14|45->14|49->18|49->18|49->18|52->21|52->21|52->21|52->21|52->21|52->21|54->23|55->24|55->24|55->24|58->27|58->27|58->27|58->27|58->27|58->27|60->29|65->34|65->34|65->34|68->37|68->37|68->37|71->40|71->40|71->40|72->41|72->41|72->41|72->41|72->41|72->41|73->42|78->47|78->47|78->47|80->49|80->49|80->49|80->49|84->53|84->53|84->53|95->64
                    -- GENERATED --
                */
            