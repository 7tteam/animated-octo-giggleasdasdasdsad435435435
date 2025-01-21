// تحميل محتوى الهيدر
fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

// تحميل محتوى الفوتر
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
