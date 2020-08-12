window.onload = function () {
    show(0)
}

var questions = [{
    id: 1,
    question: "Q#1 : Who is the founder of Pakistan?",
    answer: "Muhammad Ali Jinnah",
    options: [
        "Liaqat Ali Khan",
        "Muhammad Ali Jinnah",
        "Dr.Abdul Qadir Khan",
        "Sir Sayyed Ahmed Khan"
    ]
},
{
    id: 2,
    question: "Q#2 : What is the capital of Pakistan?",
    answer: "Islamabad",
    options: [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Peshawar"
    ]
},
{
    id: 3,
    question: "Q#3 : When was Pakistan founded?",
    answer: "1947",
    options: [
        "1924",
        "1958",
        "1966",
        "1947"
    ]
},
{
    id: 4,
    question: "Q#4 : Where is Pakistan located?",
    answer: "Southern Asia",
    options: [
        "Southern Asia",
        "Central Asia",
        "Northeast Asia",
        "Southeast Asia"
    ]
},
{
    id: 5,
    question: "Q#5 : What is the currency of Pakistan?",
    answer: "Rupees",
    options: [
        "Dollar",
        "Rupees",
        "Euro",
        "Riyal"
    ]
},
{
    id: 6,
    question: "Q#6 : Who is the current PM of Pakistan?",
    answer: "Imran Khan",
    options: [
        "Bilawal Bhutto",
        "Nawaz Shareef",
        "Imran Khan",
        "Arif Alvi"
    ]
},
{
    id: 7,
    question: "Q#7 : How many provinces in Pakistan?",
    answer: "4",
    options: [
        "4",
        "6",
        "8",
        "5"
    ]
},
{
    id: 8,
    question: "Q#8 : How many colors in Pakistan flag?",
    answer: "2",
    options: [
        "7",
        "2",
        "4",
        "3"
    ]
},
{
    id: 9,
    question: "Q#9 : What is the capital city of Pakistan?",
    answer: "Karachi",
    options: [
        "Lahore",
        "Islamabad",
        "Queeta",
        "Karachi"
    ]
},
{
    id: 10,
    question: "Q#10 : Who is famous poet of Pakistan?",
    answer: "Allama Iqbal",
    options: [
        "Allama Iqbal",
        "Ghalib",
        "Mir Taqi Mir",
        "Nasir Hussain"
    ]
},
]

var question_count = 0;
function next() {
    question_count++
    if (question_count === 9) {
        var submbtn = "Submit";
        var naxbtn = document.getElementById('umbtn');
        naxbtn.style.backgroundColor = "green";
        naxbtn.innerHTML = submbtn;
    }
    if (question_count === 10){
        location.href = "index2.html";
    }
    show(question_count)
}

function show(e) {
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${questions[e].question} </h1>
    <ul class="list">
                        <li class="option">${questions[e].options[0]}</li>
                        <li class="option">${questions[e].options[1]}</li>
                        <li class="option">${questions[e].options[2]}</li>
                        <li class="option">${questions[e].options[3]}</li>
                    </ul>`
    Active()
}

function Active() {
    let option1 = document.querySelectorAll("li.option")

    for (let i = 0; i < option1.length; i++) {
        option1[i].onclick = function () {
            for (let j = 0; j < option1.length; j++) {
                if (option1[j].classList.contains("active")) {
                    option1[j].classList.remove("active")
                }
            }
            option1[i].classList.add("active")
        }
    }
}