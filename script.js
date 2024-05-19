function cleanText() {
    const inputText = document.getElementById('inputText').value;
    const pattern = /\/\*.*?\*\//g;
    const cleanedText = inputText.replace(pattern, '');
    document.getElementById('outputText').value = cleanedText;
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
}
