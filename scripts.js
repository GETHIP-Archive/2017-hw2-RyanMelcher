$(document).ready(function()
{
  $.getJSON("https://raw.githubusercontent.com/lfitzgibbons/json-test/master/logan.json"),
  function(data)
  {
    console.log(data);
    $("#profile-name").text(data.fireName + " " + data.lastName);
    $("#age").text(data.age);
    $"#profile-picture").attr("src"), data.picture);
  });
});
