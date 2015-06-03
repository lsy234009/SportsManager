
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
object head extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template5[Html,String,Boolean,Lang,Html,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: Html, nav: String = "", showBar: Boolean = true,lang: Lang)(content: Html):play.api.templates.Html = {
        _display_ {import play.i18n._


Seq[Any](format.raw/*1.84*/("""
"""),format.raw/*3.1*/("""<!DOCTYPE html>
<html>
    <head>
    	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <title>Sports-"""),_display_(Seq[Any](/*7.24*/title)),format.raw/*7.29*/("""</title>
         <meta http-equiv="Content-Type" content="text/html; charset=gb2312"/>
        <link rel="stylesheet" media="screen" href=""""),_display_(Seq[Any](/*9.54*/routes/*9.60*/.Assets.at("css/buttons.css"))),format.raw/*9.89*/("""">
        <link rel="stylesheet" media="screen" href=""""),_display_(Seq[Any](/*10.54*/routes/*10.60*/.Assets.at("css/bootstrap-responsive.min.css"))),format.raw/*10.106*/("""">
        <link rel="stylesheet" media="screen" href=""""),_display_(Seq[Any](/*11.54*/routes/*11.60*/.Assets.at("css/main.css"))),format.raw/*11.86*/("""">
        <link rel="stylesheet" media="screen" href=""""),_display_(Seq[Any](/*12.54*/routes/*12.60*/.Assets.at("script/uploadify-3.2.1/uploadify.css"))),format.raw/*12.110*/("""">
        <link rel="stylesheet" media="screen" href=""""),_display_(Seq[Any](/*13.54*/routes/*13.60*/.Assets.at("css/bootstrap.min.css"))),format.raw/*13.95*/("""">
        <script src=""""),_display_(Seq[Any](/*14.23*/routes/*14.29*/.Assets.at("js/jquery-1.7.1.min.js"))),format.raw/*14.65*/("""" type="text/javascript"></script>
        <script src=""""),_display_(Seq[Any](/*15.23*/routes/*15.29*/.Assets.at("js/bootstrap.min.js"))),format.raw/*15.62*/("""" type="text/javascript"></script>
        <script src=""""),_display_(Seq[Any](/*16.23*/routes/*16.29*/.Assets.at("date/WdatePicker.js"))),format.raw/*16.62*/("""" type="text/javascript"></script>
        
        
        <script src=""""),_display_(Seq[Any](/*19.23*/routes/*19.29*/.Assets.at("js/common.js"))),format.raw/*19.55*/("""" type="text/javascript"></script>
        
        <script type="text/javascript" src=""""),_display_(Seq[Any](/*21.46*/routes/*21.52*/.Assets.at("script/swfobject.js"))),format.raw/*21.85*/(""""></script>
		<script type="text/javascript">
	     document.write("<script type='text/javascript' "  
	             + "src='/assets/script/uploadify-3.2.1/jquery.uploadify.min.js?" + new Date()  
	             + "'></s" + "cript>"); 
		</script>
    </head>
    <body>
    """),_display_(Seq[Any](/*29.6*/if(showBar == true)/*29.25*/{_display_(Seq[Any](format.raw/*29.26*/("""
  <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="">"""),_display_(Seq[Any](/*38.37*/Messages/*38.45*/.get(lang,"systitle"))),format.raw/*38.66*/("""</a>
          <div class="nav-collapse">
            <ul class="nav pull-right">
	            <li class="divider-vertical"></li>
	            <li class="dropdown">
	            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
	                """),_display_(Seq[Any](/*44.19*/session/*44.26*/.get(Application.USER_NAME))),format.raw/*44.53*/("""
	             <b class="caret"></b></a>
	             	 <ul class="dropdown-menu">
		                <li class=""><a href=""""),_display_(Seq[Any](/*47.42*/routes/*47.48*/.Application.logout())),format.raw/*47.69*/("""">"""),_display_(Seq[Any](/*47.72*/Messages/*47.80*/.get(lang,"Logout"))),format.raw/*47.99*/("""</a></li>
		             </ul>
	            </li>
            </ul>
            <ul class="nav pull-right">
	            <li class="divider-vertical"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>      
 """)))})),format.raw/*58.3*/("""
"""),_display_(Seq[Any](/*59.2*/content)),format.raw/*59.9*/(""" 
    </body>
</html>
"""))}
    }
    
    def render(title:Html,nav:String,showBar:Boolean,lang:Lang,content:Html): play.api.templates.Html = apply(title,nav,showBar,lang)(content)
    
    def f:((Html,String,Boolean,Lang) => (Html) => play.api.templates.Html) = (title,nav,showBar,lang) => (content) => apply(title,nav,showBar,lang)(content)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:41 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/head.scala.html
                    HASH: dc1cafefe80bd787ed2fe2a732dd79f324c2a6c1
                    MATRIX: 745->1|923->83|950->104|1117->236|1143->241|1319->382|1333->388|1383->417|1475->473|1490->479|1559->525|1651->581|1666->587|1714->613|1806->669|1821->675|1894->725|1986->781|2001->787|2058->822|2119->847|2134->853|2192->889|2285->946|2300->952|2355->985|2448->1042|2463->1048|2518->1081|2629->1156|2644->1162|2692->1188|2817->1277|2832->1283|2887->1316|3197->1591|3225->1610|3264->1611|3695->2006|3712->2014|3755->2035|4047->2291|4063->2298|4112->2325|4273->2450|4288->2456|4331->2477|4370->2480|4387->2488|4428->2507|4697->2745|4734->2747|4762->2754
                    LINES: 26->1|30->1|31->3|35->7|35->7|37->9|37->9|37->9|38->10|38->10|38->10|39->11|39->11|39->11|40->12|40->12|40->12|41->13|41->13|41->13|42->14|42->14|42->14|43->15|43->15|43->15|44->16|44->16|44->16|47->19|47->19|47->19|49->21|49->21|49->21|57->29|57->29|57->29|66->38|66->38|66->38|72->44|72->44|72->44|75->47|75->47|75->47|75->47|75->47|75->47|86->58|87->59|87->59
                    -- GENERATED --
                */
            