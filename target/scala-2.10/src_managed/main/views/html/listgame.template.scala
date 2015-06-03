
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
object listgame extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template6[Page,String,String,String,Form[Game],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(currentPage: Page, currentSortBy: String, currentOrder: String, currentFilter: String,projectFrom: Form[Game],lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._

def /*35.2*/header/*35.8*/(key:String, title:String):play.api.templates.Html = {_display_(

Seq[Any](format.raw/*35.38*/("""
    <th class=""""),_display_(Seq[Any](/*36.17*/key/*36.20*/.replace(".","_"))),format.raw/*36.37*/(""" header """),_display_(Seq[Any](/*36.46*/if(currentSortBy == key){/*36.72*/{if(currentOrder == "asc") "headerSortDown" else "headerSortUp"}})),format.raw/*36.136*/("""">
        """),_display_(Seq[Any](/*37.10*/title)),format.raw/*37.15*/("""
    </th>
""")))};def /*11.2*/link/*11.6*/(newPage:Int, newSortBy:String) = {{
	var sortBy = currentSortBy
    var order = currentOrder
    
    if(newSortBy != null) {
        sortBy = newSortBy
        if(currentSortBy == newSortBy) {
            if(currentOrder == "asc") {
                order = "desc"
            } else {
                order = "asc"
            }
        } else {
            order = "asc"
        }
    }
    
    routes.ProjectAction.list(newPage, sortBy, order, currentFilter)
}};
Seq[Any](format.raw/*1.123*/("""
"""),format.raw/*6.1*/("""
"""),format.raw/*9.42*/("""

"""),format.raw/*29.2*/("""


"""),format.raw/*34.37*/("""
"""),format.raw/*39.2*/("""

"""),_display_(Seq[Any](/*41.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "game", showBar = true,lang)/*41.84*/ {_display_(Seq[Any](format.raw/*41.86*/("""

    """),_display_(Seq[Any](/*43.6*/if(flash.containsKey("success"))/*43.38*/ {_display_(Seq[Any](format.raw/*43.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*46.22*/Messages/*46.30*/.get(lang,"Done"))),format.raw/*46.47*/("""</strong> """),_display_(Seq[Any](/*46.58*/flash/*46.63*/.get("success"))),format.raw/*46.78*/("""
        </div>
    """)))})),format.raw/*48.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>比赛管理</strong>
	</div>
	
	<div id="form-actions">
		"""),_display_(Seq[Any](/*55.4*/dynamicRole(Application.ADMIN)/*55.34*/{_display_(Seq[Any](format.raw/*55.35*/("""
			<a class="btn btn-success pull-right" id="add" href=""""),_display_(Seq[Any](/*56.58*/routes/*56.64*/.GameAction.create())),format.raw/*56.84*/("""">"""),_display_(Seq[Any](/*56.87*/Messages/*56.95*/.get(lang,"Add_a_new_game"))),format.raw/*56.122*/("""</a>
		""")))})),format.raw/*57.4*/("""
	</div>
	
	 """),_display_(Seq[Any](/*60.4*/if(currentPage.getTotalRowCount == 0)/*60.41*/ {_display_(Seq[Any](format.raw/*60.43*/("""
        
        <div class="well">
            <em>"""),_display_(Seq[Any](/*63.18*/Messages/*63.26*/.get(lang,"Nothing_to_display"))),format.raw/*63.57*/("""</em>
        </div>
        
    """)))}/*66.7*/else/*66.12*/{_display_(Seq[Any](format.raw/*66.13*/("""
    	<table class="users table table-bordered table-striped table-hover">
            <thead>
                <tr>
                """),_display_(Seq[Any](/*70.18*/header("title",Messages.get(lang,"project_title")))),format.raw/*70.68*/("""
                """),_display_(Seq[Any](/*71.18*/header("title",Messages.get(lang,"game_start_time")))),format.raw/*71.70*/("""
               	"""),_display_(Seq[Any](/*72.18*/header("username",Messages.get(lang,"operation")))),format.raw/*72.67*/("""
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*77.18*/for(game <- currentPage.getGameList) yield /*77.54*/ {_display_(Seq[Any](format.raw/*77.56*/("""
                    <tr>
                        <td style="width:100px;">
                            """),_display_(Seq[Any](/*80.30*/game/*80.34*/.project.title)),format.raw/*80.48*/("""
                        </td>
                        
                        <td style="width:100px;">
                            """),_display_(Seq[Any](/*84.30*/game/*84.34*/.gameStartTime)),format.raw/*84.48*/("""
                        </td>
                        <td style="width:100px;">
                        <a href=""""),_display_(Seq[Any](/*87.35*/routes/*87.41*/.GameAction.info(game.id))),format.raw/*87.66*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*87.129*/Messages/*87.137*/.get(lang,"info"))),format.raw/*87.154*/("""</a>
                        		
                        """),_display_(Seq[Any](/*89.26*/dynamicRole(Application.ADMIN)/*89.56*/{_display_(Seq[Any](format.raw/*89.57*/("""
                        	
                        		<a href=""""),_display_(Seq[Any](/*91.37*/routes/*91.43*/.GameAction.edit(game.id))),format.raw/*91.68*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*91.131*/Messages/*91.139*/.get(lang,"update"))),format.raw/*91.158*/("""</a>
                        		<a href=""""),_display_(Seq[Any](/*92.37*/routes/*92.43*/.GameAction.delete(game.id))),format.raw/*92.70*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*92.133*/Messages/*92.141*/.get(lang,"delete"))),format.raw/*92.160*/("""</a>
                        	
                        """)))})),format.raw/*94.26*/("""
                        </td>
                    </tr>
                """)))})),format.raw/*97.18*/("""

            </tbody>
         </table>
         
         <div id="pagination" class="pagination pagination-right">
            <ul>
                """),_display_(Seq[Any](/*104.18*/if(currentPage.hasPrev)/*104.41*/ {_display_(Seq[Any](format.raw/*104.43*/("""
                    <li class="prev">
                        <a href=""""),_display_(Seq[Any](/*106.35*/link(currentPage.getPageIndex - 1, null))),format.raw/*106.75*/("""">&larr; """),_display_(Seq[Any](/*106.85*/Messages/*106.93*/.get(lang,"Previous"))),format.raw/*106.114*/("""</a>
                    </li>
                """)))}/*108.19*/else/*108.24*/{_display_(Seq[Any](format.raw/*108.25*/("""
                    <li class="prev disabled">
                        <a>&larr; """),_display_(Seq[Any](/*110.36*/Messages/*110.44*/.get(lang,"Previous"))),format.raw/*110.65*/("""</a>
                    </li>
                """)))})),format.raw/*112.18*/("""
                <li class="current">
                    <a>"""),_display_(Seq[Any](/*114.25*/Messages/*114.33*/.get(lang,"Displaying"))),format.raw/*114.56*/(""" """),_display_(Seq[Any](/*114.58*/currentPage/*114.69*/.getDisplayXtoYofZ())),format.raw/*114.89*/("""</a>
                </li>
                """),_display_(Seq[Any](/*116.18*/if(currentPage.hasNext)/*116.41*/ {_display_(Seq[Any](format.raw/*116.43*/("""
                    <li class="next">
                        <a href=""""),_display_(Seq[Any](/*118.35*/link(currentPage.getPageIndex + 1, null))),format.raw/*118.75*/("""">"""),_display_(Seq[Any](/*118.78*/Messages/*118.86*/.get(lang,"Next"))),format.raw/*118.103*/(""" &rarr;</a>
                    </li>
                """)))}/*120.19*/else/*120.24*/{_display_(Seq[Any](format.raw/*120.25*/("""
                    <li class="next disabled">
                        <a>"""),_display_(Seq[Any](/*122.29*/Messages/*122.37*/.get(lang,"Next"))),format.raw/*122.54*/(""" &rarr;</a>
                    </li>
                """)))})),format.raw/*124.18*/("""
            </ul>
        </div>
    
    """)))})),format.raw/*128.6*/("""
	
""")))})),format.raw/*130.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,currentSortBy:String,currentOrder:String,currentFilter:String,projectFrom:Form[Game],lang:Lang): play.api.templates.Html = apply(currentPage,currentSortBy,currentOrder,currentFilter,projectFrom,lang)
    
    def f:((Page,String,String,String,Form[Game],Lang) => play.api.templates.Html) = (currentPage,currentSortBy,currentOrder,currentFilter,projectFrom,lang) => apply(currentPage,currentSortBy,currentOrder,currentFilter,projectFrom,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:41 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/listgame.scala.html
                    HASH: 91b4ea0413ea36cb2e7418094282093e3c29b8c0
                    MATRIX: 761->1|1039->961|1053->967|1147->997|1201->1015|1213->1018|1252->1035|1297->1044|1331->1070|1419->1134|1468->1147|1495->1152|1532->355|1544->359|2058->122|2086->221|2115->350|2146->842|2180->958|2209->1166|2249->1171|2340->1253|2380->1255|2424->1264|2465->1296|2505->1298|2688->1445|2705->1453|2744->1470|2791->1481|2805->1486|2842->1501|2896->1524|3038->1631|3077->1661|3116->1662|3211->1721|3226->1727|3268->1747|3307->1750|3324->1758|3374->1785|3414->1794|3466->1811|3512->1848|3552->1850|3645->1907|3662->1915|3715->1946|3771->1985|3784->1990|3823->1991|3996->2128|4068->2178|4123->2197|4197->2249|4252->2268|4323->2317|4447->2405|4499->2441|4539->2443|4683->2551|4696->2555|4732->2569|4907->2708|4920->2712|4956->2726|5110->2844|5125->2850|5172->2875|5272->2938|5290->2946|5330->2963|5425->3022|5464->3052|5503->3053|5604->3118|5619->3124|5666->3149|5766->3212|5784->3220|5826->3239|5904->3281|5919->3287|5968->3314|6068->3377|6086->3385|6128->3404|6218->3462|6327->3539|6523->3698|6556->3721|6597->3723|6709->3798|6772->3838|6819->3848|6837->3856|6882->3877|6952->3928|6966->3933|7006->3934|7128->4019|7146->4027|7190->4048|7273->4098|7374->4162|7392->4170|7438->4193|7477->4195|7498->4206|7541->4226|7624->4272|7657->4295|7698->4297|7810->4372|7873->4412|7913->4415|7931->4423|7972->4440|8049->4498|8063->4503|8103->4504|8218->4582|8236->4590|8276->4607|8366->4664|8446->4712|8484->4718
                    LINES: 26->1|35->35|35->35|37->35|38->36|38->36|38->36|38->36|38->36|38->36|39->37|39->37|41->11|41->11|60->1|61->6|62->9|64->29|67->34|68->39|70->41|70->41|70->41|72->43|72->43|72->43|75->46|75->46|75->46|75->46|75->46|75->46|77->48|84->55|84->55|84->55|85->56|85->56|85->56|85->56|85->56|85->56|86->57|89->60|89->60|89->60|92->63|92->63|92->63|95->66|95->66|95->66|99->70|99->70|100->71|100->71|101->72|101->72|106->77|106->77|106->77|109->80|109->80|109->80|113->84|113->84|113->84|116->87|116->87|116->87|116->87|116->87|116->87|118->89|118->89|118->89|120->91|120->91|120->91|120->91|120->91|120->91|121->92|121->92|121->92|121->92|121->92|121->92|123->94|126->97|133->104|133->104|133->104|135->106|135->106|135->106|135->106|135->106|137->108|137->108|137->108|139->110|139->110|139->110|141->112|143->114|143->114|143->114|143->114|143->114|143->114|145->116|145->116|145->116|147->118|147->118|147->118|147->118|147->118|149->120|149->120|149->120|151->122|151->122|151->122|153->124|157->128|159->130
                    -- GENERATED --
                */
            