
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
object listproject extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template6[Page,String,String,String,Form[Project],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(currentPage: Page, currentSortBy: String, currentOrder: String, currentFilter: String,projectFrom: Form[Project],lang:Lang):play.api.templates.Html = {
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
Seq[Any](format.raw/*1.126*/("""
"""),format.raw/*6.1*/("""
"""),format.raw/*9.42*/("""

"""),format.raw/*29.2*/("""


"""),format.raw/*34.37*/("""
"""),format.raw/*39.2*/("""

"""),_display_(Seq[Any](/*41.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "project", showBar = true,lang)/*41.87*/ {_display_(Seq[Any](format.raw/*41.89*/("""

    """),_display_(Seq[Any](/*43.6*/if(flash.containsKey("success"))/*43.38*/ {_display_(Seq[Any](format.raw/*43.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*46.22*/Messages/*46.30*/.get(lang,"Done"))),format.raw/*46.47*/("""</strong> """),_display_(Seq[Any](/*46.58*/flash/*46.63*/.get("success"))),format.raw/*46.78*/("""
        </div>
    """)))})),format.raw/*48.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>运动项目管理</strong>
	</div>
	
	<div id="form-actions">
		"""),_display_(Seq[Any](/*55.4*/dynamicRole(Application.ADMIN)/*55.34*/{_display_(Seq[Any](format.raw/*55.35*/("""
			<a class="btn btn-success pull-right" id="add" href=""""),_display_(Seq[Any](/*56.58*/routes/*56.64*/.ProjectAction.create())),format.raw/*56.87*/("""">"""),_display_(Seq[Any](/*56.90*/Messages/*56.98*/.get(lang,"Add_a_new_project"))),format.raw/*56.128*/("""</a>
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
               	"""),_display_(Seq[Any](/*71.18*/header("username",Messages.get(lang,"operation")))),format.raw/*71.67*/("""
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*76.18*/for(project <- currentPage.getProjectList) yield /*76.60*/ {_display_(Seq[Any](format.raw/*76.62*/("""
                    <tr>
                        <td style="width:100px;">
                            """),_display_(Seq[Any](/*79.30*/project/*79.37*/.title)),format.raw/*79.43*/("""
                        </td>
                        <td style="width:100px;">
                        <a href=""""),_display_(Seq[Any](/*82.35*/routes/*82.41*/.ProjectAction.info(project.id))),format.raw/*82.72*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*82.135*/Messages/*82.143*/.get(lang,"info"))),format.raw/*82.160*/("""</a>
                        		
                        """),_display_(Seq[Any](/*84.26*/dynamicRole(Application.ADMIN)/*84.56*/{_display_(Seq[Any](format.raw/*84.57*/("""
                        	
                        		<a href=""""),_display_(Seq[Any](/*86.37*/routes/*86.43*/.ProjectAction.edit(project.id))),format.raw/*86.74*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*86.137*/Messages/*86.145*/.get(lang,"update"))),format.raw/*86.164*/("""</a>
                        		<a href=""""),_display_(Seq[Any](/*87.37*/routes/*87.43*/.ProjectAction.delete(project.id))),format.raw/*87.76*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*87.139*/Messages/*87.147*/.get(lang,"delete"))),format.raw/*87.166*/("""</a>
                        	
                        """)))})),format.raw/*89.26*/("""
                        </td>
                    </tr>
                """)))})),format.raw/*92.18*/("""

            </tbody>
         </table>
         
         <div id="pagination" class="pagination pagination-right">
            <ul>
                """),_display_(Seq[Any](/*99.18*/if(currentPage.hasPrev)/*99.41*/ {_display_(Seq[Any](format.raw/*99.43*/("""
                    <li class="prev">
                        <a href=""""),_display_(Seq[Any](/*101.35*/link(currentPage.getPageIndex - 1, null))),format.raw/*101.75*/("""">&larr; """),_display_(Seq[Any](/*101.85*/Messages/*101.93*/.get(lang,"Previous"))),format.raw/*101.114*/("""</a>
                    </li>
                """)))}/*103.19*/else/*103.24*/{_display_(Seq[Any](format.raw/*103.25*/("""
                    <li class="prev disabled">
                        <a>&larr; """),_display_(Seq[Any](/*105.36*/Messages/*105.44*/.get(lang,"Previous"))),format.raw/*105.65*/("""</a>
                    </li>
                """)))})),format.raw/*107.18*/("""
                <li class="current">
                    <a>"""),_display_(Seq[Any](/*109.25*/Messages/*109.33*/.get(lang,"Displaying"))),format.raw/*109.56*/(""" """),_display_(Seq[Any](/*109.58*/currentPage/*109.69*/.getDisplayXtoYofZ())),format.raw/*109.89*/("""</a>
                </li>
                """),_display_(Seq[Any](/*111.18*/if(currentPage.hasNext)/*111.41*/ {_display_(Seq[Any](format.raw/*111.43*/("""
                    <li class="next">
                        <a href=""""),_display_(Seq[Any](/*113.35*/link(currentPage.getPageIndex + 1, null))),format.raw/*113.75*/("""">"""),_display_(Seq[Any](/*113.78*/Messages/*113.86*/.get(lang,"Next"))),format.raw/*113.103*/(""" &rarr;</a>
                    </li>
                """)))}/*115.19*/else/*115.24*/{_display_(Seq[Any](format.raw/*115.25*/("""
                    <li class="next disabled">
                        <a>"""),_display_(Seq[Any](/*117.29*/Messages/*117.37*/.get(lang,"Next"))),format.raw/*117.54*/(""" &rarr;</a>
                    </li>
                """)))})),format.raw/*119.18*/("""
            </ul>
        </div>
    
    """)))})),format.raw/*123.6*/("""
	
""")))})),format.raw/*125.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,currentSortBy:String,currentOrder:String,currentFilter:String,projectFrom:Form[Project],lang:Lang): play.api.templates.Html = apply(currentPage,currentSortBy,currentOrder,currentFilter,projectFrom,lang)
    
    def f:((Page,String,String,String,Form[Project],Lang) => play.api.templates.Html) = (currentPage,currentSortBy,currentOrder,currentFilter,projectFrom,lang) => apply(currentPage,currentSortBy,currentOrder,currentFilter,projectFrom,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:42 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/listproject.scala.html
                    HASH: 064760b92e843c6abd586a71a4206b2d56545e35
                    MATRIX: 767->1|1048->964|1062->970|1156->1000|1210->1018|1222->1021|1261->1038|1306->1047|1340->1073|1428->1137|1477->1150|1504->1155|1541->358|1553->362|2067->125|2095->224|2124->353|2155->845|2189->961|2218->1169|2258->1174|2352->1259|2392->1261|2436->1270|2477->1302|2517->1304|2700->1451|2717->1459|2756->1476|2803->1487|2817->1492|2854->1507|2908->1530|3052->1639|3091->1669|3130->1670|3225->1729|3240->1735|3285->1758|3324->1761|3341->1769|3394->1799|3434->1808|3486->1825|3532->1862|3572->1864|3665->1921|3682->1929|3735->1960|3791->1999|3804->2004|3843->2005|4016->2142|4088->2192|4143->2211|4214->2260|4338->2348|4396->2390|4436->2392|4580->2500|4596->2507|4624->2513|4778->2631|4793->2637|4846->2668|4946->2731|4964->2739|5004->2756|5099->2815|5138->2845|5177->2846|5278->2911|5293->2917|5346->2948|5446->3011|5464->3019|5506->3038|5584->3080|5599->3086|5654->3119|5754->3182|5772->3190|5814->3209|5904->3267|6013->3344|6208->3503|6240->3526|6280->3528|6392->3603|6455->3643|6502->3653|6520->3661|6565->3682|6635->3733|6649->3738|6689->3739|6811->3824|6829->3832|6873->3853|6956->3903|7057->3967|7075->3975|7121->3998|7160->4000|7181->4011|7224->4031|7307->4077|7340->4100|7381->4102|7493->4177|7556->4217|7596->4220|7614->4228|7655->4245|7732->4303|7746->4308|7786->4309|7901->4387|7919->4395|7959->4412|8049->4469|8129->4517|8167->4523
                    LINES: 26->1|35->35|35->35|37->35|38->36|38->36|38->36|38->36|38->36|38->36|39->37|39->37|41->11|41->11|60->1|61->6|62->9|64->29|67->34|68->39|70->41|70->41|70->41|72->43|72->43|72->43|75->46|75->46|75->46|75->46|75->46|75->46|77->48|84->55|84->55|84->55|85->56|85->56|85->56|85->56|85->56|85->56|86->57|89->60|89->60|89->60|92->63|92->63|92->63|95->66|95->66|95->66|99->70|99->70|100->71|100->71|105->76|105->76|105->76|108->79|108->79|108->79|111->82|111->82|111->82|111->82|111->82|111->82|113->84|113->84|113->84|115->86|115->86|115->86|115->86|115->86|115->86|116->87|116->87|116->87|116->87|116->87|116->87|118->89|121->92|128->99|128->99|128->99|130->101|130->101|130->101|130->101|130->101|132->103|132->103|132->103|134->105|134->105|134->105|136->107|138->109|138->109|138->109|138->109|138->109|138->109|140->111|140->111|140->111|142->113|142->113|142->113|142->113|142->113|144->115|144->115|144->115|146->117|146->117|146->117|148->119|152->123|154->125
                    -- GENERATED --
                */
            