// script.js

document.addEventListener('DOMContentLoaded', () => {
    const stickman = document.getElementById('stickman');
    const gameContainer = document.getElementById('game-container');

    let stickmanPosition = {
        x: 50,
        y: 0
    };

    let isJumping = false;
    let jumpHeight = 100;
    let gravity = 2;
    let jumpSpeed = 5;
    let moveSpeed = 5;

    function moveStickman() {
        stickman.style.left = `${stickmanPosition.x}px`;
        stickman.style.bottom = `${stickmanPosition.y}px`;
    }

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let upInterval = setInterval(() => {
            if (stickmanPosition.y >= jumpHeight) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (stickmanPosition.y <= 0) {
                        clearInterval(downInterval);
                        stickmanPosition.y = 0;
                        isJumping = false;
                    } else {
                        stickmanPosition.y -= gravity;
                        moveStickman();
                    }
                }, 20);
            } else {
                stickmanPosition.y += jumpSpeed;
                moveStickman();
            }
        }, 20);
    }

    function control(event) {
        if (event.key === 'ArrowLeft') {
            stickmanPosition.x -= moveSpeed;
        } else if (event.key === 'ArrowRight') {
            stickmanPosition.x += moveSpeed;
        } else if (event.key === 'ArrowUp') {
            jump();
        }
        moveStickman();
    }

    document.addEventListener('keydown', control);
    moveStickman();
});
