
package views.html.user

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
object userEdit extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template3[Long,Form[User],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(id:Long,userForm: Form[User],lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.42*/("""
"""),format.raw/*6.1*/("""
"""),_display_(Seq[Any](/*7.2*/admin_main(Html("CreateUser"), nav = "admin",adminnav = "user",showBar = true, lang)/*7.86*/ {_display_(Seq[Any](format.raw/*7.88*/("""

	<script type="text/javascript">
		
		function checkUserForm()"""),format.raw/*11.27*/("""{"""),format.raw/*11.28*/("""
			var password = $('#password').val();
			var repassword = $('#repassword').val();
			
			if(password != repassword)"""),format.raw/*15.30*/("""{"""),format.raw/*15.31*/("""
				alert("密码不匹配，请重新输入");
				return;
			"""),format.raw/*18.4*/("""}"""),format.raw/*18.5*/("""
			
			document.forms[0].submit();
		"""),format.raw/*21.3*/("""}"""),format.raw/*21.4*/("""
	
	</script>
	
	"""),_display_(Seq[Any](/*25.3*/form(routes.UserAction.update(id), 'class -> "form-horizontal", 'enctype -> "multipart/form-data")/*25.101*/ {_display_(Seq[Any](format.raw/*25.103*/("""
		<legend>"""),_display_(Seq[Any](/*26.12*/Messages/*26.20*/.get(lang,"Add_a_new_advertise"))),format.raw/*26.52*/("""</legend>
		<fieldset>
			 <div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*29.47*/Messages/*29.55*/.get(lang,"input_user_name"))),format.raw/*29.83*/("""</label>
				<div class="controls">
			    	<input type="text" id="username" name="username" value=""""),_display_(Seq[Any](/*31.66*/userForm("username")/*31.86*/.value)),format.raw/*31.92*/("""">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*37.47*/Messages/*37.55*/.get(lang,"input_user_department"))),format.raw/*37.89*/("""</label>
				<div class="controls">
			    	<input type="text" id="department" name="department" value=""""),_display_(Seq[Any](/*39.70*/userForm("department")/*39.92*/.value)),format.raw/*39.98*/("""">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*46.47*/Messages/*46.55*/.get(lang,"input_remarks"))),format.raw/*46.81*/("""</label>
				<div class="controls">
			    	<input type="text" id="remarks" name="remarks" value=""""),_display_(Seq[Any](/*48.64*/userForm("remarks")/*48.83*/.value)),format.raw/*48.89*/("""">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
				<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*54.47*/Messages/*54.55*/.get(lang,"select_user_group"))),format.raw/*54.85*/("""</label>
				<div class="controls">
			    	"""),_display_(Seq[Any](/*56.10*/les_select("typeId",userForm("typeId").value,User.userGroup, Messages.get(lang,"select_a_user_group")))),format.raw/*56.112*/("""
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
		</fieldset>
		
		<div class="form-actions">
            <input type="button" onclick="checkUserForm()" value=""""),_display_(Seq[Any](/*64.68*/Messages/*64.76*/.get(lang,"update"))),format.raw/*64.95*/("""" class="btn btn-primary"> """),_display_(Seq[Any](/*64.123*/Messages/*64.131*/.get(lang,"or"))),format.raw/*64.146*/("""
            <a href=""""),_display_(Seq[Any](/*65.23*/routes/*65.29*/.UserAction.list())),format.raw/*65.47*/("""" class="btn">"""),_display_(Seq[Any](/*65.62*/Messages/*65.70*/.get(lang,"Cancel"))),format.raw/*65.89*/("""</a> 
        </div>
	""")))})),format.raw/*67.3*/("""
""")))})))}
    }
    
    def render(id:Long,userForm:Form[User],lang:Lang): play.api.templates.Html = apply(id,userForm,lang)
    
    def f:((Long,Form[User],Lang) => play.api.templates.Html) = (id,userForm,lang) => apply(id,userForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:44 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/user/userEdit.scala.html
                    HASH: ade404b1c76f1f6aa90d0d67d034afdba8e23f85
                    MATRIX: 745->1|958->41|986->140|1023->143|1115->227|1154->229|1250->297|1279->298|1429->420|1458->421|1530->466|1558->467|1626->508|1654->509|1711->531|1819->629|1860->631|1909->644|1926->652|1980->684|2121->789|2138->797|2188->825|2327->928|2356->948|2384->954|2579->1113|2596->1121|2652->1155|2795->1262|2826->1284|2854->1290|3054->1454|3071->1462|3119->1488|3256->1589|3284->1608|3312->1614|3508->1774|3525->1782|3577->1812|3660->1859|3785->1961|4015->2155|4032->2163|4073->2182|4138->2210|4156->2218|4194->2233|4254->2257|4269->2263|4309->2281|4360->2296|4377->2304|4418->2323|4474->2348
                    LINES: 26->1|36->1|37->6|38->7|38->7|38->7|42->11|42->11|46->15|46->15|49->18|49->18|52->21|52->21|56->25|56->25|56->25|57->26|57->26|57->26|60->29|60->29|60->29|62->31|62->31|62->31|68->37|68->37|68->37|70->39|70->39|70->39|77->46|77->46|77->46|79->48|79->48|79->48|85->54|85->54|85->54|87->56|87->56|95->64|95->64|95->64|95->64|95->64|95->64|96->65|96->65|96->65|96->65|96->65|96->65|98->67
                    -- GENERATED --
                */
            