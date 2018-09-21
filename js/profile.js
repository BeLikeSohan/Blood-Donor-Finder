$(function(){
  $("#save_changes_btn").click(function(){
    var datasend = {
      a: $("#change_phonenumber_box").val(),
      b: $("#change_name_box").val(),
      c: $("#change_bloodgroup_box").val()
    }
    $.ajax({
      type: "POST",
      url: "edit_profile.php",
      data: datasend,

      success: function(data){
        if(data=="DONE"){
          alert("DONE");
        }else{
          $("html").html(data);
        }
      }
    });
  })
  $("#note_update_btn").click(function(){
    var datasend = {
      b: $("#updated_note").val(),
    }
    $.ajax({
      type: "POST",
      url: "update_note.php",
      data: datasend,

      success: function(data){
        if(data=="DONE"){
          alert("DONE");
        }else{
          $("html").html(data);
        }
      }
    });
  })
})
