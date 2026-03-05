const items = document.querySelectorAll(".gallery-item");
const filterBtns = document.querySelectorAll(".filter-btn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let visible = [...items];
let index = 0;
let slideshow;

/* Filter */
filterBtns.forEach(btn=>{
  btn.onclick=()=>{
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const val=btn.dataset.filter;
    visible=[];

    items.forEach(item=>{
      if(val==="all"||item.classList.contains(val)){
        item.style.display="block";
        visible.push(item);
      }else{
        item.style.display="none";
      }
    });
  };
});

/* Lightbox Open */
items.forEach(item=>{
  item.onclick=()=>{
    index=visible.indexOf(item);
    show();
    lightbox.classList.add("active");
    startSlide();
  };
});

function show(){
  const img=visible[index].querySelector("img");
  const title=visible[index].querySelector("h3").innerText;

  lightboxImg.src=img.src;
  lightboxTitle.textContent=title;
}

/* Navigation */
nextBtn.onclick=()=>{
  index=(index+1)%visible.length;
  show();
};

prevBtn.onclick=()=>{
  index=(index-1+visible.length)%visible.length;
  show();
};

/* Close */
closeBtn.onclick=()=>{
  lightbox.classList.remove("active");
  stopSlide();
};

/* Slideshow */
function startSlide(){
  slideshow=setInterval(()=>{
    nextBtn.click();
  },3000);
}

function stopSlide(){
  clearInterval(slideshow);
}

/* Like Button */
document.querySelectorAll(".like").forEach(btn=>{
  btn.onclick=(e)=>{
    e.stopPropagation();
    btn.classList.toggle("active");
  };
});

/* Download */
document.querySelectorAll(".download").forEach((btn,i)=>{
  btn.onclick=(e)=>{
    e.stopPropagation();
    const url=items[i].querySelector("img").src;
    const a=document.createElement("a");
    a.href=url;
    a.download="image.jpg";
    a.click();
  };
});