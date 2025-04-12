document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const formData = {
      name: document.getElementById('name').value,
      age: document.getElementById('age').value,
      email: document.getElementById('email').value
    };
  
    if (!formData.name || !formData.email || !formData.age) {
      alert('All fields are required!');
      return;
    }
  
    if (formData.age < 18 || formData.age > 35) {
      alert('Age must be between 18 and 35.');
      return;
    }

    const xhr = new XMLHttpRequest();
      xhr.open('Post', 'submit.json', true); 
      xhr.setRequestHeader("Content-Type", "application/json; charset= UTF-8");
      xhr.onreadystatechange = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('Message').innerHTML = response.message;
            document.getElementById('myForm'.innerHTML) = "";
        } else if (xhr.readyState ===4){
            alert ('Error submitting form');
        } 
      };
      xhr.send(JSON.stringify(formdata));
      console.log(formdata);
      
    });