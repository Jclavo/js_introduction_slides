document.getElementById('registrationForm').addEventListener('input', function() {
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const career = document.getElementById('career').value;
    const comment = document.getElementById('comment').value;
    
    // Enable the button only if all required fields are filled and meet length requirements
    const registerButton = document.getElementById('registerButton');
    registerButton.disabled = !name || !cpf || !email || (career.length > 50) || (comment.length > 200);
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const career = document.getElementById('career').value;
    const comment = document.getElementById('comment').value;
    
    // Simple validation
    if (!name || !cpf || !email) {
        document.getElementById('message').innerText = 'Name, CPF, and Email are required.';
        document.getElementById('message').style.color = 'red';
        return;
    }
    
    // Simulate form submission
    document.getElementById('message').innerText = 'Registration successful!';
    document.getElementById('message').style.color = 'green';
    
    // Clear form fields
    document.getElementById('registrationForm').reset();
});