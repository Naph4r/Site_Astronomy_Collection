

const images = [...document.querySelectorAll('.image')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; // will track our current image;

images.forEach((item, i) => {
item.addEventListener('click', () => {
updateImage(i);
popup.classList.toggle('active');
})
})


// https://github.com/Naph4r/Astronomy_Collection/blob/main/Astronomy_collection/assets/components/imagens_low/img1-low.jpg?raw=true

//https://github.com/kunaal438/image-popup/blob/master/img/img      assets/components/imagens/img${i+1}-low.jpg?raw=true
const updateImage = (i) => {
let path = `https://github.com/Naph4r/Astronomy_Collection/blob/main/Astronomy_collection/assets/components/imagens_low/img${i+1}-low.jpg?raw=true`;
largeImage.src = path;
// imageName.innerHTML = path; //
// imageIndex.innerHTML = `0${i+1}`; //
index = i;
}

closeBtn.addEventListener('click', () => {
popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
if(index > 0){
updateImage(index - 1);
}
})

rightArrow.addEventListener('click', () => {
if(index < images.length - 1){
updateImage(index + 1);
}
})








