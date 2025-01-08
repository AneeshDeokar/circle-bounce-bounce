
document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('circle');
    const gameContainer = document.getElementById('game-container');

    let circlePosition = {
        x: 50,
        y: 0
    };

    let isJumping = false;
    let jumpHeight = 100;
    let gravity = 2;
    let jumpSpeed = 5;
    let moveSpeed = 5;

    function moveCircle() {
        circle.style.left = `${circlePosition.x}px`;
        circle.style.bottom = `${circlePosition.y}px`;
    }

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let upInterval = setInterval(() => {
            if (circlePosition.y >= jumpHeight) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (circlePosition.y <= 0) {
                        clearInterval(downInterval);
                        circlePosition.y = 0;
                        isJumping = false;
                    } else {
                        circlePosition.y -= gravity;
                        moveCircle();
                    }
                }, 20);
            } else {
                circlePosition.y += jumpSpeed;
                moveCircle();
            }
        }, 20);
    }

    function control(event) {
        if (event.key === 'ArrowLeft') {
            circlePosition.x -= moveSpeed;
        } else if (event.key === 'ArrowRight') {
            circlePosition.x += moveSpeed;
        } else if (event.key === 'ArrowUp') {
            jump();
        }
        moveCircle();
    }

    document.addEventListener('keydown', control);
    moveCircle();
});
