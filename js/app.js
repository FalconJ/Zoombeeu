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

	$.ajax({
			url: " https://api.parse.com/1/classes/User",
			headers: {
				"X-Parse-Application-Id": parseID,
				"X-Parse-REST-API-Key": parseKey
			},
			contentType: "application/json",
			dataType: "json",
			processData: false,
			data: JSON.stringify({
				"username": username,
				"message": message
			}),
			type: 'POST',
			success: function() {
				console.log("sent");
				getMessages();
			},
			error: function() {
				console.log("error");
			}
		});

		var objectId = $(obj).data("id");

	$.ajax({
		url: " https://api.parse.com/1/classes/User/" +objectId ,
		headers: {
			"X-Parse-Application-Id": parseID,
			"X-Parse-REST-API-Key": parseKey
		},
		contentType: "application/json",
		dataType: "json",
		processData: false,
		data:  JSON.stringify({}),
		type: 'GET',
		success: function() {
			console.log("delete");
			getMessages();
		},
		error: function(e) {
			console.log(e);
		}
	});

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
