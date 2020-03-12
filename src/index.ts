var arrQuestion = [
    {
        question: 'Що таке спеціальні вибухотехнічні роботи?',
        answers: ['роботи щодо виявлення, огляду, вилучення, перевезення та знешкодження надзвичайно небезпечних вибухових пристроїв та вибухонебезпечних предметів;', 'роботи щодо дій спеціалістів-вибухотехніків з пошуку та знешкодження вибухових матеріалів;', 'всі роботи спеціалістів-вибухотехніків, передбачені положенням про вибухотехнічну службу;', 'роботи, пов\'язані з пошуком, виявленням, розряджанням, знешкодженням та знищенням вибухових матеріалів (у тому числі розмінуванням), а також транспортуванням надзвичайно небезпечних вибухових матеріалів до підривних майданчиків.'],
        correct: 3
    },
    {
        question: 'Що є пріоритетом під час прийняття рішення щодо поводження з виявленими вибуховими матеріалами? ',
        answers: ['безпечне виявлення, огляд, вилучення, перевезення та знешкодження вибухових пристроїв та вибухонебезпечних предметів;', 'захист здоров\'я та  життя людини;', 'збереження життя й здоров\'я спеціаліста-вибухотехніка НПУ;', 'виконання заходів безпеки при проведенні слідчих дій всіма учасниками.'],
        correct: 1
    },
    {
        question: 'У разі виявлення ВР, ВП або предмета схожого на нього, категорично забороняється:',
        answers: ['проводити з ними будь які маніпуляції (рухати з місця, трусити, відкривати тощо);', 'проводити з ними будь які маніпуляції щодо локалізації тощо;', 'проводити з ними будь які маніпуляції (рухати з місця, трусити, відкривати тощо) працівникам, які не уповноважені на проведення спеціальних вибухотехнічних робіт;', 'рухати з місця, трусити, відкривати до поки дані предмети не будуть локалізовані.'],
        correct: 2
    },
    {
        question: 'У разі виявлення вибухової речовини, яка схожа на саморобну, подальші дії з нею проводяться:',
        answers: ['після огляду спеціалістом-вибухотехніком;', 'після її зволоження;', 'після ретельної перевірки на наявність саморобних засобів ініціювання;', 'після від\'єднання заряду речовини від засобу ініціювання.'],
        correct: 1
    },
    {
        question: 'Які роботи проводяться в засобах індивідуального захисту?',
        answers: ['спеціальні вибухотехнічні роботи;', 'експертний огляд вибухових матеріалів;', 'пошук вибухових речовин, вибухових пристроїв та конструктивно схожих на них предметів;', 'вірно у п. 2 та 3.'],
        correct: 3
    },
    {
        question: 'Забороняється проведення огляду місця події за фактом вибуху: ',
        answers: ['без узгодження зі спеціалістами відповідних служб (служби електропостачання, газової служби, водоканалу тощо) щодо можливості безпечного перебування на місці вибуху;', 'без огляду території на наявність вторинних вибухових пристроїв або залишків вибухових речовин, що не прореагували;', 'без огляду території на наявність вторинних вибухових пристроїв або вибухонебезпечних залишків або частин вибухового пристрою, що вибухнув;', 'вірно у п. 1 та 3.'],
        correct: 2
    },
]
var result = 0;
var arr3: number[] = [];
var arr: string[] = [];
var arr2: string[] = [];
let btnNext = document.getElementById('btnNext').addEventListener('click', nextQuestion);
let btnCheck = document.getElementById('btnCheck').addEventListener('click', check)
let btnStop = document.getElementById('btnStop').addEventListener('click', stop)

function nextQuestion(): void {
    let placeDiv2 = document.getElementById('div')
    placeDiv2.textContent = ``
    let randQuestion = Math.floor(Math.random() * arrQuestion.length);
    if (arr3.includes(randQuestion)) {
        nextQuestion();
    } else {
        arr3.push(randQuestion);
    }
    arr2.push(arrQuestion[randQuestion].answers[arrQuestion[randQuestion].correct]);

    createQuestion(randQuestion);
    //console.log(randQuestion)
}

function createQuestion(rand: number): void {
    let placeDiv = document.getElementById('qst')
    placeDiv.innerHTML = arrQuestion[rand].question;

    createAnswers(rand);
}

function createAnswers(rand: number): void {
    let correct = arrQuestion[rand].correct;


    let placeDiv = document.getElementById('div')
    placeDiv.textContent = ``
    for (let i = 0; i < arrQuestion[rand].answers.length; i++) {
        let label = window.document.createElement('label')
        let input = window.document.createElement('input')
        let br = window.document.createElement('br')
        input.type = 'radio'
        input.name = 'contact'
        input.className = 'check'
        input.id = arrQuestion[rand].answers[i];
        //label.htmlFor = 'choice';
        label.innerHTML = arrQuestion[rand].answers[i];
        label.htmlFor = arrQuestion[rand].answers[i];
        placeDiv.appendChild(input)
        placeDiv.appendChild(label)
        placeDiv.appendChild(br)
    }
}

function check() {
    let nameCheckbox = document.getElementsByName('contact');
    for (let i = 0; i < nameCheckbox.length; i++) {
        let q = 0;
        if (nameCheckbox[i].checked) {
            arr.push(nameCheckbox[i].id)
            q++;
        }
    }
    if (!arr[arr2.length - 1]) {
        arr.push('Not answer!')
    }

    console.log(arr)
    console.log(arr2)
    nextQuestion()
}
function stop() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr2[i]) {
            result++;
        }

    }
    clearInterval(refreshInterval)
    console.log(result)
}
//console.log(nameCheckbox[0].id)
const startingMinutes = 20;
let time = startingMinutes * 60
const countdownEl = document.getElementById('countdown');
var refreshInterval = setInterval(updateCountdown, 1000)
function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds: number | string = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--
    if (time < 0) {
        clearInterval(refreshInterval)
        stop()
    }
}
