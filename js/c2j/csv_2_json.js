
//  Function to convert the csv input to an array
function arrayFromCSV(csvInput, delimiter, field_delimiter){

    fd = "\\"+field_delimiter;
//     console.log(csvInput);
// console.log(field_delimiter);
// console.log(delimiter);
    var padrao_campos = new RegExp((
    // delimitador
    "(\\" + delimiter + "|\\r?\\n|\\r|^)" +
    // campos com separador de texto
    "(?:"+fd+"([^"+fd+"]*(?:"+fd+fd+"[^"+fd+"]*)*)"+fd+"|" +
    // campos sem separador de dados
    "([^"+fd+"\\" + delimiter + "\\r\\n]*))"), "gi");

    var dados = [[]];
    var match_padrao = null;

    while (match_padrao = padrao_campos.exec(csvInput)) {
        var matched_delimiter = match_padrao[1];
        if (matched_delimiter.length && (matched_delimiter != delimiter)) {
            dados.push([]);
        }
        if (match_padrao[2]) {
            var matched_valor = match_padrao[2].replace(
            new RegExp("\"\"", "g"), "\"");
        } else {
            var matched_valor = match_padrao[3];
        }
        dados[dados.length - 1].push(matched_valor);
    }
    return (dados);
}
// ==========================================================================

//  function to convert the array
function do_conversion(csvArray) {

    var chosen_del, chosen_field_sep;

    if ($('input[name=delimiter]:checked').val() == 'other') {
       chosen_del = $('otherDelimiter').val();
    }
    else {
      chosen_del = $('input[name=delimiter]:checked').val();
    }

    if ($('input[name=separator]:checked').val() == 'other') {
      chosen_field_sep = $('otherSeparator').val();
    }
    else {
      chosen_field_sep = $('input[name=separator]:checked').val();
    }

    var chosen_field_sep = $('input[name=separator]:checked').val();
    var lista = arrayFromCSV(csvArray, chosen_del, chosen_field_sep);
    var resultArray = [];
    for (var i = 1; i < lista.length; i++) {
        resultArray[i - 1] = {};
        for (var j = 0; j < lista[0].length && j < lista[i].length; j++) {
            var chave = lista[0][j];
            resultArray[i - 1][chave] = lista[i][j]
        }
    }

    var jsonOutput = JSON.stringify(resultArray);
    var resultado = jsonOutput.replace(/},/g, "},\r\n");

    return resultado;
}

$("#convertButton").click(function() {

    var csv = $("#csvtextfield").val();
    var jsonResult = do_conversion(csv);
    $("#jsontext").val(jsonResult);

});

$("#downloadbtn").click(function() {
    var toDown = $("#jsontext").val();
    window.open("data:text/json;charset=utf-8," + escape(json))
});
