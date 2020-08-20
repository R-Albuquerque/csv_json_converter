

$("#otherDelimiter,#otherSeparator").hide();
$("#csvfileform").hide();

//  Check if user choose to input CSV data manually or as a file
$('input[name=inputType]').change(function(){
  if($('input[name=inputType]:checked').val() == "manual"){
    $("#csvfileform").hide();
    $("#manualinputform").show();
  }
  else {
    $("#csvfileform").show();
    $("#manualinputform").hide();
  }
});

// File input validation

var fileExtensionCheck = new RegExp("(.*?)\.(csv)$");

$("input[name=csvfileinput]").change(function() {
  if (!(fileExtensionCheck.test(el.value.toLowerCase()))) {
    el.value = '';
    $("#filetypeWarn").html("Only .csv files are accepted")
  }
})

// Delimiter options
$('input[name=delimiter]').change(function(){
  if($('input[name=delimiter]:checked').val() != "other"){
    $("#otherDelimiter").hide();
  }
  else {
    $("#otherDelimiter").show();
  }
});

// Field separator option
$('input[name=separator]').change(function(){
  if($('input[name=separator]:checked').val() != "other"){
    $("#otherSeparator").hide();
  }
  else {
    $("#otherSeparator").show();
  }
});

// Setting a textarea placeholder
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
