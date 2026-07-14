/* ==========================
   PASSCODE
========================== */

let code = "";
const passcode = "011426";

const dots = document.querySelectorAll(".dots span");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("fill", index < code.length);
    });
}

function press(num) {

    if (code.length < 6) {
        code += num;
        updateDots();
    }

    if (code.length === 6) {

        if (code === passcode) {

            document.body.style.transition = "0.8s";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location = "surprise.html";
            }, 800);

        } else {

            document.getElementById("wrong").innerHTML = "Wrong Passcode 🤍";
            code = "";
            updateDots();

        }

    }

}

function erase() {

    code = code.slice(0, -1);
    updateDots();

}


/* ==========================
   SURPRISE PAGE
========================== */

if (document.body.classList.contains("surprise")) {

    const pictures = [
        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg",
        "images/pic6.jpg",
        "images/pic7.jpg"
    ];

    let current = 0;

    const slide = document.getElementById("slide");
    const progress = document.getElementById("progress");

    function nextPicture() {

        slide.style.opacity = "0";

        progress.style.transition = "none";
        progress.style.width = "0%";

        setTimeout(() => {

            current++;

            if (current >= pictures.length) {
                current = 0;
            }

            slide.src = pictures[current];

            slide.style.opacity = "1";

            progress.style.transition = "3.5s linear";
            progress.style.width = "100%";

        }, 300);

    }

    progress.style.width = "100%";
    progress.style.transition = "3.5s linear";

    setInterval(nextPicture, 3500);



    /* MUSIC */

    const music = document.getElementById("music");
    const musicBtn = document.getElementById("musicBtn");

    musicBtn.onclick = function () {

        if (music.paused) {

            music.play();
            musicBtn.innerHTML = "⏸ Pause";

        } else {

            music.pause();
            musicBtn.innerHTML = "🎵 Play Our Song";

        }

    };



    /* ENVELOPE */

    const envelope = document.getElementById("letterCard");
    const letter = document.getElementById("letter");

    envelope.onclick = function () {

        envelope.classList.add("open");

        setTimeout(() => {

            envelope.style.display = "none";
            letter.style.display = "block";

            letter.scrollIntoView({
                behavior: "smooth"
            });

            startTypewriter();

        }, 1200);

    };



    /* FLOATING HEARTS */

    const hearts = document.getElementById("hearts");

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        hearts.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 7000);

    }

    setInterval(createHeart, 400);

}


/* ==========================
   TYPEWRITER
========================== */

function startTypewriter() {

    const output = document.getElementById("typewriter");
    const source = document.getElementById("letterText");

    if (!output || !source) return;

    output.innerHTML = "";

    const text = source.textContent.trim();

    let i = 0;

    function type() {

        if (i < text.length) {

            if (text.charAt(i) === "\n") {

                output.innerHTML += "<br>";

            } else {

                output.innerHTML += text.charAt(i);

            }

            i++;

            setTimeout(type, 35);

        } else {

            output.innerHTML += '<span class="cursor">|</span>';

        }

    }

    type();

}


/* ==========================
   CLOCK
========================== */

function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;

    clock.innerHTML = h + ":" + m;

}

setInterval(updateClock, 1000);

updateClock();