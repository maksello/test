/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

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
];
var arrOfQuestions = [];
var arrOfCorrectAnswers = [];
var arrOfAnswers = [];
var result = 0;
var isEnd = false;
var Test = /** @class */ (function () {
    function Test(rand) {
        this.question = arrQuestion[rand].question;
        this.answers = arrQuestion[rand].answers;
        this.correct = arrQuestion[rand].correct;
        this.rQestion = rand;
    }
    Test.prototype.createForm = function () {
        var body = document.getElementById('divFirst');
        var form = document.createElement('form');
        form.id = 'form';
        var p = document.createElement('p');
        p.id = 'p';
        p.innerHTML = this.question;
        body.appendChild(form).appendChild(p);
        for (var i = 0; i < this.answers.length; i++) {
            var a = arrQuestion[this.rQestion].answers[i];
            var form_1 = document.getElementById('form');
            var input = document.createElement('input');
            var br = document.createElement('br');
            input.id = a;
            input.type = 'radio';
            input.name = 'choice';
            var label = document.createElement('label');
            label.innerHTML = a;
            label.htmlFor = a;
            form_1.appendChild(input);
            form_1.appendChild(label);
            form_1.appendChild(br);
        }
    };
    return Test;
}());
function randomQuestion() {
    var randQuestion = Math.floor(Math.random() * arrQuestion.length);
    var a = arrQuestion[randQuestion].answers[arrQuestion[randQuestion].correct];
    if (arrOfCorrectAnswers.length === arrQuestion.length) {
        stop('Questions end!');
        return;
    }
    else if (arrOfCorrectAnswers.includes(a)) {
        return randomQuestion();
    }
    else {
        arrOfQuestions.push(randQuestion);
        arrOfCorrectAnswers.push(a);
        return randQuestion;
    }
}
function start() {
    var test = new Test(randomQuestion());
    test.createForm();
    btnStart.style.display = 'none';
    btnNext.style.display = '';
    btnStop.style.display = '';
    startTimer();
}
function next() {
    check();
    var div = document.getElementById('divFirst');
    div.innerHTML = "";
    var test = new Test(randomQuestion());
    test.createForm();
}
function stop(msg) {
    isEnd = true;
    var div = document.getElementById('divFirst');
    div.innerHTML = "";
    btnStart.style.display = 'none';
    btnNext.style.display = 'none';
    btnStop.style.display = 'none';
    for (var i = 0; i < arrOfAnswers.length; i++) {
        if (arrOfAnswers[i] === arrOfCorrectAnswers[i]) {
            result++;
        }
    }
    var res = document.getElementById('correct');
    res.innerHTML = 'Correct answers - ' + result + ' from ' + arrQuestion.length + '<br>' + 'Percent - ' + Math.floor(result * 100 / arrOfAnswers.length) + '%';
}
function check() {
    var inputChecked = document.getElementsByTagName('input');
    var q = 0;
    for (var i = 0; i < inputChecked.length; i++) {
        if (inputChecked[i].checked) {
            arrOfAnswers.push(inputChecked[i].id);
            q++;
        }
    }
    ;
    if (q === 0) {
        arrOfAnswers.push('NA');
    }
}
function startTimer() {
    var startingMinutes = 20;
    var time = startingMinutes * 60;
    var countdownEl = document.getElementById('countdown');
    var refreshInterval = setInterval(updateCountdown, 1000);
    function updateCountdown() {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.innerHTML = minutes + ":" + seconds;
        time--;
        if (time < 0) {
            clearInterval(refreshInterval);
            stop();
        }
        else if (isEnd) {
            clearInterval(refreshInterval);
        }
    }
}
var btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', start);
var btnNext = document.getElementById('btnNext');
btnNext.addEventListener('click', next);
btnNext.style.display = 'none';
var btnStop = document.getElementById('btnStop');
btnStop.addEventListener('click', stop);
btnStop.style.display = 'none';


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFJLFdBQVcsR0FBRztJQUNkO1FBQ0ksUUFBUSxFQUFFLDJDQUEyQztRQUNyRCxPQUFPLEVBQUUsQ0FBQyxtSkFBbUosRUFBRSw0RkFBNEYsRUFBRSwyRkFBMkYsRUFBRSx1T0FBdU8sQ0FBQztRQUNsa0IsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUNEO1FBQ0ksUUFBUSxFQUFFLGtHQUFrRztRQUM1RyxPQUFPLEVBQUUsQ0FBQyx1SEFBdUgsRUFBRSxvQ0FBb0MsRUFBRSw2REFBNkQsRUFBRSx3RUFBd0UsQ0FBQztRQUNqVCxPQUFPLEVBQUUsQ0FBQztLQUNiO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsbUZBQW1GO1FBQzdGLE9BQU8s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Q0FBQyxDQUFDO1lBQy9CLElBQUksRUFBRSxDQUFDO1NBQ1Y7YUFBTSxJQUFJLEtBQUssRUFBRTtZQUNkLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTFDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFFL0IsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJ2YXIgYXJyUXVlc3Rpb24gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246ICfQqdC+INGC0LDQutC1INGB0L/QtdGG0ZbQsNC70YzQvdGWINCy0LjQsdGD0YXQvtGC0LXRhdC90ZbRh9C90ZYg0YDQvtCx0L7RgtC4PycsXHJcbiAgICAgICAgYW5zd2VyczogWyfRgNC+0LHQvtGC0Lgg0YnQvtC00L4g0LLQuNGP0LLQu9C10L3QvdGPLCDQvtCz0LvRj9C00YMsINCy0LjQu9GD0YfQtdC90L3Rjywg0L/QtdGA0LXQstC10LfQtdC90L3RjyDRgtCwINC30L3QtdGI0LrQvtC00LbQtdC90L3RjyDQvdCw0LTQt9Cy0LjRh9Cw0LnQvdC+INC90LXQsdC10LfQv9C10YfQvdC40YUg0LLQuNCx0YPRhdC+0LLQuNGFINC/0YDQuNGB0YLRgNC+0ZfQsiDRgtCwINCy0LjQsdGD0YXQvtC90LXQsdC10LfQv9C10YfQvdC40YUg0L/RgNC10LTQvNC10YLRltCyOycsICfRgNC+0LHQvtGC0Lgg0YnQvtC00L4g0LTRltC5INGB0L/QtdGG0ZbQsNC70ZbRgdGC0ZbQsi3QstC40LHRg9GF0L7RgtC10YXQvdGW0LrRltCyINC3INC/0L7RiNGD0LrRgyDRgtCwINC30L3QtdGI0LrQvtC00LbQtdC90L3RjyDQstC40LHRg9GF0L7QstC40YUg0LzQsNGC0LXRgNGW0LDQu9GW0LI7JywgJ9Cy0YHRliDRgNC+0LHQvtGC0Lgg0YHQv9C10YbRltCw0LvRltGB0YLRltCyLdCy0LjQsdGD0YXQvtGC0LXRhdC90ZbQutGW0LIsINC/0LXRgNC10LTQsdCw0YfQtdC90ZYg0L/QvtC70L7QttC10L3QvdGP0Lwg0L/RgNC+INCy0LjQsdGD0YXQvtGC0LXRhdC90ZbRh9C90YMg0YHQu9GD0LbQsdGDOycsICfRgNC+0LHQvtGC0LgsINC/0L7QslxcJ9GP0LfQsNC90ZYg0Lcg0L/QvtGI0YPQutC+0LwsINCy0LjRj9Cy0LvQtdC90L3Rj9C8LCDRgNC+0LfRgNGP0LTQttCw0L3QvdGP0LwsINC30L3QtdGI0LrQvtC00LbQtdC90L3Rj9C8INGC0LAg0LfQvdC40YnQtdC90L3Rj9C8INCy0LjQsdGD0YXQvtCy0LjRhSDQvNCw0YLQtdGA0ZbQsNC70ZbQsiAo0YMg0YLQvtC80YMg0YfQuNGB0LvRliDRgNC+0LfQvNGW0L3Rg9Cy0LDQvdC90Y/QvCksINCwINGC0LDQutC+0LYg0YLRgNCw0L3RgdC/0L7RgNGC0YPQstCw0L3QvdGP0Lwg0L3QsNC00LfQstC40YfQsNC50L3QviDQvdC10LHQtdC30L/QtdGH0L3QuNGFINCy0LjQsdGD0YXQvtCy0LjRhSDQvNCw0YLQtdGA0ZbQsNC70ZbQsiDQtNC+INC/0ZbQtNGA0LjQstC90LjRhSDQvNCw0LnQtNCw0L3Rh9C40LrRltCyLiddLFxyXG4gICAgICAgIGNvcnJlY3Q6IDNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246ICfQqdC+INGUINC/0YDRltC+0YDQuNGC0LXRgtC+0Lwg0L/RltC0INGH0LDRgSDQv9GA0LjQudC90Y/RgtGC0Y8g0YDRltGI0LXQvdC90Y8g0YnQvtC00L4g0L/QvtCy0L7QtNC20LXQvdC90Y8g0Lcg0LLQuNGP0LLQu9C10L3QuNC80Lgg0LLQuNCx0YPRhdC+0LLQuNC80Lgg0LzQsNGC0LXRgNGW0LDQu9Cw0LzQuD8gJyxcclxuICAgICAgICBhbnN3ZXJzOiBbJ9Cx0LXQt9C/0LXRh9C90LUg0LLQuNGP0LLQu9C10L3QvdGPLCDQvtCz0LvRj9C0LCDQstC40LvRg9GH0LXQvdC90Y8sINC/0LXRgNC10LLQtdC30LXQvdC90Y8g0YLQsCDQt9C90LXRiNC60L7QtNC20LXQvdC90Y8g0LLQuNCx0YPRhdC+0LLQuNGFINC/0YDQuNGB0YLRgNC+0ZfQsiDRgtCwINCy0LjQsdGD0YXQvtC90LXQsdC10LfQv9C10YfQvdC40YUg0L/RgNC10LTQvNC10YLRltCyOycsICfQt9Cw0YXQuNGB0YIg0LfQtNC+0YDQvtCyXFwn0Y8g0YLQsCAg0LbQuNGC0YLRjyDQu9GO0LTQuNC90Lg7JywgJ9C30LHQtdGA0LXQttC10L3QvdGPINC20LjRgtGC0Y8g0Lkg0LfQtNC+0YDQvtCyXFwn0Y8g0YHQv9C10YbRltCw0LvRltGB0YLQsC3QstC40LHRg9GF0L7RgtC10YXQvdGW0LrQsCDQndCf0KM7JywgJ9Cy0LjQutC+0L3QsNC90L3RjyDQt9Cw0YXQvtC00ZbQsiDQsdC10LfQv9C10LrQuCDQv9GA0Lgg0L/RgNC+0LLQtdC00LXQvdC90ZYg0YHQu9GW0LTRh9C40YUg0LTRltC5INCy0YHRltC80LAg0YPRh9Cw0YHQvdC40LrQsNC80LguJ10sXHJcbiAgICAgICAgY29ycmVjdDogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogJ9CjINGA0LDQt9GWINCy0LjRj9Cy0LvQtdC90L3RjyDQktCgLCDQktCfINCw0LHQviDQv9GA0LXQtNC80LXRgtCwINGB0YXQvtC20L7Qs9C+INC90LAg0L3RjNC+0LPQviwg0LrQsNGC0LXQs9C+0YDQuNGH0L3QviDQt9Cw0LHQvtGA0L7QvdGP0ZTRgtGM0YHRjzonLFxyXG4gICAgICAgIGFuc3dlcnM6IFsn0L/RgNC+0LLQvtC00LjRgtC4INC3INC90LjQvNC4INCx0YPQtNGMINGP0LrRliDQvNCw0L3RltC/0YPQu9GP0YbRltGXICjRgNGD0YXQsNGC0Lgg0Lcg0LzRltGB0YbRjywg0YLRgNGD0YHQuNGC0LgsINCy0ZbQtNC60YDQuNCy0LDRgtC4INGC0L7RidC+KTsnLCAn0L/RgNC+0LLQvtC00LjRgtC4INC3INC90LjQvNC4INCx0YPQtNGMINGP0LrRliDQvNCw0L3RltC/0YPQu9GP0YbRltGXINGJ0L7QtNC+INC70L7QutCw0LvRltC30LDRhtGW0Zcg0YLQvtGJ0L47JywgJ9C/0YDQvtCy0L7QtNC40YLQuCDQtyDQvdC40LzQuCDQsdGD0LTRjCDRj9C60ZYg0LzQsNC90ZbQv9GD0LvRj9GG0ZbRlyAo0YDRg9GF0LDRgtC4INC3INC80ZbRgdGG0Y8sINGC0YDRg9GB0LjRgtC4LCDQstGW0LTQutGA0LjQstCw0YLQuCDRgtC+0YnQvikg0L/RgNCw0YbRltCy0L3QuNC60LDQvCwg0Y/QutGWINC90LUg0YPQv9C+0LLQvdC+0LLQsNC20LXQvdGWINC90LAg0L/RgNC+0LLQtdC00LXQvdC90Y8g0YHQv9C10YbRltCw0LvRjNC90LjRhSDQstC40LHRg9GF0L7RgtC10YXQvdGW0YfQvdC40YUg0YDQvtCx0ZbRgjsnLCAn0YDRg9GF0LDRgtC4INC3INC80ZbRgdGG0Y8sINGC0YDRg9GB0LjRgtC4LCDQstGW0LTQutGA0LjQstCw0YLQuCDQtNC+INC/0L7QutC4INC00LDQvdGWINC/0YDQtdC00LzQtdGC0Lgg0L3QtSDQsdGD0LTRg9GC0Ywg0LvQvtC60LDQu9GW0LfQvtCy0LDQvdGWLiddLFxyXG4gICAgICAgIGNvcnJlY3Q6IDJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246ICfQoyDRgNCw0LfRliDQstC40Y/QstC70LXQvdC90Y8g0LLQuNCx0YPRhdC+0LLQvtGXINGA0LXRh9C+0LLQuNC90LgsINGP0LrQsCDRgdGF0L7QttCwINC90LAg0YHQsNC80L7RgNC+0LHQvdGDLCDQv9C+0LTQsNC70YzRiNGWINC00ZbRlyDQtyDQvdC10Y4g0L/RgNC+0LLQvtC00Y/RgtGM0YHRjzonLFxyXG4gICAgICAgIGFuc3dlcnM6IFsn0L/RltGB0LvRjyDQvtCz0LvRj9C00YMg0YHQv9C10YbRltCw0LvRltGB0YLQvtC8LdCy0LjQsdGD0YXQvtGC0LXRhdC90ZbQutC+0Lw7JywgJ9C/0ZbRgdC70Y8g0ZfRlyDQt9Cy0L7Qu9C+0LbQtdC90L3RjzsnLCAn0L/RltGB0LvRjyDRgNC10YLQtdC70YzQvdC+0Zcg0L/QtdGA0LXQstGW0YDQutC4INC90LAg0L3QsNGP0LLQvdGW0YHRgtGMINGB0LDQvNC+0YDQvtCx0L3QuNGFINC30LDRgdC+0LHRltCyINGW0L3RltGG0ZbRjtCy0LDQvdC90Y87JywgJ9C/0ZbRgdC70Y8g0LLRltC0XFwn0ZTQtNC90LDQvdC90Y8g0LfQsNGA0Y/QtNGDINGA0LXRh9C+0LLQuNC90Lgg0LLRltC0INC30LDRgdC+0LHRgyDRltC90ZbRhtGW0Y7QstCw0L3QvdGPLiddLFxyXG4gICAgICAgIGNvcnJlY3Q6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcXVlc3Rpb246ICfQr9C60ZYg0YDQvtCx0L7RgtC4INC/0YDQvtCy0L7QtNGP0YLRjNGB0Y8g0LIg0LfQsNGB0L7QsdCw0YUg0ZbQvdC00LjQstGW0LTRg9Cw0LvRjNC90L7Qs9C+INC30LDRhdC40YHRgtGDPycsXHJcbiAgICAgICAgYW5zd2VyczogWyfRgdC/0LXRhtGW0LDQu9GM0L3RliDQstC40LHRg9GF0L7RgtC10YXQvdGW0YfQvdGWINGA0L7QsdC+0YLQuDsnLCAn0LXQutGB0L/QtdGA0YLQvdC40Lkg0L7Qs9C70Y/QtCDQstC40LHRg9GF0L7QstC40YUg0LzQsNGC0LXRgNGW0LDQu9GW0LI7JywgJ9C/0L7RiNGD0Log0LLQuNCx0YPRhdC+0LLQuNGFINGA0LXRh9C+0LLQuNC9LCDQstC40LHRg9GF0L7QstC40YUg0L/RgNC40YHRgtGA0L7Rl9CyINGC0LAg0LrQvtC90YHRgtGA0YPQutGC0LjQstC90L4g0YHRhdC+0LbQuNGFINC90LAg0L3QuNGFINC/0YDQtdC00LzQtdGC0ZbQsjsnLCAn0LLRltGA0L3QviDRgyDQvy4gMiDRgtCwIDMuJ10sXHJcbiAgICAgICAgY29ycmVjdDogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBxdWVzdGlvbjogJ9CX0LDQsdC+0YDQvtC90Y/RlNGC0YzRgdGPINC/0YDQvtCy0LXQtNC10L3QvdGPINC+0LPQu9GP0LTRgyDQvNGW0YHRhtGPINC/0L7QtNGW0Zcg0LfQsCDRhNCw0LrRgtC+0Lwg0LLQuNCx0YPRhdGDOiAnLFxyXG4gICAgICAgIGFuc3dlcnM6IFsn0LHQtdC3INGD0LfQs9C+0LTQttC10L3QvdGPINC30ZYg0YHQv9C10YbRltCw0LvRltGB0YLQsNC80Lgg0LLRltC00L/QvtCy0ZbQtNC90LjRhSDRgdC70YPQttCxICjRgdC70YPQttCx0Lgg0LXQu9C10LrRgtGA0L7Qv9C+0YHRgtCw0YfQsNC90L3Rjywg0LPQsNC30L7QstC+0Zcg0YHQu9GD0LbQsdC4LCDQstC+0LTQvtC60LDQvdCw0LvRgyDRgtC+0YnQvikg0YnQvtC00L4g0LzQvtC20LvQuNCy0L7RgdGC0ZYg0LHQtdC30L/QtdGH0L3QvtCz0L4g0L/QtdGA0LXQsdGD0LLQsNC90L3RjyDQvdCwINC80ZbRgdGG0ZYg0LLQuNCx0YPRhdGDOycsICfQsdC10Lcg0L7Qs9C70Y/QtNGDINGC0LXRgNC40YLQvtGA0ZbRlyDQvdCwINC90LDRj9Cy0L3RltGB0YLRjCDQstGC0L7RgNC40L3QvdC40YUg0LLQuNCx0YPRhdC+0LLQuNGFINC/0YDQuNGB0YLRgNC+0ZfQsiDQsNCx0L4g0LfQsNC70LjRiNC60ZbQsiDQstC40LHRg9GF0L7QstC40YUg0YDQtdGH0L7QstC40L0sINGJ0L4g0L3QtSDQv9GA0L7RgNC10LDQs9GD0LLQsNC70Lg7JywgJ9Cx0LXQtyDQvtCz0LvRj9C00YMg0YLQtdGA0LjRgtC+0YDRltGXINC90LAg0L3QsNGP0LLQvdGW0YHRgtGMINCy0YLQvtGA0LjQvdC90LjRhSDQstC40LHRg9GF0L7QstC40YUg0L/RgNC40YHRgtGA0L7Rl9CyINCw0LHQviDQstC40LHRg9GF0L7QvdC10LHQtdC30L/QtdGH0L3QuNGFINC30LDQu9C40YjQutGW0LIg0LDQsdC+INGH0LDRgdGC0LjQvSDQstC40LHRg9GF0L7QstC+0LPQviDQv9GA0LjRgdGC0YDQvtGOLCDRidC+INCy0LjQsdGD0YXQvdGD0LI7JywgJ9Cy0ZbRgNC90L4g0YMg0L8uIDEg0YLQsCAzLiddLFxyXG4gICAgICAgIGNvcnJlY3Q6IDNcclxuICAgIH0sXHJcblxyXG5dXHJcbnZhciBhcnJPZlF1ZXN0aW9uczogbnVtYmVyW10gPSBbXTtcclxudmFyIGFyck9mQ29ycmVjdEFuc3dlcnM6IHN0cmluZ1tdID0gW107XHJcbnZhciBhcnJPZkFuc3dlcnM6IHN0cmluZ1tdID0gW107XHJcbnZhciByZXN1bHQgPSAwO1xyXG52YXIgaXNFbmQgPSBmYWxzZTtcclxuXHJcbmNsYXNzIFRlc3Qge1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByUWVzdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhbnN3ZXJzOiBzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgY29ycmVjdDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJhbmQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBhcnJRdWVzdGlvbltyYW5kXS5xdWVzdGlvbjtcclxuICAgICAgICB0aGlzLmFuc3dlcnMgPSBhcnJRdWVzdGlvbltyYW5kXS5hbnN3ZXJzO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdCA9IGFyclF1ZXN0aW9uW3JhbmRdLmNvcnJlY3Q7XHJcbiAgICAgICAgdGhpcy5yUWVzdGlvbiA9IHJhbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRm9ybSgpIHtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZGaXJzdCcpO1xyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIGZvcm0uaWQgPSAnZm9ybSdcclxuICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwLmlkID0gJ3AnO1xyXG4gICAgICAgIHAuaW5uZXJIVE1MID0gdGhpcy5xdWVzdGlvblxyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9ybSkuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGEgPSBhcnJRdWVzdGlvblt0aGlzLnJRZXN0aW9uXS5hbnN3ZXJzW2ldO1xyXG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGxldCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XHJcbiAgICAgICAgICAgIGlucHV0LmlkID0gYTtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdyYWRpbyc7XHJcbiAgICAgICAgICAgIGlucHV0Lm5hbWUgPSAnY2hvaWNlJztcclxuICAgICAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYTtcclxuICAgICAgICAgICAgbGFiZWwuaHRtbEZvciA9IGE7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tUXVlc3Rpb24oKTogbnVtYmVyIHtcclxuICAgIGxldCByYW5kUXVlc3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJRdWVzdGlvbi5sZW5ndGgpO1xyXG4gICAgbGV0IGEgPSBhcnJRdWVzdGlvbltyYW5kUXVlc3Rpb25dLmFuc3dlcnNbYXJyUXVlc3Rpb25bcmFuZFF1ZXN0aW9uXS5jb3JyZWN0XTtcclxuICAgIGlmIChhcnJPZkNvcnJlY3RBbnN3ZXJzLmxlbmd0aCA9PT0gYXJyUXVlc3Rpb24ubGVuZ3RoKSB7XHJcbiAgICAgICAgc3RvcCgnUXVlc3Rpb25zIGVuZCEnKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGFyck9mQ29ycmVjdEFuc3dlcnMuaW5jbHVkZXMoYSkpIHtcclxuICAgICAgICByZXR1cm4gcmFuZG9tUXVlc3Rpb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXJyT2ZRdWVzdGlvbnMucHVzaChyYW5kUXVlc3Rpb24pO1xyXG4gICAgICAgIGFyck9mQ29ycmVjdEFuc3dlcnMucHVzaChhKTtcclxuICAgICAgICByZXR1cm4gcmFuZFF1ZXN0aW9uO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydCgpOiB2b2lkIHtcclxuICAgIGxldCB0ZXN0ID0gbmV3IFRlc3QocmFuZG9tUXVlc3Rpb24oKSk7XHJcbiAgICB0ZXN0LmNyZWF0ZUZvcm0oKVxyXG4gICAgYnRuU3RhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgYnRuTmV4dC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICBidG5TdG9wLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIHN0YXJ0VGltZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dCgpOiB2b2lkIHtcclxuICAgIGNoZWNrKCk7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpdkZpcnN0JylcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgYFxyXG4gICAgbGV0IHRlc3QgPSBuZXcgVGVzdChyYW5kb21RdWVzdGlvbigpKTtcclxuICAgIHRlc3QuY3JlYXRlRm9ybSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3AobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlzRW5kID0gdHJ1ZVxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZGaXJzdCcpXHJcbiAgICBkaXYuaW5uZXJIVE1MID0gYGBcclxuICAgIGJ0blN0YXJ0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIGJ0bk5leHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGJ0blN0b3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyT2ZBbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyck9mQW5zd2Vyc1tpXSA9PT0gYXJyT2ZDb3JyZWN0QW5zd2Vyc1tpXSkge1xyXG4gICAgICAgICAgICByZXN1bHQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3JyZWN0JylcclxuICAgIHJlcy5pbm5lckhUTUwgPSAnQ29ycmVjdCBhbnN3ZXJzIC0gJyArIHJlc3VsdCArICcgZnJvbSAnICsgYXJyUXVlc3Rpb24ubGVuZ3RoICsgJzxicj4nICsgJ1BlcmNlbnQgLSAnICsgTWF0aC5mbG9vcihyZXN1bHQgKiAxMDAgLyBhcnJPZkFuc3dlcnMubGVuZ3RoKSArICclJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVjaygpIHtcclxuICAgIGxldCBpbnB1dENoZWNrZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIGxldCBxID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRDaGVja2VkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0Q2hlY2tlZFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGFyck9mQW5zd2Vycy5wdXNoKGlucHV0Q2hlY2tlZFtpXS5pZCk7XHJcbiAgICAgICAgICAgIHErKztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHEgPT09IDApIHtcclxuICAgICAgICBhcnJPZkFuc3dlcnMucHVzaCgnTkEnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcclxuICAgIGNvbnN0IHN0YXJ0aW5nTWludXRlcyA9IDIwO1xyXG4gICAgbGV0IHRpbWUgPSBzdGFydGluZ01pbnV0ZXMgKiA2MFxyXG4gICAgY29uc3QgY291bnRkb3duRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRkb3duJyk7XHJcbiAgICB2YXIgcmVmcmVzaEludGVydmFsID0gc2V0SW50ZXJ2YWwodXBkYXRlQ291bnRkb3duLCAxMDAwKVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQ291bnRkb3duKCkge1xyXG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MClcclxuICAgICAgICBsZXQgc2Vjb25kczogbnVtYmVyIHwgc3RyaW5nID0gdGltZSAlIDYwXHJcbiAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/ICcwJyArIHNlY29uZHMgOiBzZWNvbmRzXHJcbiAgICAgICAgY291bnRkb3duRWwuaW5uZXJIVE1MID0gYCR7bWludXRlc306JHtzZWNvbmRzfWBcclxuICAgICAgICB0aW1lLS07XHJcbiAgICAgICAgaWYgKHRpbWUgPCAwKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocmVmcmVzaEludGVydmFsKTtcclxuICAgICAgICAgICAgc3RvcCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNFbmQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChyZWZyZXNoSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxubGV0IGJ0blN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blN0YXJ0Jyk7XHJcbmJ0blN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnQpO1xyXG5cclxubGV0IGJ0bk5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTmV4dCcpO1xyXG5idG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dCk7XHJcbmJ0bk5leHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbmxldCBidG5TdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blN0b3AnKTtcclxuYnRuU3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3ApO1xyXG5idG5TdG9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=