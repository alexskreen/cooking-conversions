function cupCon(numberOfCups){
    return (numberOfCups * 0.0625)
}
function galCon(numberOfGals){
    return (numberOfGals * 16)
}
function teaCon(numberOfTea){
    return (numberOfTea * .3333)
}
function tableCon(numberofTable){
    return (numberofTable * 3)
}






$(document).ready(function(){
 

    $("#cup2galForm").submit(function(){
        var cup2gal = parseFloat($("input#cup2gal").val());
        var cup2galConversion = cupCon(cup2gal)
        event.preventDefault();
        $("input#gal2cup").val(cup2galConversion)
    });
    $("#gal2cupForm").submit(function(){
        var gal2cup = parseFloat($("input#gal2cup").val());
        var gal2cupConversion = galCon(gal2cup)
        event.preventDefault();
        $("input#cup2gal").val(gal2cupConversion)
    });
    $("#tea2TableForm").submit(function(){
        var tea2Table = parseFloat($("input#tea2Table").val());
        var tea2TableConversion = teaCon(tea2Table);
        event.preventDefault();
        $("input#table2Tea").val(tea2TableConversion)
    });
    $("#table2TeaForm").submit(function(){
        var table2Tea = parseFloat($("input#table2Tea").val());
        var table2TeaConversion = tableCon(table2Tea);
        event.preventDefault();
        $("input#tea2Table").val(table2TeaConversion)
});
   $("#reset-btn").click(function(){
    $("input#gal2cup").val("");
    $("input#cup2gal").val("");
    $("input#table2Tea").val("");
    $("input#tea2Table").val("");
   })

});
