document.getElementById('registrationForm').addEventListener('input', function() {
    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const career = document.getElementById('career').value;
    const comment = document.getElementById('comment').value;
    const charCountSpan = document.getElementById('charCount');
    
    // Update character count
    charCountSpan.innerText = comment.length + '/200';
    
    // Change textarea color if over 200 characters
    comment.length > 200 ? document.getElementById('comment').style.borderColor = 'red' : document.getElementById('comment').style.borderColor = '';
    
    // Enable the button only if all required fields are filled
    const registerButton = document.getElementById('registerButton');
    registerButton.disabled = !name || !cpf || !email || (career.length > 50);
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