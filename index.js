
const atb = document.getElementById('atbilde')
const image = document.getElementById('oponentImage')
const imageBody = document.getElementById('imageBody')
const questionList = ['When did time begin?', 'Is there life after death?', 'What is the goal of humanity?', 'Why does anything exist?']
const questions = document.getElementById('yourText')

function showQuestion() {
    let randomNumber = Math.floor(Math.random() * questionList.length)
    let randomQuestion = questionList[randomNumber]
    const newDiw = document.createElement('button')
    newDiw.setAttribute ('id', 'jaut5')
    newDiw.classList.add('question-key')
    newDiw.innerText = randomQuestion
    questions.appendChild(newDiw)    
}
showQuestion()

document.getElementById('jaut1').addEventListener('click', function() {
    atb.textContent = "You are welcome!"
})
document.getElementById('jaut2').addEventListener('click', function() {
    image.src='/images/smile-3233682_640.jpg'
})
document.getElementById('jaut3').addEventListener('click', function() {
    imageBody.style.background = 'black'
})
document.getElementById('jaut4').addEventListener('click', function renderFriend() {
    const newFriend = document.createElement('IMG')
    newFriend.setAttribute('src', '/images/smiley-4832530_640.png') 
    newFriend.setAttribute('width', 'auto')
    newFriend.setAttribute('height', '450')
    imageBody.appendChild(newFriend) 
})
document.getElementById('jaut5').addEventListener('click', function() {
    atb.textContent = "God only knows!"
})
