
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
object admin_main extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template6[Html,String,String,Boolean,Lang,Html,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: Html, nav: String = "", adminnav: String = "", showBar: Boolean = true,lang:Lang)(content: Html):play.api.templates.Html = {
        _display_ {import play.i18n._

import controllers._


Seq[Any](format.raw/*1.106*/("""
"""),format.raw/*4.1*/("""
"""),_display_(Seq[Any](/*5.2*/head(title, nav, showBar,lang)/*5.32*/ {_display_(Seq[Any](format.raw/*5.34*/("""
    <div class="container-fluid"style=" background-color: #eef1f2;">
		<div class="row-fluid" >
			<div class="span3" style="width:160px;font-size: 14px; font-family: SimSun; position:fixed;height:100%;" >
				<div class="well sidebar-nav"style="background-color: #f6f7f8;height:100%;">
					<ul class="nav nav-list"> 
                     
                     	<li class=""""),_display_(Seq[Any](/*12.35*/("active".when(adminnav == "score_search")))),format.raw/*12.78*/("""">
							<a href="/scorequicksearch">成绩快速查询</a>
						</li>
						
						<li class=""""),_display_(Seq[Any](/*16.19*/("active".when(adminnav == "game_enroll")))),format.raw/*16.61*/("""">
							<a href="/enroll/edit">比赛报名</a>
						</li>
						"""),_display_(Seq[Any](/*19.8*/dynamicRole(Application.ADMIN)/*19.38*/{_display_(Seq[Any](format.raw/*19.39*/("""
							<li class=""""),_display_(Seq[Any](/*20.20*/("active".when(adminnav == "score")))),format.raw/*20.56*/("""">
								<a href="/listScore">成绩管理</a>
							</li>
							
							<li class=""""),_display_(Seq[Any](/*24.20*/("active".when(adminnav == "project")))),format.raw/*24.58*/("""">
								<a href="/listproject">项目管理</a>
							</li>
							
							<li class=""""),_display_(Seq[Any](/*28.20*/("active".when(adminnav == "game")))),format.raw/*28.55*/("""">
								<a href="/listgame">比赛管理</a>
							</li>
							
							<li class=""""),_display_(Seq[Any](/*32.20*/("active".when(adminnav == "enroll")))),format.raw/*32.57*/("""">
								<a href="/listenroll">报名管理</a>
							</li>
						
							<li class=""""),_display_(Seq[Any](/*36.20*/("active".when(adminnav == "user")))),format.raw/*36.55*/("""">
								<a href=""""),_display_(Seq[Any](/*37.19*/routes/*37.25*/.UserAction.list())),format.raw/*37.43*/("""">用户管理</a>
							</li>
						
						""")))})),format.raw/*40.8*/("""
					
					
					</ul>
				
				</div>
			<div class="shadow" style="position: absolute;top:0px;left:177px;width:4px;height:100%;">
	        </div>
			</div>
			<div class="span9" style="position: absolute;margin-left:162px;width:86.5%;">
				<div class="content" style="height:100%;" >
					"""),_display_(Seq[Any](/*51.7*/content)),format.raw/*51.14*/("""
				</div>
			</div>
		</div>
	</div>
""")))})),format.raw/*56.2*/("""
"""))}
    }
    
    def render(title:Html,nav:String,adminnav:String,showBar:Boolean,lang:Lang,content:Html): play.api.templates.Html = apply(title,nav,adminnav,showBar,lang)(content)
    
    def f:((Html,String,String,Boolean,Lang) => (Html) => play.api.templates.Html) = (title,nav,adminnav,showBar,lang) => (content) => apply(title,nav,adminnav,showBar,lang)(content)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:41 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/admin_main.scala.html
                    HASH: b9b95a256b31d1368e965fb1bedeed12a9199587
                    MATRIX: 758->1|981->105|1008->148|1044->150|1082->180|1121->182|1533->558|1598->601|1720->687|1784->729|1880->790|1919->820|1958->821|2014->841|2072->877|2189->958|2249->996|2368->1079|2425->1114|2541->1194|2600->1231|2717->1312|2774->1347|2831->1368|2846->1374|2886->1392|2955->1430|3284->1724|3313->1731|3384->1771
                    LINES: 26->1|32->1|33->4|34->5|34->5|34->5|41->12|41->12|45->16|45->16|48->19|48->19|48->19|49->20|49->20|53->24|53->24|57->28|57->28|61->32|61->32|65->36|65->36|66->37|66->37|66->37|69->40|80->51|80->51|85->56
                    -- GENERATED --
                */
            