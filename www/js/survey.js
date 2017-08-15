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
    var dom = $(`
        <div id="`+survey.id+`" class="card" section-target="resource" section-title="`+survey.name+`(1/`+survey.qty+`)" section-fx="">
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
}
