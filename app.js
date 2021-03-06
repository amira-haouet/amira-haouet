
var text = document.querySelector('.division .letters');
text.innerHTML = text.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.division .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 500
    })
    .add({
        targets: '.division .line',
        translateX: [0, document.querySelector('.division .letters').getBoundingClientRect().width + 50],

        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.division .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 500,
        offset: '-=775',
        delay: (el, i) => 35 * (i + 1)
    }).add({
        targets: '.division',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });