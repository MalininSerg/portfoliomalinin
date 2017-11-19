function(e) {
  e.preventDefault();
  var c_name = $('#c_name').val();
  var c_email = $('#c_email').val();
  var c_message = $('#c_message ').val();
  var response = $('#contact-form .ajax-response');
  var formData = {
    'name': c_name,
    'email': c_email,
    'message': c_message
  };
  if ((c_name == '' || c_email == '' || c_message == '') || (!isValidEmailAddress(c_email))) {
    response.fadeIn(500);
    response.html('<i class="fa fa-warning"></i> Пожалуйста, заполните все поля');
  } else {
    $.ajax({
      type: 'POST',
      url: 'assets/php/contact.php',
      data: formData,
      dataType: 'json',
      encode: true,
      success: function(res) {
        var ret = $.parseJSON(JSON.stringify(res));
        response.html(ret.message).fadeIn(500);
      }
    });
  }
  return false;
}