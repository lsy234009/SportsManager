
package views.html.project

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
object projectEdit extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template3[Long,Form[Project],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(id:Long,messageForm: Form[Project], lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.49*/("""
"""),format.raw/*6.1*/("""

"""),_display_(Seq[Any](/*8.2*/admin_main(Html("CreateProject"), nav = "admin",adminnav="project", showBar = true,lang)/*8.90*/ {_display_(Seq[Any](format.raw/*8.92*/("""

<script type="text/javascript">
var GO_LIST = "/listproject";
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
		  	<strong>添加运动项目</strong>
</div>
        
"""),_display_(Seq[Any](/*34.2*/form(routes.ProjectAction.update(id),'class -> "form-horizontal",'enctype -> "multipart/form-data")/*34.101*/{_display_(Seq[Any](format.raw/*34.102*/("""
	<fieldset>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*37.34*/Messages/*37.42*/.get(lang,"alarm_title"))),format.raw/*37.66*/("""</label>
		<div class="controls" >
			<input type="text" id="title"  name="title" placeholder="请输入名称" value=""""),_display_(Seq[Any](/*39.76*/messageForm("title")/*39.96*/.value)),format.raw/*39.102*/("""" >
		</div>
	</div>

	<div class="control-group" >
		<label class="control-label" for="itextarea">"""),_display_(Seq[Any](/*44.49*/Messages/*44.57*/.get(lang,"alarm_content"))),format.raw/*44.83*/("""</label>
		<div class="controls">
			<textarea class="input-xlarge" id="description" name="description" rows="7" style="width:540px;white-space:nowrap; overflow:auto;" placeholder="请输入描述内容">"""),_display_(Seq[Any](/*46.158*/messageForm("description")/*46.184*/.value)),format.raw/*46.190*/("""</textarea>
		</div>
	</div>
	</fieldset>
	<div style="height:35px;" class="save_button">
		<input type="submit" id="save_button"  value="更新" onClick=""  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
		<input type="button" id="save_button"  value="取消" onClick="goList()"  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
	</div>
	
""")))})),format.raw/*55.2*/("""

""")))})))}
    }
    
    def render(id:Long,messageForm:Form[Project],lang:Lang): play.api.templates.Html = apply(id,messageForm,lang)
    
    def f:((Long,Form[Project],Lang) => play.api.templates.Html) = (id,messageForm,lang) => apply(id,messageForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:44 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/project/projectEdit.scala.html
                    HASH: e184e88461814d27d810c6f05bc3b0971aa7cef3
                    MATRIX: 754->1|974->48|1002->147|1041->152|1137->240|1176->242|1289->327|1318->328|1376->359|1404->360|1457->378|1498->410|1538->412|1721->559|1738->567|1777->584|1824->595|1838->600|1875->615|1925->634|1964->638|2003->668|2043->670|2224->815|2241->823|2280->840|2327->851|2341->856|2376->869|2426->888|2545->972|2654->1071|2694->1072|2809->1151|2826->1159|2872->1183|3020->1295|3049->1315|3078->1321|3219->1426|3236->1434|3284->1460|3514->1653|3550->1679|3579->1685|4012->2087
                    LINES: 26->1|36->1|37->6|39->8|39->8|39->8|43->12|43->12|45->14|45->14|49->18|49->18|49->18|52->21|52->21|52->21|52->21|52->21|52->21|54->23|55->24|55->24|55->24|58->27|58->27|58->27|58->27|58->27|58->27|60->29|65->34|65->34|65->34|68->37|68->37|68->37|70->39|70->39|70->39|75->44|75->44|75->44|77->46|77->46|77->46|86->55
                    -- GENERATED --
                */
            