document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("appointmentForm");
    const appointmentsList = document.getElementById("appointmentsList");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
  
      
      let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  
      const editIndex = form.getAttribute("data-edit-index");
      if (editIndex !== null) {
       
        appointments[editIndex] = {
          name: nameInput.value,
          email: emailInput.value,
        };
        form.removeAttribute("data-edit-index");
      } else {
     
        const newAppointment = {
          name: nameInput.value,
          email: emailInput.value,
        };
  
      
        appointments.push(newAppointment);
      }
  
      //localStorage.setItem("appointments", JSON.stringify(appointments));
      axios.post("https://crudcrud.com/api/9b463036deeb4a1dba310f97397e5ec9/appointmentdata",obj)
      .then((response)=>{
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
  
      nameInput.value = "";
      emailInput.value = "";
 
      displayAppointments();
    });
  
    window.addEventListner("DOMContentLoaded", ()=> {
        axios.get("https://crudcrud.com/api/9b463036deeb4a1dba310f97397e5ec9/appointmentdata",obj)
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data/length;i++){
            }
        })
        .catch((error) => {
            console.log(error)
        })
    })
  
      const editButtons = document.getElementsByClassName("editBtn");
      for (const editButton of editButtons) {
        editButton.addEventListener("click", (event) => {
          const index = event.target.getAttribute("data-index");
          editAppointment(index);
        });
      }
  

      const deleteButtons = document.getElementsByClassName("deleteBtn");
      for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", (event) => {
          const index = event.target.getAttribute("data-index");
          deleteAppointment(index);
        });
      }
    
  
    function editAppointment(index) {
    
      let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  

      const appointment = appointments[index];
  
   
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("date");
      nameInput.value = appointment.name;
      emailInput.value = appointment.email;
  
    
      form.setAttribute("data-edit-index", index);
    }
  
    function deleteAppointment(index) {
        axios.delet("https://crudcrud.com/api/9b463036deeb4a1dba310f97397e5ec9/appointmentdata",obj)
      .then((response)=>{
        appointments.splice(index, 1);
        console.log(response)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    axios.put("https://crudcrud.com/api/9b463036deeb4a1dba310f97397e5ec9/appointmentdata",obj)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
})