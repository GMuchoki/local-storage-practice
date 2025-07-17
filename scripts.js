const nameInput = document.getElementById('nameInput');
const spanId = document.getElementById('output');
const saveToLocalStorage = document.getElementById('saveBtn');
const clearButton = document.getElementById('clearBtn');

// Load saved name on page load
window.addEventListener('load', function loadSavedItem (){
    const user = localStorage.getItem('username');
    if (user){
        nameInput.value = user;
        spanId.textContent = user;
    }
});

// Live update the <span> as user types
nameInput.addEventListener('input', function () {
    spanId.textContent = nameInput.value;
});

// Save name to localStorage when button is clicked
saveToLocalStorage.addEventListener('click', function toLocalStorage (){
    localStorage.setItem('username', spanId.textContent)
    alert('Name Saved!');
});

// Clear input, output, and localStorage
clearButton.addEventListener('click', () => {
    nameInput.value = '';
    spanId.textContent = 'stranger';
    localStorage.removeItem('username');
});