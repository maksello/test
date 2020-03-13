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
        correct: 3
    },

]
var arrOfQuestions: number[] = [];
var arrOfCorrectAnswers: string[] = [];
var arrOfAnswers: string[] = [];
var result = 0;
var isEnd = false;

class Test {
    private question: string;
    private rQestion: number;
    private answers: string[];
    private correct: number;

    constructor(rand: number) {
        this.question = arrQuestion[rand].question;
        this.answers = arrQuestion[rand].answers;
        this.correct = arrQuestion[rand].correct;
        this.rQestion = rand;
    }

    createForm() {
        let body = document.getElementById('divFirst');
        let form = document.createElement('form');
        form.id = 'form'
        let p = document.createElement('p');
        p.id = 'p';
        p.innerHTML = this.question
        body.appendChild(form).appendChild(p);
        for (let i = 0; i < this.answers.length; i++) {
            let form = document.getElementById('form');
            let input = document.createElement('input');
            let br = document.createElement('br');
            input.id = arrQuestion[this.rQestion].answers[i];
            input.type = 'radio';
            input.name = 'choice';
            let label = document.createElement('label');
            label.innerHTML = arrQuestion[this.rQestion].answers[i];
            label.htmlFor = arrQuestion[this.rQestion].answers[i];
            form.appendChild(input)
            form.appendChild(label)
            form.appendChild(br);
        }
    }
}

function randomQuestion(): number {
    let randQuestion = Math.floor(Math.random() * arrQuestion.length);
    if (arrOfCorrectAnswers.length === arrQuestion.length) {
        stop('Questions end!');
        return;
    } else if (arrOfCorrectAnswers.includes(arrQuestion[randQuestion].answers[arrQuestion[randQuestion].correct])) {
        return randomQuestion();
    } else {
        arrOfQuestions.push(randQuestion);
        arrOfCorrectAnswers.push(arrQuestion[randQuestion].answers[arrQuestion[randQuestion].correct]);
        return randQuestion;
    }
}

function start(): void {
    let test = new Test(randomQuestion());
    test.createForm()
    btnStart.style.display = 'none'
    btnNext.style.display = '';
    btnStop.style.display = '';
    startTimer();
}

function next(): void {
    check();
    let div = document.getElementById('divFirst')
    div.innerHTML = ``
    let test = new Test(randomQuestion());
    test.createForm()
}

function stop(msg: string): void {
    isEnd = true
    let div = document.getElementById('divFirst')
    div.innerHTML = ``
    btnStart.style.display = 'none'
    btnNext.style.display = 'none';
    btnStop.style.display = 'none';
    for (let i = 0; i < arrOfAnswers.length; i++) {
        if (arrOfAnswers[i] === arrOfCorrectAnswers[i]) {
            result++;
        }
    }
    let res = document.getElementById('correct')
    res.innerHTML = 'Correct answers - ' + result
}

function check() {
    let inputChecked = document.getElementsByTagName('input');
    let q = 0;
    for (let i = 0; i < inputChecked.length; i++) {
        if (inputChecked[i].checked) {
            arrOfAnswers.push(inputChecked[i].id);
            q++;
        }
    };
    if (q === 0) {
        arrOfAnswers.push('NA');
    }
}

function startTimer() {
    const startingMinutes = 20;
    let time = startingMinutes * 60
    const countdownEl = document.getElementById('countdown');
    var refreshInterval = setInterval(updateCountdown, 1000)
    function updateCountdown() {
        const minutes = Math.floor(time / 60)
        let seconds: number | string = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds
        countdownEl.innerHTML = `${minutes}:${seconds}`
        time--;
        if (time < 0) {
            clearInterval(refreshInterval);
            stop();
        } else if (isEnd) {
            clearInterval(refreshInterval);
        }
    }
}


let btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', start);

let btnNext = document.getElementById('btnNext');
btnNext.addEventListener('click', next);
btnNext.style.display = 'none';

let btnStop = document.getElementById('btnStop');
btnStop.addEventListener('click', stop);
btnStop.style.display = 'none';
