
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
object projectInfo extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template2[Form[Project],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(messageForm: Form[Project], lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.41*/("""
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
        
"""),_display_(Seq[Any](/*34.2*/form(routes.ProjectAction.list(),'class -> "form-horizontal",'enctype -> "multipart/form-data")/*34.97*/{_display_(Seq[Any](format.raw/*34.98*/("""
	<fieldset>
	<div class="control-group" >
		<label class="control-label" >"""),_display_(Seq[Any](/*37.34*/Messages/*37.42*/.get(lang,"alarm_title"))),format.raw/*37.66*/("""</label>
		<div class="controls" >
			<input type="text" id="title"  name="title" readonly placeholder="请输入名称" value=""""),_display_(Seq[Any](/*39.85*/messageForm("title")/*39.105*/.value)),format.raw/*39.111*/("""" >
		</div>
	</div>

	<div class="control-group" >
		<label class="control-label" for="itextarea">"""),_display_(Seq[Any](/*44.49*/Messages/*44.57*/.get(lang,"alarm_content"))),format.raw/*44.83*/("""</label>
		<div class="controls">
			<textarea class="input-xlarge" id="description" readonly name="description" rows="7" style="width:540px;white-space:nowrap; overflow:auto;" placeholder="请输入描述内容">"""),_display_(Seq[Any](/*46.167*/messageForm("description")/*46.193*/.value)),format.raw/*46.199*/("""</textarea>
		</div>
	</div>
	</fieldset>
	<div style="height:35px;" class="save_button">
		<input type="button" id="save_button"  value="返回" onClick="goList()"  class="btn btn-primary control_button" style="float:right;margin-right:5px;">
	</div>
""")))})),format.raw/*53.2*/("""

""")))})))}
    }
    
    def render(messageForm:Form[Project],lang:Lang): play.api.templates.Html = apply(messageForm,lang)
    
    def f:((Form[Project],Lang) => play.api.templates.Html) = (messageForm,lang) => apply(messageForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:44 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/project/projectInfo.scala.html
                    HASH: 876a19b7d333327de117659fc704c7b91a7db387
                    MATRIX: 749->1|961->40|989->139|1028->144|1124->232|1163->234|1276->319|1305->320|1363->351|1391->352|1444->370|1485->402|1525->404|1708->551|1725->559|1764->576|1811->587|1825->592|1862->607|1912->626|1951->630|1990->660|2030->662|2211->807|2228->815|2267->832|2314->843|2328->848|2363->861|2413->880|2532->964|2636->1059|2675->1060|2790->1139|2807->1147|2853->1171|3010->1292|3040->1312|3069->1318|3210->1423|3227->1431|3275->1457|3514->1659|3550->1685|3579->1691|3866->1947
                    LINES: 26->1|36->1|37->6|39->8|39->8|39->8|43->12|43->12|45->14|45->14|49->18|49->18|49->18|52->21|52->21|52->21|52->21|52->21|52->21|54->23|55->24|55->24|55->24|58->27|58->27|58->27|58->27|58->27|58->27|60->29|65->34|65->34|65->34|68->37|68->37|68->37|70->39|70->39|70->39|75->44|75->44|75->44|77->46|77->46|77->46|84->53
                    -- GENERATED --
                */
            