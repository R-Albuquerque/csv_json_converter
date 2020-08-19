
$("#otherDelimiter,#otherSeparator").hide();
$('input[name=delimiter]').change(function(){
  if($('input[name=delimiter]:checked').val() != "other"){
    $("#otherDelimiter").hide();
  }
  else {
    $("#otherDelimiter").show();
  }
});
$('input[name=separator]').change(function(){
  if($('input[name=separator]:checked').val() != "other"){
    $("#otherSeparator").hide();
  }
  else {
    $("#otherSeparator").show();
  }
});

$("#csvtext").attr("placeholder" , "Example:\n"+
                  "\"Id\",\"Name\",\"Age\"\n"+
                  "\"4\",\"Carl\",21\"\n"+
                  "\"5\",\"Maria\",\"37\"\n"+
                  "\"6\",\"Ravi\",\"23\"...");
// if($('input[name=radioName]:checked', '#csvOptions').val() != "other"){
//   $("#otherDelimiter").hide();
// }
// else {
//   $("#otherDelimiter").show();
// }
