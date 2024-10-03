// const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
// toggleThemeBtn.forEach((btn)=>{
//     btn.addEventListener("click" , () => {
//         if (localStorage.theme === "dark"){
//             document.documentElement.classList.remove("dark");
//             localStorage.theme = "light";
//         } else {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme" , "dark");
//         }
//     })
// })

const text = `من ماهان هستم یک برنامه نویس وب..!`;
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("output").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80); // تایپ هر حرف با تأخیر 100 میلی‌ثانیه
    }
}

typeText();


