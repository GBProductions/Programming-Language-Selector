$(document).ready(function() {
$("#formSurvey").submit(function(event) {
  event.preventDefault();
  const music = ($("input:radio[name=music]:checked").val());
  const color = ($("input:radio[name=color]:checked").val());
  const pet = ($("input:radio[name=pet]:checked").val());
  const clothing = ($("input:radio[name=clothing]:checked").val());
  const planet = ($("input:radio[name=planet]:checked").val());



  if (music === "Jazz" && color === "Red") {
    $('#javascript').show();
  } else {
    $('#javascript').hide();
  } 
  if (music === "Country") {
    $('#ruby').show();
  } else {
    $('#ruby').hide();
  }
  if (music === "Jazz" && color === "Blue") {
    $('#react').show();
  } else {
    $('#react').hide();
  }
  });
});
