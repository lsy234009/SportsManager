
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
object scoreQuickSearch extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template4[Page,Int,Int,Lang,play.api.templates.Html] {

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

"""),_display_(Seq[Any](/*21.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "score_search", showBar = true,lang)/*21.92*/ {_display_(Seq[Any](format.raw/*21.94*/("""

	<script type="text/javascript">

		
		
	
	</script>

    """),_display_(Seq[Any](/*30.6*/if(flash.containsKey("success"))/*30.38*/ {_display_(Seq[Any](format.raw/*30.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*33.22*/Messages/*33.30*/.get(lang,"Done"))),format.raw/*33.47*/("""</strong> """),_display_(Seq[Any](/*33.58*/flash/*33.63*/.get("success"))),format.raw/*33.78*/("""
        </div>
    """)))})),format.raw/*35.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>成绩快速查询</strong>
	</div>
	
	<div id="form-actions">
		
	</div>
	
	 """),_display_(Seq[Any](/*45.4*/if(currentPage.getTotalRowCount == 0)/*45.41*/ {_display_(Seq[Any](format.raw/*45.43*/("""
        <div class="well">
            <em>"""),_display_(Seq[Any](/*47.18*/Messages/*47.26*/.get(lang,"Nothing_to_display"))),format.raw/*47.57*/("""</em>
        </div>
    """)))}/*49.7*/else/*49.12*/{_display_(Seq[Any](format.raw/*49.13*/("""
    	<table class="users table table-bordered table-striped table-hover">
            <thead>
                <tr>
                """),_display_(Seq[Any](/*53.18*/header("name",Messages.get(lang,"game")))),format.raw/*53.58*/("""
                  """),_display_(Seq[Any](/*54.20*/header("name",Messages.get(lang,"game_time")))),format.raw/*54.65*/("""
                """),_display_(Seq[Any](/*55.18*/header("start_time",Messages.get(lang,"game_user_number")))),format.raw/*55.76*/("""
                """),_display_(Seq[Any](/*56.18*/header("start_time",Messages.get(lang,"score")))),format.raw/*56.65*/("""
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*61.18*/for(game <- currentPage.getScoreList) yield /*61.55*/ {_display_(Seq[Any](format.raw/*61.57*/("""
                    <tr>
                    	<td>
                    	   """),_display_(Seq[Any](/*64.26*/game/*64.30*/.game.project.title)),format.raw/*64.49*/("""
                    	</td>
                    	<td>
                    	   """),_display_(Seq[Any](/*67.26*/game/*67.30*/.game.gameStartTime)),format.raw/*67.49*/("""
                    	</td>
                    	 <td>
                        	"""),_display_(Seq[Any](/*70.27*/game/*70.31*/.id)),format.raw/*70.34*/("""
                        </td>
                        
                        <td >
                            <input type="text" id="score_"""),_display_(Seq[Any](/*74.59*/game/*74.63*/.id)),format.raw/*74.66*/("""" readonly value=""""),_display_(Seq[Any](/*74.85*/game/*74.89*/.score)),format.raw/*74.95*/(""""/>
                        </td>
                    </tr>
                """)))})),format.raw/*77.18*/("""
            </tbody>
         </table>
         
    """)))})),format.raw/*81.6*/("""
""")))})),format.raw/*82.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,pageIndex:Int,gameId:Int,lang:Lang): play.api.templates.Html = apply(currentPage,pageIndex,gameId,lang)
    
    def f:((Page,Int,Int,Lang) => play.api.templates.Html) = (currentPage,pageIndex,gameId,lang) => apply(currentPage,pageIndex,gameId,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 22:06:28 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/enroll/scoreQuickSearch.scala.html
                    HASH: 8187293402aff70c7b8d35954e33c6b993847cdc
                    MATRIX: 752->1|966->405|980->411|1074->441|1153->484|1180->489|1233->58|1261->157|1290->286|1324->402|1353->503|1393->508|1492->598|1532->600|1637->670|1678->702|1718->704|1901->851|1918->859|1957->876|2004->887|2018->892|2055->907|2109->930|2269->1055|2315->1092|2355->1094|2438->1141|2455->1149|2508->1180|2554->1209|2567->1214|2606->1215|2779->1352|2841->1392|2898->1413|2965->1458|3020->1477|3100->1535|3155->1554|3224->1601|3348->1689|3401->1726|3441->1728|3557->1808|3570->1812|3611->1831|3729->1913|3742->1917|3783->1936|3903->2020|3916->2024|3941->2027|4125->2175|4138->2179|4163->2182|4218->2201|4231->2205|4259->2211|4371->2291|4461->2350|4495->2353
                    LINES: 26->1|35->15|35->15|37->15|39->17|39->17|42->1|43->6|44->9|47->14|48->19|50->21|50->21|50->21|59->30|59->30|59->30|62->33|62->33|62->33|62->33|62->33|62->33|64->35|74->45|74->45|74->45|76->47|76->47|76->47|78->49|78->49|78->49|82->53|82->53|83->54|83->54|84->55|84->55|85->56|85->56|90->61|90->61|90->61|93->64|93->64|93->64|96->67|96->67|96->67|99->70|99->70|99->70|103->74|103->74|103->74|103->74|103->74|103->74|106->77|110->81|111->82
                    -- GENERATED --
                */
            