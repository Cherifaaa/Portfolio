const stars = [];
const STAR_COUNT = 30;

let mouseX = innerWidth / 2;
let mouseY = innerHeight / 2;

let lastMoveTime = Date.now();

/* mouse tracking */
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMoveTime = Date.now();

    stars.forEach(s => s.el.style.opacity = "1");
});

/* create stars */
for (let i = 0; i < STAR_COUNT; i++) {

    const el = document.createElement("div");
    el.innerHTML = "★";

    el.className = "star-trail";

    el.style.fontSize = (34 - i * 0.5) + "px";
    el.style.color = "#ff4db8";

    document.body.appendChild(el);

    stars.push({
        el,
        x: mouseX,
        y: mouseY
    });
}

/* animation */
function animate() {

    const idleTime = Date.now() - lastMoveTime;
    const idleProgress = Math.min(idleTime / 600, 1);

    let x = mouseX;
    let y = mouseY;

    stars.forEach((s, i) => {

        s.x += (x - s.x) * 0.25;
        s.y += (y - s.y) * 0.25;

        const baseOpacity = (1 - i / STAR_COUNT) * 0.9;
        const fadeOut = 1 - idleProgress;

        s.el.style.left = s.x + "px";
        s.el.style.top = s.y + "px";
        s.el.style.opacity = baseOpacity * fadeOut;

        const scale = 1 - (i / STAR_COUNT) * 0.7;

        s.el.style.transform =
            `translate(-50%, -50%) scale(${scale})`;

        x = s.x;
        y = s.y;
    });

    requestAnimationFrame(animate);
}

animate();