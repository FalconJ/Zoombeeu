$('#boton').on('click', function()
	{
		FB.logout(function(response) {
              // user is now logged out
        });
	});