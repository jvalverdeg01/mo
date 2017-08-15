var json_test = {
  "id":"uuid",
  "imageSurvey": "survey1.png",
  "primaryColor": "red",
  "surveyName": "Encuesta de prueba",
  "shelfTime": 11651511,
  "usersRemaining":"4000/5000",
  "earnings":"6"
};

var json_testv2 = {
  "id":"uuid",
  "qty": 20,
  "image": "survey1.png",
  "name": "Encuesta de prueba",
  "timeEnd": 11651511,
  "userRemaning":"4000/5000",
  "payment":"6" 
};

function createSurvey(survey){
	survey = json_test; // Para pruebas
	recommendedDOM = $("[section-name=home]")
	recommendedDOM.find(".nice-wrapper").html("")
	
	var surveyBody = $('<div class="card" section-target="survey" section-title="" section-fx=""><div class="card_resource_id"></div><div class="card_resource_info"><div class="card_title"></div><div class="card_element"><i class="fa fa-clock-o"></i><div class="shelfTime"></div></div><div class="card_element"><i class="fa fa-users"></i> <div class="surveyUsers"></div></div><div class="card_element"><i class="fa fa-usd"></i><div class="surveyEarnings"></div></div></div></div>')
	
	surveyBody.attr("id","survey"+survey.id)
	surveyBody.attr("section-title",survey.surveyName)
	surveyBody.find(".card_resource_id").attr("style", "background-image:url(img/"+survey.imageSurvey+");")
	surveyBody.find(".card_title").html(survey.surveyName)
	surveyBody.find(".shelfTime").html(survey.shelfTime)
	surveyBody.find(".surveyUsers").html(survey.progressSurvey)
	surveyBody.find(".surveyEarnings").html(survey.earnings)
	
	recommendedDOM.find(".nice-wrapper").append(surveyBody)
}         

function printRemaning(endTime,nowDate){
    
    var delta = Math.abs(endTime - nowDate) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    return days+"d " + hours+"h" + minutes+"m"
}


function getimage(img){
    return img
}
function printHeaderSurvey(survey){
	survey = json_testv2; // Para pruebas
	console.log(survey)
    var dom = $(`
        <div id="`+survey.id+`" class="card" section-target="survey" section-title="`+survey.name+`(1/`+survey.qty+`)" section-fx="">
            <div class="card_resource_id" style="background-image:url(`+getimage(survey.image)+`);"></div>
            <div class="card_resource_info">
                <table>
                    <tbody>
                        <tr><th>`+survey.name+`/th></tr>
                        <tr><td><i class="fa fa-clock-o"></i><time end="`+survey.timeEnd+`"> `+printRemaning(survey.timeEnd)+`</time></td></tr>
                        <tr><td><i class="fa fa-user"><i><user>`+survey.userRemaning+`</user></i></i></td></tr>
                        <tr><td><i class="fa fa-usd"></i><usd>`+survey.payment+`</usd></td></tr>
                    </tbody>
                </table>
                </div>
        </div>`)
		
	recommendedDOM = $("[section-name=home]")
	recommendedDOM.find(".nice-wrapper").html("")
	
	recommendedDOM.find(".nice-wrapper").append(dom)
	
}