<!DOCTYPE html>
<html>
<head>
    <title>Clean Text</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        textarea {
            width: 100%;
            height: 200px;
        }
        .dark-mode {
            background-color: #333;
            color: #fff;
        }
    </style>
</head>
<body>
    <h1>Clean Text</h1>
    <label for="inputText">Input Text:</label>
    <textarea id="inputText"></textarea>
    <button id="cleanButton" onclick="cleanText()">Clean Text</button>
    <label for="outputText">Cleaned Text:</label>
    <textarea id="outputText" readonly></textarea>
    <button id="toggleButton" onclick="toggleMode()">Toggle Mode</button>

    <script>
        function cleanText() {
            const inputText = document.getElementById('inputText').value;
            const cleanedText = inputText.replace(/\/\*.*?\*\//g, '');
            document.getElementById('outputText').value = cleanedText;
        }

        function toggleMode() {
            document.body.classList.toggle('dark-mode');
        }
    </script>
</body>
</html>
