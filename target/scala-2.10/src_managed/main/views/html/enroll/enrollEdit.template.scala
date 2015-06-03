
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
object enrollEdit extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template4[Page,Form[Game],List[Enroll],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(currentPage: Page, projectFrom: Form[Game],enrollList:List[Enroll], lang:Lang):play.api.templates.Html = {
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
Seq[Any](format.raw/*1.81*/("""
"""),format.raw/*6.1*/("""
"""),format.raw/*9.42*/("""


"""),format.raw/*14.37*/("""
"""),format.raw/*19.2*/("""

"""),_display_(Seq[Any](/*21.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "game_enroll", showBar = true,lang)/*21.91*/ {_display_(Seq[Any](format.raw/*21.93*/("""

	<script type="text/javascript">
		function submitForm() """),format.raw/*24.25*/("""{"""),format.raw/*24.26*/("""
			
			
			
			//$("form").submit();
			
			
			
			var game_ids = $("input:checked");
			var ids =new Array();
			var s="";
			if(game_ids.length > 0) """),format.raw/*35.28*/("""{"""),format.raw/*35.29*/("""
				s = game_ids[0].value;
			"""),format.raw/*37.4*/("""}"""),format.raw/*37.5*/("""
			
			for(var i = 1; i< game_ids.length; i++) """),format.raw/*39.44*/("""{"""),format.raw/*39.45*/("""
				ids.push(game_ids[i].value);
				s = s +"," + game_ids[i].value;
			"""),format.raw/*42.4*/("""}"""),format.raw/*42.5*/("""
			
			$.post("/enroll/update",
					"""),format.raw/*45.6*/("""{"""),format.raw/*45.7*/("""game_id:s"""),format.raw/*45.16*/("""}"""),format.raw/*45.17*/(""",
					function(data,status) """),format.raw/*46.28*/("""{"""),format.raw/*46.29*/("""
						if(status == "success") """),format.raw/*47.31*/("""{"""),format.raw/*47.32*/("""
							alert("ok");
						"""),format.raw/*49.7*/("""}"""),format.raw/*49.8*/("""else"""),format.raw/*49.12*/("""{"""),format.raw/*49.13*/("""
							
						"""),format.raw/*51.7*/("""}"""),format.raw/*51.8*/("""
					"""),format.raw/*52.6*/("""}"""),format.raw/*52.7*/(""");
		"""),format.raw/*53.3*/("""}"""),format.raw/*53.4*/("""
		
	
	
	</script>

    """),_display_(Seq[Any](/*59.6*/if(flash.containsKey("success"))/*59.38*/ {_display_(Seq[Any](format.raw/*59.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*62.22*/Messages/*62.30*/.get(lang,"Done"))),format.raw/*62.47*/("""</strong> """),_display_(Seq[Any](/*62.58*/flash/*62.63*/.get("success"))),format.raw/*62.78*/("""
        </div>
    """)))})),format.raw/*64.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>比赛报名</strong>
	</div>
	
	<div id="form-actions">
		<a class="btn btn-success pull-right" id="add" href="javascript:submitForm()">"""),_display_(Seq[Any](/*71.82*/Messages/*71.90*/.get(lang,"update_select_game"))),format.raw/*71.121*/("""</a>
	</div>
	
	 """),_display_(Seq[Any](/*74.4*/if(currentPage.getTotalRowCount == 0)/*74.41*/ {_display_(Seq[Any](format.raw/*74.43*/("""
        <div class="well">
            <em>"""),_display_(Seq[Any](/*76.18*/Messages/*76.26*/.get(lang,"Nothing_to_display"))),format.raw/*76.57*/("""</em>
        </div>
    """)))}/*78.7*/else/*78.12*/{_display_(Seq[Any](format.raw/*78.13*/("""
    	<table class="users table table-bordered table-striped table-hover">
            <thead>
                <tr>
                """),_display_(Seq[Any](/*82.18*/header("select",Messages.get(lang,"select_game")))),format.raw/*82.67*/("""
                """),_display_(Seq[Any](/*83.18*/header("title",Messages.get(lang,"project_title")))),format.raw/*83.68*/("""
                """),_display_(Seq[Any](/*84.18*/header("title",Messages.get(lang,"game_start_time")))),format.raw/*84.70*/("""
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*89.18*/for(game <- currentPage.getGameList) yield /*89.54*/ {_display_(Seq[Any](format.raw/*89.56*/("""
                    <tr>
                    	<td>
                    		
                    		"""),_display_(Seq[Any](/*93.24*/if(enrollList.exists(_.game.id == game.id))/*93.67*/{_display_(Seq[Any](format.raw/*93.68*/("""
                    			<input type="checkbox" name="game_id" checked value=""""),_display_(Seq[Any](/*94.78*/game/*94.82*/.id)),format.raw/*94.85*/(""""><br>
                    		""")))}/*95.24*/else/*95.28*/{_display_(Seq[Any](format.raw/*95.29*/("""
                    			<input type="checkbox" name="game_id" value=""""),_display_(Seq[Any](/*96.70*/game/*96.74*/.id)),format.raw/*96.77*/(""""><br>
                    		""")))})),format.raw/*97.24*/("""
                    	</td>
                    
                        <td >
                            """),_display_(Seq[Any](/*101.30*/game/*101.34*/.project.title)),format.raw/*101.48*/("""
                        </td>
                        
                        <td >
                            """),_display_(Seq[Any](/*105.30*/game/*105.34*/.gameStartTime)),format.raw/*105.48*/("""
                        </td>
                    </tr>
                """)))})),format.raw/*108.18*/("""

            </tbody>
         </table>
         
         
    """)))})),format.raw/*114.6*/("""
""")))})),format.raw/*115.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,projectFrom:Form[Game],enrollList:List[Enroll],lang:Lang): play.api.templates.Html = apply(currentPage,projectFrom,enrollList,lang)
    
    def f:((Page,Form[Game],List[Enroll],Lang) => play.api.templates.Html) = (currentPage,projectFrom,enrollList,lang) => apply(currentPage,projectFrom,enrollList,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 21:41:48 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/enroll/enrollEdit.scala.html
                    HASH: 0070c97b49741066b6abff8fee9a1821eba42333
                    MATRIX: 762->1|998->427|1012->433|1106->463|1185->506|1212->511|1265->80|1293->179|1322->308|1356->424|1385->525|1425->530|1523->619|1563->621|1653->683|1682->684|1874->848|1903->849|1963->882|1991->883|2069->933|2098->934|2201->1010|2229->1011|2297->1052|2325->1053|2362->1062|2391->1063|2449->1093|2478->1094|2538->1126|2567->1127|2623->1156|2651->1157|2683->1161|2712->1162|2756->1179|2784->1180|2818->1187|2846->1188|2879->1194|2907->1195|2973->1226|3014->1258|3054->1260|3237->1407|3254->1415|3293->1432|3340->1443|3354->1448|3391->1463|3445->1486|3666->1671|3683->1679|3737->1710|3793->1731|3839->1768|3879->1770|3962->1817|3979->1825|4032->1856|4078->1885|4091->1890|4130->1891|4303->2028|4374->2077|4429->2096|4501->2146|4556->2165|4630->2217|4754->2305|4806->2341|4846->2343|4984->2445|5036->2488|5075->2489|5190->2568|5203->2572|5228->2575|5278->2606|5291->2610|5330->2611|5437->2682|5450->2686|5475->2689|5538->2720|5687->2832|5701->2836|5738->2850|5894->2969|5908->2973|5945->2987|6055->3064|6159->3136|6194->3139
                    LINES: 26->1|35->15|35->15|37->15|39->17|39->17|42->1|43->6|44->9|47->14|48->19|50->21|50->21|50->21|53->24|53->24|64->35|64->35|66->37|66->37|68->39|68->39|71->42|71->42|74->45|74->45|74->45|74->45|75->46|75->46|76->47|76->47|78->49|78->49|78->49|78->49|80->51|80->51|81->52|81->52|82->53|82->53|88->59|88->59|88->59|91->62|91->62|91->62|91->62|91->62|91->62|93->64|100->71|100->71|100->71|103->74|103->74|103->74|105->76|105->76|105->76|107->78|107->78|107->78|111->82|111->82|112->83|112->83|113->84|113->84|118->89|118->89|118->89|122->93|122->93|122->93|123->94|123->94|123->94|124->95|124->95|124->95|125->96|125->96|125->96|126->97|130->101|130->101|130->101|134->105|134->105|134->105|137->108|143->114|144->115
                    -- GENERATED --
                */
            