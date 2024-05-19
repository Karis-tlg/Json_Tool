document.addEventListener('DOMContentLoaded', (event) => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

function cleanText() {
    const inputText = document.getElementById('inputText').value;
    const pattern = /\/\*.*?\*\//g;
    const cleanedText = inputText.replace(pattern, '');
    document.getElementById('outputText').value = cleanedText;
}

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    //alert('Đã sao chép nội dung!');
}