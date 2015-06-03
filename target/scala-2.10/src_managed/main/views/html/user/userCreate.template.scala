
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
object userCreate extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template2[Form[User],Lang,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(userForm: Form[User],lang:Lang):play.api.templates.Html = {
        _display_ {import play.i18n._

import helper._

import helper.twitterBootstrap._

import controllers._


Seq[Any](format.raw/*1.34*/("""
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
	
	"""),_display_(Seq[Any](/*25.3*/form(routes.UserAction.save(), 'class -> "form-horizontal", 'enctype -> "multipart/form-data")/*25.97*/ {_display_(Seq[Any](format.raw/*25.99*/("""
		<legend>"""),_display_(Seq[Any](/*26.12*/Messages/*26.20*/.get(lang,"Add_a_new_advertise"))),format.raw/*26.52*/("""</legend>
		<fieldset>
			 <div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*29.47*/Messages/*29.55*/.get(lang,"input_user_name"))),format.raw/*29.83*/("""</label>
				<div class="controls">
			    	<input type="text" id="username" name="username">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*37.47*/Messages/*37.55*/.get(lang,"input_password"))),format.raw/*37.82*/("""</label>
				<div class="controls">
			    	<input type="password" id="password" name="password">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*45.47*/Messages/*45.55*/.get(lang,"input_repassword"))),format.raw/*45.84*/("""</label>
				<div class="controls">
			    	<input type="password" id="repassword" name="repassword">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*53.47*/Messages/*53.55*/.get(lang,"input_user_department"))),format.raw/*53.89*/("""</label>
				<div class="controls">
			    	<input type="text" id="department" name="department">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*62.47*/Messages/*62.55*/.get(lang,"input_remarks"))),format.raw/*62.81*/("""</label>
				<div class="controls">
			    	<input type="text" id="remarks" name="remarks">
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			<div class="control-group ">
				<label class="control-label" for="title">"""),_display_(Seq[Any](/*70.47*/Messages/*70.55*/.get(lang,"select_user_group"))),format.raw/*70.85*/("""</label>
				<div class="controls">
			    	"""),_display_(Seq[Any](/*72.10*/les_select("typeId","",User.userGroup, Messages.get(lang,"select_a_user_group")))),format.raw/*72.90*/("""
			    	<span style="color:red;">*</span><br/>
				</div>
			</div>
			
			
		</fieldset>
		
		<div class="form-actions">
            <input type="button" onclick="checkUserForm()" value=""""),_display_(Seq[Any](/*81.68*/Messages/*81.76*/.get(lang,"Create_this_user"))),format.raw/*81.105*/("""" class="btn btn-primary"> """),_display_(Seq[Any](/*81.133*/Messages/*81.141*/.get(lang,"or"))),format.raw/*81.156*/("""
            <a href=""""),_display_(Seq[Any](/*82.23*/routes/*82.29*/.UserAction.list())),format.raw/*82.47*/("""" class="btn">"""),_display_(Seq[Any](/*82.62*/Messages/*82.70*/.get(lang,"Cancel"))),format.raw/*82.89*/("""</a> 
        </div>
	""")))})),format.raw/*84.3*/("""
""")))})))}
    }
    
    def render(userForm:Form[User],lang:Lang): play.api.templates.Html = apply(userForm,lang)
    
    def f:((Form[User],Lang) => play.api.templates.Html) = (userForm,lang) => apply(userForm,lang)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Tue Jun 02 13:34:44 CST 2015
                    SOURCE: D:/repositories/work/school/wll/sports/app/views/user/userCreate.scala.html
                    HASH: a62ff605c3349fd69ed3d781fa54c93257d584c5
                    MATRIX: 742->1|947->33|975->132|1012->135|1104->219|1143->221|1239->289|1268->290|1418->412|1447->413|1519->458|1547->459|1615->500|1643->501|1700->523|1803->617|1843->619|1892->632|1909->640|1963->672|2104->777|2121->785|2171->813|2459->1065|2476->1073|2525->1100|2817->1356|2834->1364|2885->1393|3181->1653|3198->1661|3254->1695|3551->1956|3568->1964|3616->1990|3902->2240|3919->2248|3971->2278|4054->2325|4156->2405|4391->2604|4408->2612|4460->2641|4525->2669|4543->2677|4581->2692|4641->2716|4656->2722|4696->2740|4747->2755|4764->2763|4805->2782|4861->2807
                    LINES: 26->1|36->1|37->6|38->7|38->7|38->7|42->11|42->11|46->15|46->15|49->18|49->18|52->21|52->21|56->25|56->25|56->25|57->26|57->26|57->26|60->29|60->29|60->29|68->37|68->37|68->37|76->45|76->45|76->45|84->53|84->53|84->53|93->62|93->62|93->62|101->70|101->70|101->70|103->72|103->72|112->81|112->81|112->81|112->81|112->81|112->81|113->82|113->82|113->82|113->82|113->82|113->82|115->84
                    -- GENERATED --
                */
            