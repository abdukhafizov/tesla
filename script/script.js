let up_cond = document.querySelector("#up_cond");
let down_cond = document.querySelector("#down_cond");
let size = document.querySelector("#size");
let rotating_blocks = document.querySelectorAll(".rotating_block");
let up_fast = document.querySelector("#up_fast");
let down_fast = document.querySelector("#down_fast");
let fast = document.querySelector("#fast");
let currentValue = parseInt(fast.textContent);
let km_h = document.querySelector("#km_h");
let currentkm = parseInt(km_h.textContent);
let Conditioner_txt = document.querySelector("#Conditioner_txt");
let Conditioner = document.querySelector("#Conditioner");
let slider = document.querySelector(".slider");
let temp = document.querySelector("#temp");
let currenttemp = parseInt(temp.textContent);
let temp_up = document.querySelector("#temp_up");
let temp_down = document.querySelector("#temp_down");
let switcher = document.querySelector(".switch");
let all_about_of_salon = document.querySelector(".all_about_of_salon")
let viewSwitch = document.querySelectorAll("#viewSwitch");
let black = document.querySelector("#black")
let white = document.querySelector("#white")
let beige = document.querySelector("#beige")
let color = document.querySelector(".color")
let sec = document.querySelector(".sec")

black.onclick = () =>{
    color.style.backgroundImage = "url(../img/black.svg)"
}
white.onclick = () =>{
    color.style.backgroundImage = "url(../img/white.svg)"
}
beige.onclick = () =>{
    color.style.backgroundImage = "url(../img/beige.svg)"
}

viewSwitch.forEach((element) => {
    element.onclick = () => {
        element.classList.toggle("a");

        if (element.classList.contains("a")) {
            all_about_of_salon.style.display = "block"
        } else {
            all_about_of_salon.style.display = "none"
        }
    };
});




slider.onclick = () => {
    slider.classList.toggle("a");

    if (slider.classList.contains("a")) {
        currentkm -= 20;
        km_h.textContent = currentkm + "км";
        console.log("Класс 'a' был добавлен");
    } else {
        currentkm += 20;
        km_h.textContent = currentkm + "км";
        console.log("Класс 'a' был удален");
    }
};



temp_up.onclick = () => {
  
        currenttemp += 1;
        temp.textContent = currenttemp + "°";
        if (currenttemp > 15) {
            Conditioner_txt.innerText = "Кондиционер";
        }
    
};

temp_down.onclick = () => {
    currenttemp -= 1;
    temp.textContent = currenttemp + "°";

    if (currenttemp <= 15) {
        Conditioner_txt.innerText = "Печка";
    } 
};


up_cond.onclick = () => {
    size.innerText = "21"
    size.innerText = "21";
    rotating_blocks.forEach((block) => {
        block.style.backgroundImage = "url(../img/21size-removebg-preview.png)";
    });
}

down_cond.onclick = () => {
    size.innerText = "19"
    rotating_blocks.forEach((block) => {
        block.style.backgroundImage = "url(../img/19size-removebg-preview.png";
    });
}

up_fast.onclick = () => {
    if (currentValue < 80) {
        currentValue += 5;
        currentkm -= 10;
        km_h.textContent = currentkm + "км"
        fast.textContent = currentValue + " км/ч";
        rotating_blocks.forEach((block) => {
            block.style.animation = "rotate 1s infinite linear";
        });
    }
    if (currentValue == 80) {
        rotating_blocks.forEach((block) => {
            block.style.animation = "rotate 0.1s infinite linear";
        });
    } else if (currentValue == 75) {
        rotating_blocks.forEach((block) => {
            block.style.animation = "rotate 0.5s infinite linear";
        });
    }
};

down_fast.onclick = () => {
    if (currentValue > 20) {
        currentValue -= 5;
        currentkm += 10;
        km_h.textContent = currentkm + "км"
        fast.textContent = currentValue + " км/ч";
    }
    if (currentValue > 60) {
        rotating_blocks.forEach((block) => {
            block.style.animation = "rotate 2s infinite linear";
        });
    } else if (currentValue < 35) {
        rotating_blocks.forEach((block) => {
            block.style.animation = "rotate 4s infinite linear";
        });
    } else if (currentValue == 20) {
        rotating_blocks.forEach((block) => {
            block.style.animation = "rotate 8s infinite linear";
        });
    }
}
// Conditioner.onclick = () =>{
//     currentkm -= 20;
//     km_h.textContent = currentkm + "км"
// }

