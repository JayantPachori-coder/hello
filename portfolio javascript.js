function showProjects() {
    document.body.style.backgroundColor = '#333';
    document.querySelector('.container').style.display = 'none';
    document.getElementById('projects').classList.remove('hidden');
}

function showContact() {
    document.body.style.backgroundColor = '#444';
    document.querySelector('.container').style.display = 'none';
    document.getElementById('contact').classList.remove('hidden');
}

function goBack() {
    document.body.style.backgroundColor = '#f4f4f4';
    document.querySelector('.container').style.display = 'block';
    document.getElementById('projects').classList.add('hidden');
    document.getElementById('contact').classList.add('hidden');
}
