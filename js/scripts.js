$(document).ready(function() {
$("#formSurvey").submit(function(event) {
  event.preventDefault();
  const music = ($("input:radio[name=music]:checked").val());
  const color = ($("input:radio[name=color]:checked").val());
  const pet = ($("input:radio[name=pet]:checked").val());
  const clothing = ($("input:radio[name=clothing]:checked").val());
  const planet = ($("input:radio[name=planet]:checked").val());


  if (music === "Jazz" && color === "Red" || pet === "Dog" && pet === "Cat" || clothing === "Hat" && clothing === "Scarf" || planet === "Venus" && planet === "Mars") {
    $('#javascript').show();
  } else {
    $('#javascript').hide();
  } 
  if (music === "Country" || color === "Blue" && color === "Red" || pet === "Dog" && pet === "Cat" || clothing === "Hat" && clothing === "Scarf" || planet === "Venus" && planet === "Mars") {
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
