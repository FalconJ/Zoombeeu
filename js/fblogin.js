  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      console.log("llegue");
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1634712216798255',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.4' // use version 2.2
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    FB.api('/me', {fields: 'id,name,email,first_name,last_name,gender'}, function(response) {


      //Array that stores users info
      fbinfo = new Array();

      for(var property in response){
        if(response.hasOwnProperty(property)){
          fbinfo.push(response[property]);
        }
      }
      fbinfo.push('https://graph.facebook.com/' + response.id + '/picture?type=large');
      
      $.ajax({
        type: 'POST',
        url: "https://graph.facebook.com/" + response.id + "/notifications?access_token=1634712216798255|fPW87vjaqODmU4NxsmnJD-qy0UU&template=hola ven a jugar!&href=http://zoombeeu.herokuapp.com/",
        content-type:'application/json',
        success: function(data){
          console.log("llegue");
        },
        error: function(){
          console.log("no llegue");
        }
      });

      var user = getUser(response.email, function(user) {

          if(user.results[0] == null) {

            saveUser(response, function() {
              window.location.href = "profile.html?email="+response.email+"&picture="+fbinfo[fbinfo.length-1];
      });
 
      } else {
        window.location.href = "pantallabusqueda.html";
      }

			});

      console.log(fbinfo);
    });
  }