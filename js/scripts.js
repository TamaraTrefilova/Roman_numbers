var num;
var newNum;
var thousands;
var hundreds;
var tens;
var ones;
$(function(){
 $("form").submit(function(event){
   event.preventDefault();
   // debugger;
   num = parseInt($("input#numberInput").val());
   alert(num);

   
    $("#outputA").text(num);
    $("#outputB").text(newNum);

   $("#output").show();


 });

});
