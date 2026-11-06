
(function(){
  var b=document.getElementById('menuBtn'),n=document.getElementById('mainNav');
  if(b&&n){b.addEventListener('click',function(){n.classList.toggle('open')});}
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')});}
  var y=document.getElementById('yr'); if(y){y.textContent=new Date().getFullYear();}
})();
