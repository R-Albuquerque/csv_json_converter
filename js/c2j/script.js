

$("#otherDelimiter,#otherSeparator").hide();
$("#csvfileinput").hide();

//  Check if user choose to input CSV data manually or as a file
$('input[name=inputType]').change(function(){
  $("#csvtextfield, #fileInput").val("");
  if($('input[name=inputType]:checked').val() == "manual"){
    $("#csvfileinput").hide();
    $("#csvtextfield").show();
  }
  else {
    $("#csvfileinput").show();
    $("#csvtextfield").hide();
  }
});

// File input validation

$('#csvfileinput').on('change', function () {
  var fileInput = document.getElementById("fileInput");
  var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
  if (regex.test(fileInput.value.toLowerCase())) {
      if (typeof (FileReader) != "undefined") {
          var reader = new FileReader();
          reader.onload = function (e) {
              var table = document.createElement("table");
              var rows = e.target.result.split("\n");
              console.log(e.target.result);
              $("#csvtextfield").val(e.target.result);
              $("#csvtextfield").show();
          }
          reader.readAsText(fileInput.files[0]);
      }
  }
  else {
      $("#filetypeWarn").html("Only .csv files are accepted");
  }
});
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
