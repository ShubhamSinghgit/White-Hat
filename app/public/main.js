

	var mainApp = {};
	var firebase = app_firebase;
	var uid = null;
	var name = null;
	var email = null;

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    uid = user.uid; // User is signed in.
	    name = user.displayName;
	    email = user.email;
	    var myText = "Welcome " + name + ", fill out this survey to find the best match!";
	    document.getElementById("myLink").innerHTML=myText;
	    document.getElementById("myLinkTwo").innerHTML=name;
	    document.getElementById('name').value = name;
	    document.getElementById('emailm').value = email;
	  }else{
	  	uid = null;
	  	window.location.replace("home.html");
	  }
	});

	function logOut(){
		firebase.auth().signOut();
	}

	function getName(){
		console.log(name);
	} 

	mainApp.logOut = logOut;
	mainApp.getName = getName;


