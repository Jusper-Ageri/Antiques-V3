
document.addEventListener('DOMContentLoaded', function(){
  // slideshow auto fade
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  let index = 0;
  function showNext(){
    slides.forEach(s=>s.classList.remove('show'));
    dots.forEach(d=>d.classList.remove('active'));
    index = (index+1) % slides.length;
    slides[index].classList.add('show');
    if(dots[index]) dots[index].classList.add('active');
  }
  if(slides.length>0){ slides[0].classList.add('show'); if(dots[0]) dots[0].classList.add('active'); setInterval(showNext,4500); }

  // prev/next controls
  window.plusSlides = function(n){ slides.forEach(s=>s.classList.remove('show')); index = (index + n + slides.length) % slides.length; slides[index].classList.add('show'); dots.forEach(d=>d.classList.remove('active')); if(dots[index]) dots[index].classList.add('active'); }
  window.currentSlide = function(n){ slides.forEach(s=>s.classList.remove('show')); index = n-1; slides[index].classList.add('show'); dots.forEach(d=>d.classList.remove('active')); if(dots[index]) dots[index].classList.add('active'); }

  // gallery modal
  const modal = document.getElementById('galleryModal');
  const btn = document.getElementById('viewGalleryBtn');
  const close = document.getElementById('galleryClose');
  const content = document.getElementById('galleryContent');
  if(btn){ btn.addEventListener('click', ()=>{ modal.style.display='flex'; content.innerHTML=''; for(let i=1;i<=6;i++){ let img = document.createElement('img'); img.src = `https://source.unsplash.com/900x600/?interior,decor,${i}`; content.appendChild(img); } }); }
  if(close){ close.addEventListener('click', ()=> modal.style.display='none'); }
  window.addEventListener('click',(e)=>{ if(e.target==modal) modal.style.display='none'; });

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{ a.addEventListener('click', function(e){ e.preventDefault(); const id = this.getAttribute('href').slice(1); const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth', block:'start'}); }); });

  // file input label
  window.fileSelected = function(input){ const label = document.getElementById('fileLabel'); if(input.files && input.files.length) label.textContent = input.files[0].name; }
});
