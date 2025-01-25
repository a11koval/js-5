const checkTextFields = (text1, text2) => {
    if (text1 && text2) {
        console.log("Обидва поля заповнені");
    } else {
        console.log("Не всі поля заповнені");
    }
};

const checkNumberFields = (num1, num2) => {
    const sum = num1 + num2;
    if (sum > 10) {
        console.log("Сума більша за 10");
    } else {
        console.log("Сума менша або дорівнює 10");
    }
};

const checkJavaScriptText = (text) => {
    if (text.includes("JavaScript")) {
        console.log("Текст містить слово JavaScript");
    } else {
        console.log("Текст не містить слово JavaScript");
    }
};

let number = prompt("Введіть число:");


let message = '';

if (number > 10 && number < 20) {
    message = 'Число входить в діапазон від 10 до 20';
} else {
    message = 'Число не входить в діапазон від 10 до 20';
}


alert(message);
