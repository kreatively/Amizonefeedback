function clickfun() {
var i;
for (i = 0; i < 25 ; i++){
  var st1 = '#';
  var str2 = i;
  var str3 = '.ace[value="5"]'
  var res = str1.concat(str2, str3);
  $(res).click();  
} 
// $('#1.ace[value="5"]').click();
// $('#2.ace[value="5"]').click();
// // document.querySelector(".ace#1").click()
// $('#3.ace[value="5"]').click();
// $('#4.ace[value="5"]').click();

// //COURSE DELIVERY
// $('#5.ace[value="5"]').click();
// $('#6.ace[value="5"]').click();
// $('#7.ace[value="5"]').click();
// $('#8.ace[value="5"]').click();
// $('#9.ace[value="5"]').click();
// $('#10.ace[value="5"]').click();
// $('#11.ace[value="5"]').click();

// //FIELD CONNECTIVITY & RELEVANCE
// $('#12.ace[value="5"]').click();
// $('#13.ace[value="5"]').click();
// $('#14.ace[value="5"]').click();
// $('#15.ace[value="5"]').click();
// $('#16.ace[value="5"]').click();
// $('#17.ace[value="5"]').click();

// //CONTINUOUS EVALUATION / INTERNAL ASSESSMENT & FEEDBACK
// $('#18.ace[value="5"]').click();
// $('#19.ace[value="5"]').click();
// $('#20.ace[value="5"]').click();
// $('#21.ace[value="5"]').click();
// $('#28.ace[value="5"]').click();

// $('#22.ace[value="5"]').click();
// $('#23.ace[value="5"]').click();
// $('#24.ace[value="4"]').click();
// $('#25.ace[value="5"]').click();

$('#rdbQuestion1.ace[value="1"]').click();
$('#rdbQuestion2.ace[value="1"]').click();
$('#rdbQuestion4.ace[value="1"]').click();
$('#rdbQuestion5.ace[value="1"]').click();

// $('#rdbQuestion5.ace[value="1"]').value="";

$('#FeedbackRating_Comments').val("Good");

// document.getElementById("btnSubmit").click();
// $('[value="Submit"]').click();
}; 

window.setInterval(function(){
  clickfun()
  }, 500);
