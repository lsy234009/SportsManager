
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
object gameEdit extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template4[Long,List[Project],Form[Game],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(id:Long, projects:List[Project],messageForm: Form[Game], lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.70*/("""
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
		  	<strong>修改比赛</strong>
</div>
        
"""),_display_(Seq[Any](/*34.2*/form(routes.GameAction.update(id),'class -> "form-horizontal",'enctype -> "multipart/form-data")/*34.98*/{_display_(Seq[Any](format.raw/*34.99*/("""
	<fieldset>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*37.34*/Messages/*37.42*/.get(lang,"select_project"))),format.raw/*37.69*/("""</label>
		<div class="controls" >
			<select name="project.id" id="project.id">
			"""),_display_(Seq[Any](/*40.5*/for(proj <- projects) yield /*40.26*/{_display_(Seq[Any](format.raw/*40.27*/("""
				"""),_display_(Seq[Any](/*41.6*/if(""+proj.id == messageForm("project.id").value)/*41.55*/{_display_(Seq[Any](format.raw/*41.56*/("""
					<option value=""""),_display_(Seq[Any](/*42.22*/proj/*42.26*/.id)),format.raw/*42.29*/("""" selected >"""),_display_(Seq[Any](/*42.42*/proj/*42.46*/.title)),format.raw/*42.52*/("""</option>
				""")))}/*43.6*/else/*43.10*/{_display_(Seq[Any](format.raw/*43.11*/("""
					<option value=""""),_display_(Seq[Any](/*44.22*/proj/*44.26*/.id)),format.raw/*44.29*/("""">"""),_display_(Seq[Any](/*44.32*/proj/*44.36*/.title)),format.raw/*44.42*/("""</option>
				""")))})),format.raw/*45.6*/("""
			""")))})),format.raw/*46.5*/("""
		</select>
		</div>
	</div>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*51.34*/Messages/*51.42*/.get(lang,"game_start_time"))),format.raw/*51.70*/("""</label>
		<div class="controls" >
			<input class="Wdate" name="gameStartTime"type="text" value=""""),_display_(Seq[Any](/*53.65*/messageForm("gameStartTime")/*53.93*/.value)),format.raw/*53.99*/("""" onFocus="WdatePicker("""),format.raw/*53.122*/("""{"""),format.raw/*53.123*/("""dateFmt:'yyyy年MM月dd日 HH时mm分ss秒'"""),format.raw/*53.154*/("""}"""),format.raw/*53.155*/(""")"/>
		</div>
	</div>
	<div class="control-group" >
		<label class="control-label" for="itextarea">"""),_display_(Seq[Any](/*57.49*/Messages/*57.57*/.get(lang,"alarm_content"))),format.raw/*57.83*/("""</label>
		<div class="controls">
			<textarea class="input-xlarge" id="description" name="description" rows="7" style="width:540px;white-space:nowrap; overflow:auto;" placeholder="请输入描述内容">"""),_display_(Seq[Any](/*59.158*/messageForm("description")/*59.184*/.value)),format.raw/*59.190*/("""</textarea>
		</div>
	</div>
	</fieldset>
	<div style="height:35px;" class="save_button">
		<input type="submit" id="save_button"  value="保存" onClick=""  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
		<input type="button" id="save_button"  value="取消" onClick="goList()"  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
	</div>
	
""")))})),format.raw/*68.2*/("""

""")))})))}
    }
    
    def render(id:Long,projects:List[Project],messageForm:Form[Game],lang:Lang): play.api.templates.Html = apply(id,projects,messageForm,lang)
    
    def f:((Long,List[Project],Form[Game],Lang) => play.api.templates.Html) = (id,projects,messageForm,lang) => apply(id,projects,messageForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:44 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/game/gameEdit.scala.html
                    HASH: 42c69d5b3bac6c8d2279f8a4201b53283c56e2b9
                    MATRIX: 759->1|1000->69|1028->168|1067->173|1157->255|1196->257|1247->273|1261->279|1315->312|1457->426|1486->427|1544->458|1572->459|1625->477|1666->509|1706->511|1889->658|1906->666|1945->683|1992->694|2006->699|2043->714|2093->733|2132->737|2171->767|2211->769|2392->914|2409->922|2448->939|2495->950|2509->955|2544->968|2594->987|2711->1069|2816->1165|2855->1166|2970->1245|2987->1253|3036->1280|3159->1368|3196->1389|3235->1390|3277->1397|3335->1446|3374->1447|3433->1470|3446->1474|3471->1477|3520->1490|3533->1494|3561->1500|3595->1516|3608->1520|3647->1521|3706->1544|3719->1548|3744->1551|3783->1554|3796->1558|3824->1564|3871->1580|3908->1586|4042->1684|4059->1692|4109->1720|4246->1821|4283->1849|4311->1855|4363->1878|4393->1879|4453->1910|4483->1911|4623->2015|4640->2023|4688->2049|4918->2242|4954->2268|4983->2274|5416->2676
                    LINES: 26->1|36->1|37->6|39->8|39->8|39->8|40->9|40->9|40->9|43->12|43->12|45->14|45->14|49->18|49->18|49->18|52->21|52->21|52->21|52->21|52->21|52->21|54->23|55->24|55->24|55->24|58->27|58->27|58->27|58->27|58->27|58->27|60->29|65->34|65->34|65->34|68->37|68->37|68->37|71->40|71->40|71->40|72->41|72->41|72->41|73->42|73->42|73->42|73->42|73->42|73->42|74->43|74->43|74->43|75->44|75->44|75->44|75->44|75->44|75->44|76->45|77->46|82->51|82->51|82->51|84->53|84->53|84->53|84->53|84->53|84->53|84->53|88->57|88->57|88->57|90->59|90->59|90->59|99->68
                    -- GENERATED --
                */
            