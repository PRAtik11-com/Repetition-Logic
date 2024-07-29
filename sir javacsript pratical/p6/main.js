const slide = document.querySelector('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let corei = 0;
const totalSlide = slide.children.length;

function NextSlide() 
{
    corei = (corei + 1) % totalSlide;
    slide.style.transform = `translateX(-${corei * 100}px)`;
}

function PrevSlide() 
{
    corei = (corei - 1 + totalSlide) % totalSlide;
    slide.style.transform = `translateX(-${corei * 100}%)`;
}

//   NextSlide()
  next.addEventListener('click', NextSlide);
  prev.addEventListener('click', PrevSlide);