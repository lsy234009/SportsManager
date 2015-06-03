
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
object les_select extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template4[String,String,Map[String, String],String,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(name:String, current:String,map:Map[String, String], default:String =""):play.api.templates.Html = {
        _display_ {import controllers._

def /*4.2*/mySelest/*4.10*/(nameAndId:String, current:String,map:Map[String, String], default:String):play.api.templates.Html = {_display_(

Seq[Any](format.raw/*4.86*/("""
		<select name=""""),_display_(Seq[Any](/*5.18*/nameAndId)),format.raw/*5.27*/("""" id=""""),_display_(Seq[Any](/*5.34*/nameAndId)),format.raw/*5.43*/("""">
			"""),_display_(Seq[Any](/*6.5*/if(default.trim != "")/*6.27*/{_display_(Seq[Any](format.raw/*6.28*/("""
				<option value="">"""),_display_(Seq[Any](/*7.23*/default)),format.raw/*7.30*/("""</option>
			""")))})),format.raw/*8.5*/("""
			"""),_display_(Seq[Any](/*9.5*/for((k,v) <- map) yield /*9.22*/{_display_(Seq[Any](format.raw/*9.23*/("""
				"""),_display_(Seq[Any](/*10.6*/if(k.equals(current))/*10.27*/{_display_(Seq[Any](format.raw/*10.28*/("""
					<option value=""""),_display_(Seq[Any](/*11.22*/k)),format.raw/*11.23*/("""" selected>"""),_display_(Seq[Any](/*11.35*/v)),format.raw/*11.36*/("""</option>
				""")))}/*12.6*/else/*12.10*/{_display_(Seq[Any](format.raw/*12.11*/("""
					<option value=""""),_display_(Seq[Any](/*13.22*/k)),format.raw/*13.23*/("""">"""),_display_(Seq[Any](/*13.26*/v)),format.raw/*13.27*/("""</option>
				""")))})),format.raw/*14.6*/("""
		""")))})),format.raw/*15.4*/("""
		</select>
""")))};
Seq[Any](format.raw/*1.75*/("""
"""),format.raw/*3.1*/("""
"""),format.raw/*17.2*/("""

"""),_display_(Seq[Any](/*19.2*/mySelest(name, current, map, default))),format.raw/*19.39*/("""


	
	
	
	
	
	
	
	
	
	
	"""))}
    }
    
    def render(name:String,current:String,map:Map[String, String],default:String): play.api.templates.Html = apply(name,current,map,default)
    
    def f:((String,String,Map[String, String],String) => play.api.templates.Html) = (name,current,map,default) => apply(name,current,map,default)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:41 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/les_select.scala.html
                    HASH: 8f36f53b05c4de12b57c05c70e9491261b4b1f98
                    MATRIX: 762->1|917->102|933->110|1074->186|1128->205|1158->214|1200->221|1230->230|1272->238|1302->260|1340->261|1399->285|1427->292|1472->307|1512->313|1544->330|1582->331|1624->338|1654->359|1693->360|1752->383|1775->384|1823->396|1846->397|1880->413|1893->417|1932->418|1991->441|2014->442|2053->445|2076->446|2123->462|2159->467|2214->74|2242->99|2271->483|2311->488|2370->525
                    LINES: 26->1|29->4|29->4|31->4|32->5|32->5|32->5|32->5|33->6|33->6|33->6|34->7|34->7|35->8|36->9|36->9|36->9|37->10|37->10|37->10|38->11|38->11|38->11|38->11|39->12|39->12|39->12|40->13|40->13|40->13|40->13|41->14|42->15|45->1|46->3|47->17|49->19|49->19
                    -- GENERATED --
                */
            