function onSignIn(googleUser){
	var profile = googleUser.getBasicProfile();

	var doner_data = {
		NAME: profile.getName(),
		IMAGE: profile.getImageUrl(),
		EMAIL: profile.getEmail(),
		ID_TOKEN: googleUser.getAuthResponse().id_token
	}

	$.ajax({
		type: "POST",
		url: "login_check.php",
		data: doner_data,


		success: function(data){
			$("#alert_box").html(data);
		}
	})
}
