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
        localStorage.setItem('appointments', JSON.stringify(appointments));
        showMessage('Appointment booked successfully!', 'success');
        document.getElementById('appointmentForm').reset();
    });
    