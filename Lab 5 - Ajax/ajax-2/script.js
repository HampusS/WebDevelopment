$("#get-tips").on("click", function() {
	
	$.ajax({
		url: "http://api.icndb.com/jokes/random",
		dataType: "JSON"
	}).done(function (data){
		$("#tips").text(data.value.joke);
	}).fail(function (data){
		console.log(data);
		$("#tips").text("Det gick inte att hämta ett tips.");
	});
	
});