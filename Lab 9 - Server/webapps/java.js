// När man skickar iväg formuläret (klickat på knappen "Spara media")
$("#myForm").submit(function (e) {
  // Förhindrar att vi skickas iväg till en ny sida (standardhändelsen)
  e.preventDefault();
  // Hämtar formulärsdata (värde från drop-down menyn, samt filen)
  var formData = new FormData(this);

  // Gör ett ajax-anrop
  $.ajax({
    url: $(this).attr("action"), // Till adressen "server.php"
    type: $(this).attr("method"), // Med metoden "post"
    data: formData, // Vår data vi skickar med
    dataType: "JSON", // Hur vi ska tolka den data vi får tillbaka (som JSON)
    cache: false, // Vi tillåter inte att webbläsaren att cacha några resultat
    contentType: false, // Vi vill inte att jQuery ska bestämma hur vårt innehåll ska tolkas
    processData: false // Vi tillåter inte att jQuery att processa vår data (som strängar)
  }).done(function (data) {
    // Om vi får ett lyckat svar
    console.log(data);
  }).fail(function (data) {
    // Om vi får ett misslyckat svar
    console.log(data);
  });
});

var files = [];

function GetFiles() {
  $.ajax({
    url: "https://ddwap.mah.se/AF6273/server.php?action=getMedia&type=photo",
    type: "get", 
    data: files, 
    dataType: "JSON", 
  }).done(function (data) {
    // Om vi får ett lyckat svar
    console.log("Jaa");
    for( var i = 0; i < data.files.length; i++){
      var img =  $("<img />").attr("src", data.files[i].path).appendTo("#images");
    }
  }).fail(function (data) {
    // Om vi får ett misslyckat svar
    console.log("Nee");
  });
}

window.onload = GetFiles();
