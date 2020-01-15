function cupCon(numberOfCups){
return (numberOfCups * 0.0625)
}
function galCon(numberofGals){
return (numberofGals * 16)
}






$(document).ready(function(){
 

    $("#cup2galForm").submit(function(){
        var cup2gal = parseFloat($("input#cup2gal").val());
        var cup2galConversion = cupCon(cup2gal)
        $("#cupsResult").show();
        event.preventDefault();
        $(".cupsResult").text(cup2galConversion);
    });
    $("#gal2cupForm").submit(function(){
        var gal2cup = parseFloat($("input#gal2cup").val());
        var gal2cupConversion = galCon(gal2cup)
        $("#galsResult").show();
        event.preventDefault();
        $(".galsResult").text(gal2cupConversion);
    });
   

});
