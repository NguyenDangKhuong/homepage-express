//contact form upload file input
function ChangeText(oFileInput, sTargetID) {
  document.getElementById(sTargetID).value = oFileInput.value;
}

//validate for contact form
$(function(){
  $.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
  }, function(size){
    return "Upload files must be less than " + filesize(size,{exponent:2,round:1});
  });

  $('#contact-form').validate({
    rules: {
      file: {
        extension: "xls|csv|png|jpeg|gif|doc|xlsx|pdf",
        filesize: 10000 * 1024,
      }
    },
    message:{
      file:{
        extension:"Please enter a file with a valid extension.",
      }
    }

  });
});