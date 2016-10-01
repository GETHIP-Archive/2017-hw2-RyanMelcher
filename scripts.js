$(document).ready(function()
{
  console.log("ready");
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-RyanMelcher/master/ryan.json",
  function(data)
  {
    console.log(data);
    $("#profile-name").text(data.fireName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
  }).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
});

});
