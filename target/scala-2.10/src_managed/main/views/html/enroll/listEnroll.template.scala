
package views.html.enroll

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
object listEnroll extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template4[Page,Int,Int,Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(currentPage: Page, pageIndex:Int, gameId:Int, lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._

def /*15.2*/header/*15.8*/(key:String, title:String):play.api.templates.Html = {_display_(

Seq[Any](format.raw/*15.38*/("""
    <th class="title header ">
        """),_display_(Seq[Any](/*17.10*/title)),format.raw/*17.15*/("""
    </th>
""")))};
Seq[Any](format.raw/*1.59*/("""
"""),format.raw/*6.1*/("""
"""),format.raw/*9.42*/("""


"""),format.raw/*14.37*/("""
"""),format.raw/*19.2*/("""

"""),_display_(Seq[Any](/*21.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "enroll", showBar = true,lang)/*21.86*/ {_display_(Seq[Any](format.raw/*21.88*/("""

	<script type="text/javascript">

		function submitForm() """),format.raw/*25.25*/("""{"""),format.raw/*25.26*/("""
			var gameId =  $("#gameId").val();
			if(gameId=="")"""),format.raw/*27.18*/("""{"""),format.raw/*27.19*/("""
				gameId="0";
			"""),format.raw/*29.4*/("""}"""),format.raw/*29.5*/("""
			window.location = "/listenroll?g="+gameId;
		
		"""),format.raw/*32.3*/("""}"""),format.raw/*32.4*/("""
		
		
		
	</script>

    """),_display_(Seq[Any](/*38.6*/if(flash.containsKey("success"))/*38.38*/ {_display_(Seq[Any](format.raw/*38.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*41.22*/Messages/*41.30*/.get(lang,"Done"))),format.raw/*41.47*/("""</strong> """),_display_(Seq[Any](/*41.58*/flash/*41.63*/.get("success"))),format.raw/*41.78*/("""
        </div>
    """)))})),format.raw/*43.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>查看报名</strong>
	</div>
	
	<div id="form-actions">
		"""),_display_(Seq[Any](/*50.4*/les_select("gameId",""+gameId,Game.allGame,Messages.get(lang,"select_all_game")))),format.raw/*50.84*/("""
		<a class="btn btn-success pull-right" id="add" href="javascript:submitForm()">"""),_display_(Seq[Any](/*51.82*/Messages/*51.90*/.get(lang,"select_od_and_save"))),format.raw/*51.121*/("""</a>
	</div>
	
	 """),_display_(Seq[Any](/*54.4*/if(currentPage.getTotalRowCount == 0)/*54.41*/ {_display_(Seq[Any](format.raw/*54.43*/("""
        <div class="well">
            <em>"""),_display_(Seq[Any](/*56.18*/Messages/*56.26*/.get(lang,"Nothing_to_display"))),format.raw/*56.57*/("""</em>
        </div>
    """)))}/*58.7*/else/*58.12*/{_display_(Seq[Any](format.raw/*58.13*/("""
    	<table class="users table table-bordered table-striped table-hover">
            <thead>
                <tr>
                """),_display_(Seq[Any](/*62.18*/header("name",Messages.get(lang,"game")))),format.raw/*62.58*/("""
                """),_display_(Seq[Any](/*63.18*/header("start_time",Messages.get(lang,"game_user_number")))),format.raw/*63.76*/("""
                """),_display_(Seq[Any](/*64.18*/header("username",Messages.get(lang,"username")))),format.raw/*64.66*/("""
                """),_display_(Seq[Any](/*65.18*/header("start_time",Messages.get(lang,"game_start_time")))),format.raw/*65.75*/("""
                """),_display_(Seq[Any](/*66.18*/header("start_time",Messages.get(lang,"operation")))),format.raw/*66.69*/("""
                </tr>
            </thead>
             <tbody>
                """),_display_(Seq[Any](/*70.18*/for(game <- currentPage.getScoreList) yield /*70.55*/ {_display_(Seq[Any](format.raw/*70.57*/("""
                    <tr>
                    	<td>
                    	   """),_display_(Seq[Any](/*73.26*/game/*73.30*/.game.project.title)),format.raw/*73.49*/("""
                    	</td>
                    	 <td >
                        	"""),_display_(Seq[Any](/*76.27*/game/*76.31*/.id)),format.raw/*76.34*/("""
                        </td>
                        <td >
                         """),_display_(Seq[Any](/*79.27*/game/*79.31*/.user.username)),format.raw/*79.45*/("""
                        </td>
                        <td >
                            """),_display_(Seq[Any](/*82.30*/game/*82.34*/.game.gameStartTime)),format.raw/*82.53*/("""
                        </td>
                        
                        <td>
                        	 <a href=""""),_display_(Seq[Any](/*86.37*/routes/*86.43*/.EnrollAction.delete(game.id))),format.raw/*86.72*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*86.135*/Messages/*86.143*/.get(lang,"delete"))),format.raw/*86.162*/("""</a>
                        </td>
                    </tr>
                """)))})),format.raw/*89.18*/("""
            </tbody>
         </table>
         
         
    """)))})),format.raw/*94.6*/("""
""")))})),format.raw/*95.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,pageIndex:Int,gameId:Int,lang:Lang): play.api.templates.Html = apply(currentPage,pageIndex,gameId,lang)
    
    def f:((Page,Int,Int,Lang) => play.api.templates.Html) = (currentPage,pageIndex,gameId,lang) => apply(currentPage,pageIndex,gameId,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:43 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/enroll/listEnroll.scala.html
                    HASH: 4437cf68f10f5b18a39a15678e45f2eb75cd63fc
                    MATRIX: 746->1|960->405|974->411|1068->441|1147->484|1174->489|1227->58|1255->157|1284->286|1318->402|1347->503|1387->508|1480->592|1520->594|1612->658|1641->659|1726->716|1755->717|1804->739|1832->740|1914->795|1942->796|2010->829|2051->861|2091->863|2274->1010|2291->1018|2330->1035|2377->1046|2391->1051|2428->1066|2482->1089|2624->1196|2726->1276|2845->1359|2862->1367|2916->1398|2972->1419|3018->1456|3058->1458|3141->1505|3158->1513|3211->1544|3257->1573|3270->1578|3309->1579|3482->1716|3544->1756|3599->1775|3679->1833|3734->1852|3804->1900|3859->1919|3938->1976|3993->1995|4066->2046|4188->2132|4241->2169|4281->2171|4397->2251|4410->2255|4451->2274|4572->2359|4585->2363|4610->2366|4736->2456|4749->2460|4785->2474|4914->2567|4927->2571|4968->2590|5129->2715|5144->2721|5195->2750|5295->2813|5313->2821|5355->2840|5468->2921|5569->2991|5603->2994
                    LINES: 26->1|35->15|35->15|37->15|39->17|39->17|42->1|43->6|44->9|47->14|48->19|50->21|50->21|50->21|54->25|54->25|56->27|56->27|58->29|58->29|61->32|61->32|67->38|67->38|67->38|70->41|70->41|70->41|70->41|70->41|70->41|72->43|79->50|79->50|80->51|80->51|80->51|83->54|83->54|83->54|85->56|85->56|85->56|87->58|87->58|87->58|91->62|91->62|92->63|92->63|93->64|93->64|94->65|94->65|95->66|95->66|99->70|99->70|99->70|102->73|102->73|102->73|105->76|105->76|105->76|108->79|108->79|108->79|111->82|111->82|111->82|115->86|115->86|115->86|115->86|115->86|115->86|118->89|123->94|124->95
                    -- GENERATED --
                */
            