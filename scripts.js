$(document).ready(function()
{
  $.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-RyanMelcher/master/ryan.json",
  function(data)
  {
    console.log(data);
    $("#profile-name").text(data.fireName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
  });
});
