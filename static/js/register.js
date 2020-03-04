const form = document.getElementById('regForm')
Pageclip.form(form, {
  onSubmit: function (event) { },
  onResponse: function (error, response) {
      if(error) {
        alert(error);
      }

      window.location.href = "/";
  },
  successTemplate: '<span>Thank you!</span>'
})
