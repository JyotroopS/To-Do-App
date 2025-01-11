const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

// function to add task
function addTask () {
  if (inputBox.value === '') {
    alert('You must write something!')
  } else {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)

    let span = document.createElement('span')
    span.innerHTML = '\u00d7'
    li.appendChild(span)
  }

  inputBox.value = ''
  saveData()
}

listContainer.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
      saveData()
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove()
      saveData()
    }
  },
  false
)

// function to save data
function saveData () {
  localStorage.setItem('data', listContainer.innerHTML)
}

// function to show previous data whenever the browser is opened
function showTask () {
  listContainer.innerHTML = localStorage.getItem('data')
}

showTask()

const taskList = document.getElementById('taskList')

// Event listener for the "ADD" button
addButton.addEventListener('click', addTask)

// Event listener for pressing "Enter" key
inputBox.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask()
  }
})
