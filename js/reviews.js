function showreviews(lksee){
    $('#commentInbox').empty();
    $('#rvform').hide();
    $('#sdview').show();
    document.getElementById('submitview').disabled=false;
    document.getElementById('ref').innerHTML="Refresh";
    document.getElementById('loader-rv').style.display="block";
    document.getElementById('mviews').style.display="block";
    if(lksee ==undefined){
        var lksee = document.getElementById("entry.2036725465").value;
    }
var countcmnt = "n";
var ur1="https://script.google.com/macros/s/";
var ur2="AKfycbyzJPAp1Ep0pwT74LnzdvbnRj7xxGcfWj1chl5gmqC3cUnQNWk5gP05ltgycDHpr2djpg";
var url= ur1+ur2+"/exec"+"?action=read";
jQuery.getJSON(url, function(json) {
    json.records.reverse();
     for (var i = 1; i < json.records.length; i++) {
         if(json.records[i].AdminId == lksee){
document.getElementById('commentInbox').innerHTML +="<div class='reviewelm'><p class='rvelmpone' style='font-weight:bold;font-size:16px;color:#161616;'>"+json.records[i].Name+
"<span style='float:right;font-size:12px;font-weight:normal;padding-top:4px;'>"+json.records[i].Timestamp+"</span></p>"+
"<p class='rvelmptwo' style='color:#161616;font-size:14px;'>"+json.records[i].Comment+"</p></div><hr>"
      countcmnt ="y";}
    }
    if(countcmnt =="n"){
        document.getElementById('commentInbox').innerHTML ="<div class='norevwyt'><center><h4>No Reviews. Be first to give a Review.</h4></center></div>";
     }
     document.getElementById('loader-rv').style.display="none";
});

}

function viewrform(){
    document.getElementById("ref").innerHTML="See Reviews";
    $("#sdview").hide();
    $("#mviews").hide();$("#rvform").show();

}