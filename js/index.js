let currentIndex = 0;
const images = [
    "asset/boy-programming-room.avif",
    "asset/hobby-programming-2.jpg",
    "asset/hobby-programming-3.jpg",
    "asset/hobby-programming-4.jpg"
];

function ChangeImageHobby() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.querySelector(".hobby-img-block img").src = images[currentIndex];
}

function toggleTheme() {
    const blocks = document.querySelectorAll('header, main, footer, .header-block, .title-block, .nav-item, #btn-contactme, .content-block, .hobby-programming, .my-skills, .list-skill, .hobby-football, #contactme,.form-container, form, .input-group, input, h2, label');
    blocks.forEach(block => {
        block.classList.toggle('dark-theme');
    });
}