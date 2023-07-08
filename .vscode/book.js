 document.getElementById('appointmentForm').addEventListener('submit', function(e) {
      e.preventDefault(); 
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var date = document.getElementById('date').value;
      var time = document.getElementById('time').value;
      var appointment = {
        name: name,
        email: email,
        date: date,
        time: time
      };
        localStorage.setItem('appointments');
        let myObj_deserialised = Json.parse(localStorage.getItem("myObj"));
        console.log(myObj_deserialized);
        document.getElementById('appointmentForm').reset();
    });
    