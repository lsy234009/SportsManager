
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
object main extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template5[Html,String,Boolean,Lang,Html,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: Html, nav: String = "", showBar: Boolean = true,lang:Lang)(content: Html):play.api.templates.Html = {
        _display_ {import play.i18n._


Seq[Any](format.raw/*1.83*/("""
"""),format.raw/*3.1*/("""
"""),_display_(Seq[Any](/*4.2*/head(title, nav, showBar,lang)/*4.32*/ {_display_(Seq[Any](format.raw/*4.34*/("""
	        <div class="container">
	            """),_display_(Seq[Any](/*6.15*/if(flash.contains("success"))/*6.44*/ {_display_(Seq[Any](format.raw/*6.46*/("""
	       			<p class="alert alert-success">
	                   <button class="close" data-dismiss="alert" type="button">×</button>
	                    """),_display_(Seq[Any](/*9.23*/flash/*9.28*/.get("success"))),format.raw/*9.43*/("""
	                </p>
	            """)))})),format.raw/*11.15*/("""
	            """),_display_(Seq[Any](/*12.15*/content)),format.raw/*12.22*/("""
	        </div>
""")))})),format.raw/*14.2*/("""
"""))}
    }
    
    def render(title:Html,nav:String,showBar:Boolean,lang:Lang,content:Html): play.api.templates.Html = apply(title,nav,showBar,lang)(content)
    
    def f:((Html,String,Boolean,Lang) => (Html) => play.api.templates.Html) = (title,nav,showBar,lang) => (content) => apply(title,nav,showBar,lang)(content)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:42 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/main.scala.html
                    HASH: f9df7113167c8cc4ef2337c6a3612dc88326d5c1
                    MATRIX: 745->1|922->82|949->103|985->105|1023->135|1062->137|1145->185|1182->214|1221->216|1410->370|1423->375|1459->390|1528->427|1579->442|1608->449|1657->467
                    LINES: 26->1|30->1|31->3|32->4|32->4|32->4|34->6|34->6|34->6|37->9|37->9|37->9|39->11|40->12|40->12|42->14
                    -- GENERATED --
                */
            