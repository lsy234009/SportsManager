
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
object gameInfo extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template2[Form[Game],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(messageForm: Form[Game], lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.38*/("""
"""),format.raw/*6.1*/("""

"""),_display_(Seq[Any](/*8.2*/admin_main(Html("CreateGame"), nav = "admin",adminnav="game", showBar = true,lang)/*8.84*/ {_display_(Seq[Any](format.raw/*8.86*/("""

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
		  	<strong>查看比赛详情</strong>
</div>
        
"""),_display_(Seq[Any](/*34.2*/form(routes.GameAction.list(),'class -> "form-horizontal",'enctype -> "multipart/form-data")/*34.94*/{_display_(Seq[Any](format.raw/*34.95*/("""
	<fieldset>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*37.34*/Messages/*37.42*/.get(lang,"select_project"))),format.raw/*37.69*/("""</label>
		<div class="controls" >
			
			<input type="text" id="title" readonly name="title" value=""""),_display_(Seq[Any](/*40.64*/messageForm("project.title")/*40.92*/.value)),format.raw/*40.98*/("""" placeholder="请输入名称" >
		</div>
	</div>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*44.34*/Messages/*44.42*/.get(lang,"game_start_time"))),format.raw/*44.70*/("""</label>
		<div class="controls" >
			<input id="startTime" class="Wdate"  type="text" name="gameStartTime" readonly value=""""),_display_(Seq[Any](/*46.91*/messageForm("gameStartTime")/*46.119*/.value)),format.raw/*46.125*/("""" onFocus="WdatePicker("""),format.raw/*46.148*/("""{"""),format.raw/*46.149*/("""dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'#F"""),format.raw/*46.190*/("""{"""),format.raw/*46.191*/("""$dp.$D(\'endTime\')||\'2099-01-01\'"""),format.raw/*46.226*/("""}"""),format.raw/*46.227*/("""'"""),format.raw/*46.228*/("""}"""),format.raw/*46.229*/(""")"/> 
		</div>
	</div>
	<div class="control-group" >
		<label class="control-label" for="itextarea">"""),_display_(Seq[Any](/*50.49*/Messages/*50.57*/.get(lang,"alarm_content"))),format.raw/*50.83*/("""</label>
		<div class="controls">
			<textarea class="input-xlarge" id="description" name="description" readonly rows="7" style="width:540px;white-space:nowrap; overflow:auto;" placeholder="请输入描述内容">"""),_display_(Seq[Any](/*52.167*/messageForm("description")/*52.193*/.value)),format.raw/*52.199*/("""</textarea>
		</div>
	</div>
	</fieldset>
	<div style="height:35px;" class="save_button">
		<input type="button" id="save_button"  value="返回" onClick="goList()"  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
	</div>
	
""")))})),format.raw/*60.2*/("""

""")))})))}
    }
    
    def render(messageForm:Form[Game],lang:Lang): play.api.templates.Html = apply(messageForm,lang)
    
    def f:((Form[Game],Lang) => play.api.templates.Html) = (messageForm,lang) => apply(messageForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:44 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/game/gameInfo.scala.html
                    HASH: ed855d7c13e099149014677f65723ad57fae3c69
                    MATRIX: 740->1|949->37|977->136|1016->141|1106->223|1145->225|1255->307|1284->308|1342->339|1370->340|1423->358|1464->390|1504->392|1687->539|1704->547|1743->564|1790->575|1804->580|1841->595|1891->614|1930->618|1969->648|2009->650|2190->795|2207->803|2246->820|2293->831|2307->836|2342->849|2392->868|2511->952|2612->1044|2651->1045|2766->1124|2783->1132|2832->1159|2973->1264|3010->1292|3038->1298|3182->1406|3199->1414|3249->1442|3412->1569|3450->1597|3479->1603|3531->1626|3561->1627|3631->1668|3661->1669|3725->1704|3755->1705|3785->1706|3815->1707|3956->1812|3973->1820|4021->1846|4260->2048|4296->2074|4325->2080|4615->2339
                    LINES: 26->1|36->1|37->6|39->8|39->8|39->8|43->12|43->12|45->14|45->14|49->18|49->18|49->18|52->21|52->21|52->21|52->21|52->21|52->21|54->23|55->24|55->24|55->24|58->27|58->27|58->27|58->27|58->27|58->27|60->29|65->34|65->34|65->34|68->37|68->37|68->37|71->40|71->40|71->40|75->44|75->44|75->44|77->46|77->46|77->46|77->46|77->46|77->46|77->46|77->46|77->46|77->46|77->46|81->50|81->50|81->50|83->52|83->52|83->52|91->60
                    -- GENERATED --
                */
            