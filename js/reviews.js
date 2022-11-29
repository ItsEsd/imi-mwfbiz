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
"<p class='rvelmptwo' style='color:#161616;font-size:14px;'>"+json.records[i].Comment+"</p></div>"+
"<div align='right'><button class='delcombtn' onclick='delrvcomment(this)'>Delete Comment <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-trash3' viewBox='0 0 16 16'>"+
"<path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z'/> </svg></button><input class='rvcmntid' style='display:none;' value='"+json.records[i].CommentId+"'></div>"+"<hr>"
      countcmnt ="y";}
    }
    if(countcmnt =="n"){
        document.getElementById('commentInbox').innerHTML ="<div class='norevwyt'><center><h4>No Comments. Be first to give a Comment.</h4></center></div>";
     }
     document.getElementById('loader-rv').style.display="none";
     var user = elGetCookie("_ybizc0"); 
     if(user != "" && lksee !="bizbebpi85gkgfhd4g58ld01n"){
         $('.delcombtn').show();
     }
    else{
    return false;
       }
});
}
function viewrform(){
    document.getElementById("ref").innerHTML="See Comments";
    $("#sdview").hide();
    $("#mviews").hide();$("#rvform").show();
}
function delrvcomment(label){
    var list=document.getElementsByClassName("delcombtn");
    list = [].slice.call(list); 
    var posofinput = list.indexOf(label);
    list[posofinput].disabled = true;
    var x = document.getElementsByClassName('rvcmntid');
         var cmntid = x[posofinput].value;
         console.log(cmntid);
         var ur1="https://script.google.com/macros/s/";
         var ur2="AKfycbzxxs9rYu1E8dbAljk38i5XIjj_73bpGGDo-r_tt1xVtXy4cnkvLwoKiAeagYulqOKQjQ";
         var urcmt_ = ur1+ur2 +"/exec"
         var url = urcmt_ + "?callback=ctrlqcmntdel&comntid=" + cmntid + "&action=delcomnt";
         console.log(url);
         var request = jQuery.ajax({
           crossDomain: true,
           url: url,
           method: "GET",
           dataType: "jsonp"
         });
  }
  function ctrlqcmntdel(e){
    showreviews();
}