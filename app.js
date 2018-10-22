function getSum() {
  var a = $("#a").val()
  var b = $("#b").val()

  console.log("Summing: " + a + " and " + b);

  $.get("http://roza-gal.devops.srwx.net:8080/api/sum/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
	  .append(" Result: " + data.Result + "<br>")
    }, "json");

}

function getDiff() {
  var a = $("#c").val()
  var b = $("#d").val()

  console.log("Difference between: " + a + " and " + b);

  $.get("http://localhost:8080/api/diff/?a=" + a + "&b=" + b, function( data ) {
    $("body")
      .append(" Status: " + data.Status)
      .append(" Result: " + data.Result + "<br>")
    }, "json");

}
