$("#get-tips").on("click", function() {
	var category = $("#selections").val();
	var fname = $("#firstname").val();
	var lname = $("#lastname").val();
	var payload = {};
	payload["firstName"] = fname;
	payload["lastName"] = lname;

	if(category != 'random'){
		payload["limitTo"] = "[" + category + "]";
	}

	$.ajax({
		url: "http://api.icndb.com/jokes/random",
		type: "GET",
		dataType: "JSON",
		data: payload

	}).done(function (data){
		$("#tips").text(data.value.joke);
	}).fail(function (data){
		console.log(data);
		$("#tips").text("Det gick inte att hämta ett tips.");
	});
});