
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
object signup_admin extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template6[Html,String,String,Boolean,Lang,Html,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: Html, nav: String = "", adminnav: String = "", showBar: Boolean = true,lang:Lang)(content: Html):play.api.templates.Html = {
        _display_ {import play.i18n._

import controllers._


Seq[Any](format.raw/*1.106*/("""
"""),format.raw/*4.1*/("""
"""),_display_(Seq[Any](/*5.2*/head(title, nav, showBar,lang)/*5.32*/ {_display_(Seq[Any](format.raw/*5.34*/("""
    <div class="container-fluid"style=" background-color: #eef1f2;">
		<div class="row-fluid" >
			
			<div class="span12" style="position: absolute;margin-left:162px;width:86.5%;">
				<div class="content" style="height:100%;" >
					"""),_display_(Seq[Any](/*11.7*/content)),format.raw/*11.14*/("""
				</div>
			</div>
		</div>
	</div>
""")))})),format.raw/*16.2*/("""
"""))}
    }
    
    def render(title:Html,nav:String,adminnav:String,showBar:Boolean,lang:Lang,content:Html): play.api.templates.Html = apply(title,nav,adminnav,showBar,lang)(content)
    
    def f:((Html,String,String,Boolean,Lang) => (Html) => play.api.templates.Html) = (title,nav,adminnav,showBar,lang) => (content) => apply(title,nav,adminnav,showBar,lang)(content)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:42 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/signup_admin.scala.html
                    HASH: 9840e33d81fdd379b9ded7948aa1b3fe1a0593c2
                    MATRIX: 760->1|985->105|1013->151|1050->154|1088->184|1127->186|1405->429|1434->436|1510->481
                    LINES: 26->1|32->1|33->4|34->5|34->5|34->5|40->11|40->11|45->16
                    -- GENERATED --
                */
            