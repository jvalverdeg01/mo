// Home Tab
home = {
    init : function(){
        loadSurveys(dataSurveys)
    }
}

// Survey Profile
survey = {
    init : function(){
      loadSurveyProfile(dataSurvey)
    }
}

// History Tab
history = {
    init : function(){
    }
}
/*
// Network Tab
network = {
    init : function(){
    }
}

// Payment Tab
payment = {
    init : function(){

    }
}
*/

$(document).ready(function() {
  home.init()  // Home Tab
});
