document.addEventListener("DOMContentLoaded", function(event) { 
    // Recupera o token do localStorage
    var token = localStorage.getItem('token');

    if (token) {
        console.log('Token encontrado:', token);
    } 
    else {
        console.log('Token não encontrado');
    }
});