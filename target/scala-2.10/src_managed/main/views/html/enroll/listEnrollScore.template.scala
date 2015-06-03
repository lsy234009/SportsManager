
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
object listEnrollScore extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template4[Page,Int,Int,Lang,play.api.templates.Html] {

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

"""),_display_(Seq[Any](/*21.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "score", showBar = true,lang)/*21.85*/ {_display_(Seq[Any](format.raw/*21.87*/("""

	<script type="text/javascript">

		function submitForm() """),format.raw/*25.25*/("""{"""),format.raw/*25.26*/("""
			var gameId =  $("#gameId").val();
			if(gameId=="")"""),format.raw/*27.18*/("""{"""),format.raw/*27.19*/("""
				gameId="0";
			"""),format.raw/*29.4*/("""}"""),format.raw/*29.5*/("""
			window.location = "/listScore?g="+gameId;
		"""),format.raw/*31.3*/("""}"""),format.raw/*31.4*/("""
		
		function updateScore(enrollId) """),format.raw/*33.34*/("""{"""),format.raw/*33.35*/("""
			alert(enrollId);
			var url = "/score";
			var textId = "#score_"+enrollId;
			var score = $(textId).val();
			alert(score);
			
			alert(url);
			$.post(url,
			"""),format.raw/*42.4*/("""{"""),format.raw/*42.5*/("""
				score:score,
				id:enrollId
			"""),format.raw/*45.4*/("""}"""),format.raw/*45.5*/(""",
			function(data, status)"""),format.raw/*46.26*/("""{"""),format.raw/*46.27*/("""
				if(data.result == "success")"""),format.raw/*47.33*/("""{"""),format.raw/*47.34*/("""
					alert("ok!");
					
				"""),format.raw/*50.5*/("""}"""),format.raw/*50.6*/("""else"""),format.raw/*50.10*/("""{"""),format.raw/*50.11*/("""
					alert("推送失败，已经保存，请联系管理员！");
				"""),format.raw/*52.5*/("""}"""),format.raw/*52.6*/("""
			"""),format.raw/*53.4*/("""}"""),format.raw/*53.5*/("""
	);
			
			
		
		"""),format.raw/*58.3*/("""}"""),format.raw/*58.4*/("""
		
	</script>

    """),_display_(Seq[Any](/*62.6*/if(flash.containsKey("success"))/*62.38*/ {_display_(Seq[Any](format.raw/*62.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*65.22*/Messages/*65.30*/.get(lang,"Done"))),format.raw/*65.47*/("""</strong> """),_display_(Seq[Any](/*65.58*/flash/*65.63*/.get("success"))),format.raw/*65.78*/("""
        </div>
    """)))})),format.raw/*67.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>成绩管理</strong>
	</div>
	
	<div id="form-actions">
		"""),_display_(Seq[Any](/*74.4*/les_select("gameId",""+gameId,Game.allGame,Messages.get(lang,"select_all_game")))),format.raw/*74.84*/("""
		<a class="btn btn-success pull-right" id="add" href="javascript:submitForm()">"""),_display_(Seq[Any](/*75.82*/Messages/*75.90*/.get(lang,"select_od_and_save"))),format.raw/*75.121*/("""</a>
	</div>
	
	 """),_display_(Seq[Any](/*78.4*/if(currentPage.getTotalRowCount == 0)/*78.41*/ {_display_(Seq[Any](format.raw/*78.43*/("""
        <div class="well">
            <em>"""),_display_(Seq[Any](/*80.18*/Messages/*80.26*/.get(lang,"Nothing_to_display"))),format.raw/*80.57*/("""</em>
        </div>
    """)))}/*82.7*/else/*82.12*/{_display_(Seq[Any](format.raw/*82.13*/("""
    	<table class="users table table-bordered table-striped table-hover">
            <thead>
                <tr>
                """),_display_(Seq[Any](/*86.18*/header("name",Messages.get(lang,"game")))),format.raw/*86.58*/("""
                """),_display_(Seq[Any](/*87.18*/header("start_time",Messages.get(lang,"game_user_number")))),format.raw/*87.76*/("""
                """),_display_(Seq[Any](/*88.18*/header("username",Messages.get(lang,"username")))),format.raw/*88.66*/("""
                """),_display_(Seq[Any](/*89.18*/header("start_time",Messages.get(lang,"score")))),format.raw/*89.65*/("""
                """),_display_(Seq[Any](/*90.18*/header("start_time",Messages.get(lang,"operation")))),format.raw/*90.69*/("""
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*95.18*/for(game <- currentPage.getScoreList) yield /*95.55*/ {_display_(Seq[Any](format.raw/*95.57*/("""
                    <tr>
                    	<td>
                    	   """),_display_(Seq[Any](/*98.26*/game/*98.30*/.game.project.title)),format.raw/*98.49*/("""
                    	</td>
                    	 <td >
                        	"""),_display_(Seq[Any](/*101.27*/game/*101.31*/.id)),format.raw/*101.34*/("""
                        </td>
                        <td >
                         """),_display_(Seq[Any](/*104.27*/game/*104.31*/.user.username)),format.raw/*104.45*/("""
                        </td>
                        <td >
                            <input type="text" id="score_"""),_display_(Seq[Any](/*107.59*/game/*107.63*/.id)),format.raw/*107.66*/("""" value=""""),_display_(Seq[Any](/*107.76*/game/*107.80*/.score)),format.raw/*107.86*/(""""/>
                        </td>
                        <td>
                        	 <a href="javascript:updateScore("""),_display_(Seq[Any](/*110.60*/game/*110.64*/.id)),format.raw/*110.67*/(""")" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*110.131*/Messages/*110.139*/.get(lang,"updateScore"))),format.raw/*110.163*/("""</a>
                        </td>
                    </tr>
                """)))})),format.raw/*113.18*/("""
            </tbody>
         </table>
         
         
    """)))})),format.raw/*118.6*/("""
""")))})),format.raw/*119.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,pageIndex:Int,gameId:Int,lang:Lang): play.api.templates.Html = apply(currentPage,pageIndex,gameId,lang)
    
    def f:((Page,Int,Int,Lang) => play.api.templates.Html) = (currentPage,pageIndex,gameId,lang) => apply(currentPage,pageIndex,gameId,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:43 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/enroll/listEnrollScore.scala.html
                    HASH: c543107bb8a4c8b0249d4d452044d0688cd7552b
                    MATRIX: 751->1|965->405|979->411|1073->441|1152->484|1179->489|1232->58|1260->157|1289->286|1323->402|1352->503|1392->508|1484->591|1524->593|1616->657|1645->658|1730->715|1759->716|1808->738|1836->739|1913->789|1941->790|2008->829|2037->830|2239->1005|2267->1006|2334->1046|2362->1047|2418->1075|2447->1076|2509->1110|2538->1111|2598->1144|2626->1145|2658->1149|2687->1150|2754->1190|2782->1191|2814->1196|2842->1197|2892->1220|2920->1221|2980->1246|3021->1278|3061->1280|3244->1427|3261->1435|3300->1452|3347->1463|3361->1468|3398->1483|3452->1506|3594->1613|3696->1693|3815->1776|3832->1784|3886->1815|3942->1836|3988->1873|4028->1875|4111->1922|4128->1930|4181->1961|4227->1990|4240->1995|4279->1996|4452->2133|4514->2173|4569->2192|4649->2250|4704->2269|4774->2317|4829->2336|4898->2383|4953->2402|5026->2453|5150->2541|5203->2578|5243->2580|5359->2660|5372->2664|5413->2683|5535->2768|5549->2772|5575->2775|5702->2865|5716->2869|5753->2883|5912->3005|5926->3009|5952->3012|5999->3022|6013->3026|6042->3032|6204->3157|6218->3161|6244->3164|6346->3228|6365->3236|6413->3260|6527->3341|6629->3411|6664->3414
                    LINES: 26->1|35->15|35->15|37->15|39->17|39->17|42->1|43->6|44->9|47->14|48->19|50->21|50->21|50->21|54->25|54->25|56->27|56->27|58->29|58->29|60->31|60->31|62->33|62->33|71->42|71->42|74->45|74->45|75->46|75->46|76->47|76->47|79->50|79->50|79->50|79->50|81->52|81->52|82->53|82->53|87->58|87->58|91->62|91->62|91->62|94->65|94->65|94->65|94->65|94->65|94->65|96->67|103->74|103->74|104->75|104->75|104->75|107->78|107->78|107->78|109->80|109->80|109->80|111->82|111->82|111->82|115->86|115->86|116->87|116->87|117->88|117->88|118->89|118->89|119->90|119->90|124->95|124->95|124->95|127->98|127->98|127->98|130->101|130->101|130->101|133->104|133->104|133->104|136->107|136->107|136->107|136->107|136->107|136->107|139->110|139->110|139->110|139->110|139->110|139->110|142->113|147->118|148->119
                    -- GENERATED --
                */
            