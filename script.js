function calc(){
 var cat1 =  $('#cat1').val();
  var cat2 =  $('#cat2').val();
var rslt =  (cat1 * cat1);
  rslt +=  (cat2 * cat2);
  let resultado = Math.sqrt(rslt);
    rslt = resultado.toString();
  $('#rslt').html("( "+cat1+" X "+cat1+" ) + ( "+cat2+" X "+cat2+" ) = " + rslt);
  $('#num2').html(rslt)
  
}

$('#cat1').keyup(function(){
    $('#num1').html($(this).val());
  if($(this).val() == ""){
    $('#num1').html("X");
  }
  });
$('#cat2').keyup(function(){
    $('#num3').html($(this).val());
  if($(this).val() == ""){
    $('#num3').html("X");
  }
  });
