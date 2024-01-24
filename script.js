const inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');

// to add task element ******************************************
function addTask() {
    // if the value is empty, you must write something
    if (inputBox.value === '') {
        alert('You must write something!')
    } else {
        // else create element li
        let li = document.createElement('li');
        // element li is the value of inputbox
        li.innerHTML = inputBox.value;
        // element li must be add in the list container
        listContainer.appendChild(li);

        // create X with element
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        // X must be add with every list's element
        li.appendChild(span);
    }
    // to empty the input box after the click on button
    inputBox.value = '';
    saveData();
}

// to checked and to remove task element *************************

// on click in the list container
listContainer.addEventListener('click', (e) => {
    // if the user click on the list element, do check
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
        // if the user click on the X remove the parent element of X, so remove li
    } else if (e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveData();
    }
}, false);

// function to save data when the user restore the page
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

// function to show data storage
function showData() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();