var current_step = 1;
var imagefile;
$(function(){
  alert('-1')
  $("#done_btn").click(function(){
    switch(current_step){
      case 1:
      $("#form_name").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_name").addClass("hide");
        $("#form_phonenumber").removeClass("hide");
        $("#form_phonenumber").addClass("animated slideInRight");
        $("#step2").removeAttr("disabled");
        $("#step2").addClass("btn-success");
      }, 600)
      current_step+=1;
      break;

      case 2:
      $("#form_phonenumber").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_phonenumber").addClass("hide");
        $("#form_bivag").removeClass("hide");
        $("#form_bivag").addClass("animated slideInRight");
        $("#step3").removeAttr("disabled");
        $("#step3").addClass("btn-success");
      }, 600)
      current_step+=1;
      break;

      case 3:
      $("#form_bivag").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_bivag").addClass("hide");
        $("#form_zilla").removeClass("hide");
        $("#form_zilla").addClass("animated slideInRight");
      }, 600)
      current_step+=1;
      break;

      case 4:
      $("#form_zilla").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_zilla").addClass("hide");
        $("#form_upazilla").removeClass("hide");
        $("#form_upazilla").addClass("animated slideInRight");
      }, 600)
      current_step+=1;
      break;

      case 5:
      $("#form_upazilla").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_upazilla").addClass("hide");
        $("#form_birthdate").removeClass("hide");
        $("#form_birthdate").addClass("animated slideInRight");
        $("#step4").removeAttr("disabled");
        $("#step4").addClass("btn-success");
      }, 600)
      current_step+=1;
      break;

      case 6:
      $("#form_birthdate").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_birthdate").addClass("hide");
        $("#form_bloodgroup").removeClass("hide");
        $("#form_bloodgroup").addClass("animated slideInRight");
        $("#step5").removeAttr("disabled");
        $("#step5").addClass("btn-success");
      }, 600)
      current_step+=1;
      break;

      case 7:
      $("#form_bloodgroup").addClass("animated slideOutLeft");
      setTimeout(function(){
        $("#form_bloodgroup").addClass("hide");
        $("#form_picture").removeClass("hide");
        $("#form_picture").addClass("animated slideInRight");
        $("#step6").removeAttr("disabled");
        $("#step6").addClass("btn-success");
        $("#done_btn").hide();
      }, 600)
      current_step+=1;
      break;
    }
  });

  $("#uploadimage").on('submit', function(e){
    e.preventDefault();
    var doner_name = $("#name").val();
    var doner_phonenumber = $("#phonenumber").val();
    var doner_birthdate = $("#doner_birthdate").val();
    var doner_bivag = $("#bivag_select").val();
    var doner_zilla = $("#zilla_select").val();
    var doner_upazilla = $("#upazilla_select").val();
    var doner_bloodgroup = $("#bloodgroup").val();

    var doner_data = {
      NAME: doner_name,
      PHONENUMBER: doner_phonenumber,
      BIRTHDATE: doner_birthdate,
      BIVAG: doner_bivag,
      ZILLA: doner_zilla,
      UPAZILLA: doner_upazilla,
      BLOODGROUP: doner_bloodgroup,
      IMAGE_TYPE: imagefile
    }

    $("#steps").hide();
    $("#doner_form").hide();
    $("#done_btn").hide()
    $("#gap").hide()
    $("#loading_page").removeClass("hide");
    $("#loading_page").addClass("animated FadeIn");

    $.ajax({
      alert("1")
      url: "upload_image.php",
      type: "POST",
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      alert("2")
      success: function(data)
      {
        alert(data)
        if(data=='DONE')
        {
          $.ajax({
          url: "create_profile.php",
          type: "POST",
          data: doner_data,

          success: function(data)
          {
            $("#loading_page").hide();
            $("#result").removeClass("hide");
            $("#result").html(data);
          }
        });
        }
      }
    })
  })

  $("#upload_btn").change(function(){
    var file = this.files[0];
    imagefile = file.type; //GLOBAL VAR
    var match = ["image/jpeg","image/png","image/jpg"];
    if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
    {
      $("#prev_img").attr('src', 'resource/images/default.jpg');
      $("#alert").removeClass("hide");
      $("#alert").addClass("animated FadeInUp");
      return false;
    }else{
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(this.files[0]);
    }
  });

  function imageIsLoaded(e){
    $("#prev_img").attr('src', e.target.result);
    $("#prev_img").attr('width', '110px');
    $("#prev_img").attr('height', '110px');
  }
});
