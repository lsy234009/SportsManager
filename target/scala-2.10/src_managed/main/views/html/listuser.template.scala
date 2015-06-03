
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
object listuser extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template6[Page,String,String,String,Form[User],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(currentPage: Page, currentSortBy: String, currentOrder: String, currentFilter: String,userFrom: Form[User],lang:Lang):play.api.templates.Html = {
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
    
    routes.UserAction.list(newPage, sortBy, order, currentFilter)
}};
Seq[Any](format.raw/*1.120*/("""
"""),format.raw/*6.1*/("""
"""),format.raw/*9.42*/("""

"""),format.raw/*29.2*/("""


"""),format.raw/*34.37*/("""
"""),format.raw/*39.2*/("""

"""),_display_(Seq[Any](/*41.2*/admin_main(Html("UserList"), nav = "admin",adminnav = "user", showBar = true,lang)/*41.84*/ {_display_(Seq[Any](format.raw/*41.86*/("""

    """),_display_(Seq[Any](/*43.6*/if(flash.containsKey("success"))/*43.38*/ {_display_(Seq[Any](format.raw/*43.40*/("""
        <div class="alert alert-success">
            <button class="close" data-dismiss="alert" type="button">×</button>
            <strong>"""),_display_(Seq[Any](/*46.22*/Messages/*46.30*/.get(lang,"Done"))),format.raw/*46.47*/("""</strong> """),_display_(Seq[Any](/*46.58*/flash/*46.63*/.get("success"))),format.raw/*46.78*/("""
        </div>
    """)))})),format.raw/*48.6*/(""" 

 	<div class="alert alert-info">
	  	<strong>用户管理</strong>
	</div>
	
	<div id="form-actions">
		"""),_display_(Seq[Any](/*55.4*/dynamicRole(Application.ADMIN)/*55.34*/{_display_(Seq[Any](format.raw/*55.35*/("""
			<a class="btn btn-success pull-right" id="add" href=""""),_display_(Seq[Any](/*56.58*/routes/*56.64*/.UserAction.create())),format.raw/*56.84*/("""">"""),_display_(Seq[Any](/*56.87*/Messages/*56.95*/.get(lang,"Add_a_new_user"))),format.raw/*56.122*/("""</a>
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
                """),_display_(Seq[Any](/*70.18*/header("username",Messages.get(lang,"user_name")))),format.raw/*70.67*/("""
               	"""),_display_(Seq[Any](/*71.18*/header("username",Messages.get(lang,"user_group")))),format.raw/*71.68*/("""
               	"""),_display_(Seq[Any](/*72.18*/dynamicRole(Application.ADMIN)/*72.48*/{_display_(Seq[Any](format.raw/*72.49*/("""
               	  	"""),_display_(Seq[Any](/*73.21*/header("username",Messages.get(lang,"operation")))),format.raw/*73.70*/("""
               	""")))})),format.raw/*74.18*/("""
              
                </tr>
            </thead>
             <tbody>

                """),_display_(Seq[Any](/*80.18*/for(user <- currentPage.getUserList) yield /*80.54*/ {_display_(Seq[Any](format.raw/*80.56*/("""
                    <tr>
                        <td style="width:100px;">
                            """),_display_(Seq[Any](/*83.30*/user/*83.34*/.username)),format.raw/*83.43*/("""
                        </td>
                        <td style="width:100px;">
                            """),_display_(Seq[Any](/*86.30*/User/*86.34*/.userGroup().get(user.typeId))),format.raw/*86.63*/("""
                        </td>
                        
                        """),_display_(Seq[Any](/*89.26*/dynamicRole(Application.ADMIN)/*89.56*/{_display_(Seq[Any](format.raw/*89.57*/("""
                        	<td style="width:100px;">
                        		<a href=""""),_display_(Seq[Any](/*91.37*/routes/*91.43*/.UserAction.edit(user.id))),format.raw/*91.68*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*91.131*/Messages/*91.139*/.get(lang,"update"))),format.raw/*91.158*/("""</a>
                        		<a href=""""),_display_(Seq[Any](/*92.37*/routes/*92.43*/.UserAction.delete(user.id))),format.raw/*92.70*/("""" class="btn btn-primary" style="width:120px;margin-top:5px;">"""),_display_(Seq[Any](/*92.133*/Messages/*92.141*/.get(lang,"delete"))),format.raw/*92.160*/("""</a>
                        	</td>
                        """)))})),format.raw/*94.26*/("""
                    </tr>
                """)))})),format.raw/*96.18*/("""

            </tbody>
         </table>
         
         <div id="pagination" class="pagination pagination-right">
            <ul>
                """),_display_(Seq[Any](/*103.18*/if(currentPage.hasPrev)/*103.41*/ {_display_(Seq[Any](format.raw/*103.43*/("""
                    <li class="prev">
                        <a href=""""),_display_(Seq[Any](/*105.35*/link(currentPage.getPageIndex - 1, null))),format.raw/*105.75*/("""">&larr; """),_display_(Seq[Any](/*105.85*/Messages/*105.93*/.get(lang,"Previous"))),format.raw/*105.114*/("""</a>
                    </li>
                """)))}/*107.19*/else/*107.24*/{_display_(Seq[Any](format.raw/*107.25*/("""
                    <li class="prev disabled">
                        <a>&larr; """),_display_(Seq[Any](/*109.36*/Messages/*109.44*/.get(lang,"Previous"))),format.raw/*109.65*/("""</a>
                    </li>
                """)))})),format.raw/*111.18*/("""
                <li class="current">
                    <a>"""),_display_(Seq[Any](/*113.25*/Messages/*113.33*/.get(lang,"Displaying"))),format.raw/*113.56*/(""" """),_display_(Seq[Any](/*113.58*/currentPage/*113.69*/.getDisplayXtoYofZ())),format.raw/*113.89*/("""</a>
                </li>
                """),_display_(Seq[Any](/*115.18*/if(currentPage.hasNext)/*115.41*/ {_display_(Seq[Any](format.raw/*115.43*/("""
                    <li class="next">
                        <a href=""""),_display_(Seq[Any](/*117.35*/link(currentPage.getPageIndex + 1, null))),format.raw/*117.75*/("""">"""),_display_(Seq[Any](/*117.78*/Messages/*117.86*/.get(lang,"Next"))),format.raw/*117.103*/(""" &rarr;</a>
                    </li>
                """)))}/*119.19*/else/*119.24*/{_display_(Seq[Any](format.raw/*119.25*/("""
                    <li class="next disabled">
                        <a>"""),_display_(Seq[Any](/*121.29*/Messages/*121.37*/.get(lang,"Next"))),format.raw/*121.54*/(""" &rarr;</a>
                    </li>
                """)))})),format.raw/*123.18*/("""
            </ul>
        </div>
    
    """)))})),format.raw/*127.6*/("""
	
""")))})),format.raw/*129.2*/("""

            
"""))}
    }
    
    def render(currentPage:Page,currentSortBy:String,currentOrder:String,currentFilter:String,userFrom:Form[User],lang:Lang): play.api.templates.Html = apply(currentPage,currentSortBy,currentOrder,currentFilter,userFrom,lang)
    
    def f:((Page,String,String,String,Form[User],Lang) => play.api.templates.Html) = (currentPage,currentSortBy,currentOrder,currentFilter,userFrom,lang) => apply(currentPage,currentSortBy,currentOrder,currentFilter,userFrom,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:42 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/listuser.scala.html
                    HASH: 8f377892ea700967d7608981231517501914b9f6
                    MATRIX: 761->1|1032->921|1046->927|1140->957|1193->974|1205->977|1244->994|1289->1003|1323->1029|1411->1093|1459->1105|1486->1110|1521->342|1533->346|2026->119|2053->213|2081->339|2110->808|2141->919|2169->1122|2207->1125|2298->1207|2338->1209|2380->1216|2421->1248|2461->1250|2641->1394|2658->1402|2697->1419|2744->1430|2758->1435|2795->1450|2847->1471|2982->1571|3021->1601|3060->1602|3154->1660|3169->1666|3211->1686|3250->1689|3267->1697|3317->1724|3356->1732|3405->1746|3451->1783|3491->1785|3581->1839|3598->1847|3651->1878|3704->1914|3717->1919|3756->1920|3925->2053|3996->2102|4050->2120|4122->2170|4176->2188|4215->2218|4254->2219|4311->2240|4382->2289|4432->2307|4566->2405|4618->2441|4658->2443|4799->2548|4812->2552|4843->2561|4989->2671|5002->2675|5053->2704|5170->2785|5209->2815|5248->2816|5372->2904|5387->2910|5434->2935|5534->2998|5552->3006|5594->3025|5671->3066|5686->3072|5735->3099|5835->3162|5853->3170|5895->3189|5988->3250|6064->3294|6253->3446|6286->3469|6327->3471|6437->3544|6500->3584|6547->3594|6565->3602|6610->3623|6678->3672|6692->3677|6732->3678|6852->3761|6870->3769|6914->3790|6995->3838|7094->3900|7112->3908|7158->3931|7197->3933|7218->3944|7261->3964|7342->4008|7375->4031|7416->4033|7526->4106|7589->4146|7629->4149|7647->4157|7688->4174|7763->4230|7777->4235|7817->4236|7930->4312|7948->4320|7988->4337|8076->4392|8152->4436|8188->4440
                    LINES: 26->1|35->35|35->35|37->35|38->36|38->36|38->36|38->36|38->36|38->36|39->37|39->37|41->11|41->11|60->1|61->6|62->9|64->29|67->34|68->39|70->41|70->41|70->41|72->43|72->43|72->43|75->46|75->46|75->46|75->46|75->46|75->46|77->48|84->55|84->55|84->55|85->56|85->56|85->56|85->56|85->56|85->56|86->57|89->60|89->60|89->60|92->63|92->63|92->63|95->66|95->66|95->66|99->70|99->70|100->71|100->71|101->72|101->72|101->72|102->73|102->73|103->74|109->80|109->80|109->80|112->83|112->83|112->83|115->86|115->86|115->86|118->89|118->89|118->89|120->91|120->91|120->91|120->91|120->91|120->91|121->92|121->92|121->92|121->92|121->92|121->92|123->94|125->96|132->103|132->103|132->103|134->105|134->105|134->105|134->105|134->105|136->107|136->107|136->107|138->109|138->109|138->109|140->111|142->113|142->113|142->113|142->113|142->113|142->113|144->115|144->115|144->115|146->117|146->117|146->117|146->117|146->117|148->119|148->119|148->119|150->121|150->121|150->121|152->123|156->127|158->129
                    -- GENERATED --
                */
            