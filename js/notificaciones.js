	var data = {};

	var url = 'graph.facebook.com/oauth/access_token?client_id=1634712216798255&client_secret=6890087227ae5f912d33256c71cae544&grant_type=client_credentials'; 

    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'application/json',
      contentType: 'application/json',
      success: function(data) {
           $.ajax({
           		console.log(data);
           		var urlpost = 'graph.facebook.com/10206845195665447/notifications?access_token=' + data + '&templatetemplate=started a game with you, play now!&href=zoombeeu.herokuapp.com';  

			      type: 'POST',
			      url: urlpost,
			      dataType: 'application/json',
			      contentType: 'application/json',
			      success: function(data) {
			        if(data.success === 'true')
			        {
			        	console.log('yay');
			        }
			      }
			    });
      }
    });