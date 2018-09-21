$(function(){
  $("#change_img_btn").change(function(){
    var file = this.files[0];
    imagefile = file.type; //GLOBAL VAR
    var match = ["image/jpeg","image/png","image/jpg"];
    if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
    {
      return false;
    }else{
      var reader = new FileReader();
      reader.onload = imageIsLoaded;
      reader.readAsDataURL(this.files[0]);
    }
  });

  function imageIsLoaded(e){
    $("#prev_change_img").attr('src', e.target.result);
    $("#prev_img").attr('width', '270px');
    $("#prev_img").attr('height', '100%');
  }

})
