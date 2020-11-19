
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
    jaut1.classList.add('answered')
    jaut6.classList.remove('answered')
})
document.getElementById('jaut2').addEventListener('click', function() {
    image.src='/images/smile-3233682_640.jpg'
    jaut2.classList.add('answered')
})
document.getElementById('jaut3').addEventListener('click', function() {
    imageBody.style.background = 'black'
    jaut3.classList.add('answered')
    jaut9.classList.remove('answered')
})
document.getElementById('jaut4').addEventListener('click', function renderFriend() {
    const newFriend = document.createElement('IMG')
    newFriend.setAttribute('src', '/images/smiley-4832530_640.png') 
    newFriend.setAttribute('width', 'auto')
    newFriend.setAttribute('height', '450')
    imageBody.appendChild(newFriend) 
    jaut4.classList.add('answered')
    jaut8.classList.remove('answered')
})
document.getElementById('jaut5').addEventListener('click', function() {
    atb.textContent = "God only knows!"
})
document.getElementById('jaut6').addEventListener('click', function() {
    atb.textContent = "Go on!"
    jaut6.classList.add('answered')
    jaut7.classList.remove('answered')
})
document.getElementById('jaut7').addEventListener('click', function() {
    atb.textContent = "I am actually from your home town"
    jaut7.classList.add('answered')
    jaut10.classList.remove('answered')
})
document.getElementById('jaut8').addEventListener('click', function() {
    atb.textContent = "We are happy to see some new face"
    jaut8.classList.add('answered')
    
})
document.getElementById('jaut9').addEventListener('click', function() {
    imageBody.style.background = 'bisque'
    jaut9.classList.add('answered')
    jaut3.classList.remove('answered')
})
document.getElementById('jaut10').addEventListener('click', function() {
    atb.textContent = "Always welcome!"
    jaut10.classList.add('answered')
    
})