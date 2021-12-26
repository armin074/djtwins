import LocomotiveScroll from 'locomotive-scroll';


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


var cursor = document.getElementsByClassName(".cursor"),
follower = document.getElementsByClassName(".cursor-follower");


var posX = 0,
posY = 0,
mouseX = 0,
mouseY = 0;

TweenMax.to ({}, 0.016, {
    repeat: -1,
    onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
})