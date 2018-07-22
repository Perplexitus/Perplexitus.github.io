//Calling JSON from data

let repair = new XMLHttpRequest();
repair.open('GET', "data/services.json", true);
repair.send();
repair.onload = function() {
    let repairData = JSON.parse(repair.responseText);
    console.log(repairData);
    fillTable(repairData);




function fillTable(json){
    var bB = json.bigBoxSafeCheck;
    var sC = json.safeCheck;
    var bT = json.basicTune;
    var rT = json.raceTuneDetail;
    var sT = json.standardTune;
    var oH = json.overHaul;
    var bikeArray = [bB, sC, bT, rT, sT, oH];
    var arrayNames = ["Big Box Safe Check", "Safe Check", "Basic Tune", "Race Tune/Detail", "Standard Detail", "Over Haul"];
    console.log(bikeArray);
/*
    var bBArray = [
        json.bigBoxSafeCheck[0].price,
        json.bigBoxSafeCheck[0].desc1,
        json.bigBoxSafeCheck[0].desc2,
        json.bigBoxSafeCheck[0].desc3
    ]
    var jsonArray = [
        json.bigBoxSafeCheck, json.safeCheck, json.basicTune, json.raceTuneDetail, json.standardTune, json.overHaul];
    console.log(jsonArray);
*/

    for (i=0; i < bikeArray.length; i++) {
        $("tbody").append("<tr><td></td</tr>");
        $("tbody tr:last td:last").text(arrayNames[i]);
        $("tbody tr:last td:last").after("<td></td>");
        for (j=1; j < bikeArray[i].length; j++) {

            var content = $("tbody tr:last td:last").text();
            $("tbody tr:last td:last").html(content += "<br>" + bikeArray[i][j].desc + " ");

        }
        $("tbody tr:last td:last").after("<td></td>");
        $("tbody tr:last td:last").text(bikeArray[i][0].price);
    }
}
}
