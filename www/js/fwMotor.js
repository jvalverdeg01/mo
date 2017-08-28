
fwMotor = function(){
    if(currentQuestion != undefined){
        if("fwdRules" in currentQuestion){
            fwdRules.forEach(function(rule){
                if(eval(rule.condition)){
                    switch(rule.conditionType){
                      skip:
                        $("#btnNextQuestion").attr("next-question", rule.skipQustion)
                      break;

                      "end":
                        getLocalSurvey(currentSurvey,function(survery){
                          $("#btnNextQuestion").attr("section-target", "endQuestion")
                        })
                      break;

                      "js":
                        eval(rule.consequence)
                      break;

                      "next":
                      default:
                        questionPosition++;
                        getLocalSurvey(currentSurvey,function(survery){
                          if(questionPosition == survey.questions.length){

                          }
                          else{
                              $("#btnNextQuestion").attr("next-question", questionPosition)
                          }
                        }

                      break;
                    }
                }
            })
        }
    }
}
