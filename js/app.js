var parseID="Ta2cIHkL0xx3W4M1zpDoqXngkD95dbdXqXEBxMSZ";
var parseKey="LPWWjQAPLBj8mf46jXXiZqxS19MigVZ0k2yk40GQ";

function saveUser(user) {
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
			success: function() {
				console.log("sent");
				flag = true;
			},
			error: function() {
				console.log("error");
			}
		});

		return flag;
}

function getUser(email) {
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
			success: function(data) {
				console.log("getUser");
				console.log(data);
				user = data;
			},
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
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}

function updateView(messages) {
	var table=$(".table tbody");
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEl=$('<tr><td>'+value.username+'</td><td>'+value.message+'</td></tr>');
		table.append(trEl);
	});

	console.log(messages);
}
