$("#tst").html("HELLO");
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
// if($('input[name=radioName]:checked', '#csvOptions').val() != "other"){
//   $("#otherDelimiter").hide();
// }
// else {
//   $("#otherDelimiter").show();
// }
