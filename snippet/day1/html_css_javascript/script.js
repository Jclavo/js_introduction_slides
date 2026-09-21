document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const idNumber = document.getElementById('idNumber').value;
    const email = document.getElementById('email').value;
    const career = document.getElementById('career').value;
    const comment = document.getElementById('comment').value;
    
    // Simple validation
    if (!name || !idNumber || !email) {
        document.getElementById('message').innerText = 'Name, ID Number, and Email are required.';
        document.getElementById('message').style.color = 'red';
        return;
    }
    
    // Simulate form submission
    document.getElementById('message').innerText = 'Registration successful!';
    document.getElementById('message').style.color = 'green';
    
    // Clear form fields
    document.getElementById('registrationForm').reset();
});