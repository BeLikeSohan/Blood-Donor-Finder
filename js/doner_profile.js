$(function(){
  var modal = document.getElementById('doner_picture_model');
  var img = $("#doner_profile_pic");
  var modalImg = document.getElementById("doner_profile_pic_model");
  var captionText = document.getElementById("doner_name_model");

  $("#doner_profile_pic").click(function(){
    $("#doner_picture_model").removeClass("animated fadeOutDown");
    $("#doner_picture_model").addClass("animated fadeInUp");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    })

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    $("#doner_picture_model").removeClass("animated fadeInUp");
    $("#doner_picture_model").addClass("animated fadeOutDown");
    setTimeout(function(){
      modal.style.display = "none";
    }, 700)
  }

})
