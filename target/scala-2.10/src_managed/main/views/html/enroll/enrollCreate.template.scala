
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
object enrollCreate extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template3[Page,Form[Game],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(currentPage: Page, projectFrom: Form[Game],lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._

def /*17.2*/header/*17.8*/(key:String, title:String):play.api.templates.Html = {_display_(

Seq[Any](format.raw/*17.38*/("""
    <th class="title header">
        """),_display_(Seq[Any](/*19.10*/title)),format.raw/*19.15*/("""
    </th>
""")))};
Seq[Any](format.raw/*1.56*/("""
"""),format.raw/*6.1*/("""
"""),format.raw/*9.42*/("""




"""),format.raw/*16.37*/("""
"""),format.raw/*21.2*/("""

"""),_display_(Seq[Any](/*23.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "enroll", showBar = true,lang)/*23.86*/ {_display_(Seq[Any](format.raw/*23.88*/("""

	<script type="text/javascript">
		function submitForm() """),format.raw/*26.25*/("""{"""),format.raw/*26.26*/("""
			
			
			
			//$("form").submit();
			
			
			
			var game_ids = $("input:checked");
			var ids =new Array();
			var s="";
			if(game_ids.length > 0) """),format.raw/*37.28*/("""{"""),format.raw/*37.29*/("""
				s = game_ids[0].value;
			"""),format.raw/*39.4*/("""}"""),format.raw/*39.5*/("""
			
			for(var i = 1; i< game_ids.length; i++) """),format.raw/*41.44*/("""{"""),format.raw/*41.45*/("""
				ids.push(game_ids[i].value);
				s = s +"," + game_ids[i].value;
			"""),format.raw/*44.4*/("""}"""),format.raw/*44.5*/("""
			
			$.post("/enroll/save",
					"""),format.raw/*47.6*/("""{"""),format.raw/*47.7*/("""game_id:s"""),format.raw/*47.16*/("""}"""),format.raw/*47.17*/(""",
					function(data,status) """),format.raw/*48.28*/("""{"""),format.raw/*48.29*/("""
						if(status == "success") """),format.raw/*49.31*/("""{"""),format.raw/*49.32*/("""
							alert("ok");
						"""),format.raw/*51.7*/("""}"""),format.raw/*51.8*/("""else"""),format.raw/*51.12*/("""{"""),format.raw/*51.13*/("""
							
						"""),format.raw/*53.7*/("""}"""),format.raw/*53.8*/("""
					"""),format.raw/*54.6*/("""}"""),format.raw/*54.7*/(""");
		"""),format.raw/*55.3*/("""}"""),format.raw/*55.4*/("""
		
	
	
	</script>

    """),_display_(Seq[Any](/*61.6*/if(flash.containsKey("success"))/*61.38*/ {_display_(Seq[Any](format.raw/*61.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*64.22*/Messages/*64.30*/.get(lang,"Done"))),format.raw/*64.47*/("""</strong> """),_display_(Seq[Any](/*64.58*/flash/*64.63*/.get("success"))),format.raw/*64.78*/("""
        </div>
    """)))})),format.raw/*66.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>比赛报名</strong>
	</div>
	
	<div id="form-actions">
		<a class="btn btn-success pull-right" id="add" href="javascript:submitForm()">"""),_display_(Seq[Any](/*73.82*/Messages/*73.90*/.get(lang,"select_od_and_save"))),format.raw/*73.121*/("""</a>
	</div>
	
	 """),_display_(Seq[Any](/*76.4*/if(currentPage.getTotalRowCount == 0)/*76.41*/ {_display_(Seq[Any](format.raw/*76.43*/("""
        <div class="well">
            <em>"""),_display_(Seq[Any](/*78.18*/Messages/*78.26*/.get(lang,"Nothing_to_display"))),format.raw/*78.57*/("""</em>
        </div>
    """)))}/*80.7*/else/*80.12*/{_display_(Seq[Any](format.raw/*80.13*/("""
    	
    	"""),_display_(Seq[Any](/*82.7*/form(routes.EnrollAction.save, 'class -> "form-horizontal", 'enctype -> "multipart/form-data")/*82.101*/ {_display_(Seq[Any](format.raw/*82.103*/("""
    	<table class="users table table-bordered table-striped table-hover">
            <thead>
                <tr>
                """),_display_(Seq[Any](/*86.18*/header("select",Messages.get(lang,"select_game")))),format.raw/*86.67*/("""
                """),_display_(Seq[Any](/*87.18*/header("title",Messages.get(lang,"project_title")))),format.raw/*87.68*/("""
                """),_display_(Seq[Any](/*88.18*/header("title",Messages.get(lang,"game_start_time")))),format.raw/*88.70*/("""
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*93.18*/for(game <- currentPage.getGameList) yield /*93.54*/ {_display_(Seq[Any](format.raw/*93.56*/("""
                    <tr>
                    	<td>
                    		<input type="checkbox" name="game_id" value=""""),_display_(Seq[Any](/*96.69*/game/*96.73*/.id)),format.raw/*96.76*/(""""><br>
                    	</td>
                    
                        <td >
                            """),_display_(Seq[Any](/*100.30*/game/*100.34*/.project.title)),format.raw/*100.48*/("""
                        </td>
                        
                        <td >
                            """),_display_(Seq[Any](/*104.30*/game/*104.34*/.gameStartTime)),format.raw/*104.48*/("""
                        </td>
                    </tr>
                """)))})),format.raw/*107.18*/("""

            </tbody>
         </table>
         """)))})),format.raw/*111.11*/("""
    """)))})),format.raw/*112.6*/("""
""")))})),format.raw/*113.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,projectFrom:Form[Game],lang:Lang): play.api.templates.Html = apply(currentPage,projectFrom,lang)
    
    def f:((Page,Form[Game],Lang) => play.api.templates.Html) = (currentPage,projectFrom,lang) => apply(currentPage,projectFrom,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:43 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/enroll/enrollCreate.scala.html
                    HASH: 8930cdf6a3642843545a5a180378945e94c429b6
                    MATRIX: 751->1|962->406|976->412|1070->442|1148->484|1175->489|1228->55|1256->154|1285->283|1323->403|1352->503|1392->508|1485->592|1525->594|1615->656|1644->657|1836->821|1865->822|1925->855|1953->856|2031->906|2060->907|2163->983|2191->984|2257->1023|2285->1024|2322->1033|2351->1034|2409->1064|2438->1065|2498->1097|2527->1098|2583->1127|2611->1128|2643->1132|2672->1133|2716->1150|2744->1151|2778->1158|2806->1159|2839->1165|2867->1166|2932->1196|2973->1228|3013->1230|3196->1377|3213->1385|3252->1402|3299->1413|3313->1418|3350->1433|3404->1456|3625->1641|3642->1649|3696->1680|3752->1701|3798->1738|3838->1740|3921->1787|3938->1795|3991->1826|4037->1855|4050->1860|4089->1861|4139->1876|4243->1970|4284->1972|4457->2109|4528->2158|4583->2177|4655->2227|4710->2246|4784->2298|4908->2386|4960->2422|5000->2424|5159->2547|5172->2551|5197->2554|5352->2672|5366->2676|5403->2690|5559->2809|5573->2813|5610->2827|5720->2904|5808->2959|5847->2966|5882->2969
                    LINES: 26->1|35->17|35->17|37->17|39->19|39->19|42->1|43->6|44->9|49->16|50->21|52->23|52->23|52->23|55->26|55->26|66->37|66->37|68->39|68->39|70->41|70->41|73->44|73->44|76->47|76->47|76->47|76->47|77->48|77->48|78->49|78->49|80->51|80->51|80->51|80->51|82->53|82->53|83->54|83->54|84->55|84->55|90->61|90->61|90->61|93->64|93->64|93->64|93->64|93->64|93->64|95->66|102->73|102->73|102->73|105->76|105->76|105->76|107->78|107->78|107->78|109->80|109->80|109->80|111->82|111->82|111->82|115->86|115->86|116->87|116->87|117->88|117->88|122->93|122->93|122->93|125->96|125->96|125->96|129->100|129->100|129->100|133->104|133->104|133->104|136->107|140->111|141->112|142->113
                    -- GENERATED --
                */
            