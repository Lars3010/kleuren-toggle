const body = document.body;
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const text = document.getElementById('text');

//change screentext function
const changeText = (content) => {
    text.innerHTML = content;
};

//toggle class for animation
const toggleVisibility = () => {
    menu.classList.toggle('visible');
};

//change color function
const changeColor = (color) => {
    body.classList.remove(body.classList.value);
    body.classList.add(color);
    changeText(color);
};

//change checked input to match with keyboard selection
const changeCheckedInput = (selector) => {
    const input = document.querySelectorAll('.menu-item > input');
    input.forEach((item) => {
        item.checked = false;
        if(item.value === selector)
        {
            item.checked = true;
        }
    });
};

//menu button mouse over event listener
menuButton.addEventListener('mouseover', () => {
    toggleVisibility();
});

//add click eventlister to all inputs
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('click', () => {
        changeColor(input.value);
        toggleVisibility();
    });
});

//keyboard color switch eventlistener
document.addEventListener('keyup', (event) => {
    if(event.keyCode === 49)
    {
        changeColor("home");
        changeCheckedInput("home");
    }
    else if(event.keyCode === 50)
    {
        changeColor("red");
        changeCheckedInput("red");
    }
    else if(event.keyCode === 51)
    {
        changeColor('green');
        changeCheckedInput("green");
    }
    else if(event.keyCode === 52)
    {
        changeColor('orange');
        changeCheckedInput("orange");
    }
    else if(event.keyCode === 53)
    {
        changeColor('blue');
        changeCheckedInput("blue");
    }
    else {
        return;
    }
});