var parseID="";
var parseKey="";
var profileTemplate;

function saveUser(user, callback) {
	var flag = false;
	$.ajax({
			url: " https://api.parse.com/1/classes/User",
			headers: {
				"X-Parse-Application-Id": parseID,
				"X-Parse-REST-API-Key": parseKey
			},
			contentType: "application/json",
			dataType: "json",
			processData: false,
			data: JSON.stringify(user),
			type: 'POST',
			success: callback,
			error: function() {
				console.log("error");
			}
		});

		return flag;
}

function getUser(email, callback) {
	var user = null;
		$.ajax({
			url: "https://api.parse.com/1/classes/User?where%3D%7B%22email%22%3A%22"+email+"%22%7D",
			headers: {
				"X-Parse-Application-Id": parseID,
				"X-Parse-REST-API-Key": parseKey
			},
			contentType: "application/json",
			dataType: "json",
			type: 'GET',
			success: callback,
			error: function() {
				console.log("error");
				user=null;
			}
		});

		return user;

}

function getMessages() {
	$.ajax({
		url: " https://api.parse.com/1/classes/MessageBoard",
		headers: {
			"X-Parse-Application-Id": parseID,
			"X-Parse-REST-API-Key": parseKey
		},
		contentType: "application/json",
		dataType: "json",
		type: 'GET',
		success: function(data) {
			console.log("get");
			//updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}

function updateProfileView(user) {
	profileTemplate = '';
	var table=$("<div class='container'>");
	table.html('');
		table.append('<div clas="row">');
				table.append("<div class='col-sm-5 .col-md-6'>");
				table.append("<img id='imgUser></img>");
				table.append("</div>");
				table.append("<div class='col-sm-5 .col-md-6'>"+user.name);
				table.append("</div>");
		table.append("</div>");
	table.append("</div>");
	profileTemplate = table;
	console.log(profileTemplate);

}
