function pingBackend() {
  fetch('http://localhost:5000/api/ping')
    .then(res => res.json())
    .then(data => {
      document.getElementById('response').textContent = data.message;
    })
    .catch(err => {
      document.getElementById('response').textContent = 'Error connecting to backend.';
    });
}
