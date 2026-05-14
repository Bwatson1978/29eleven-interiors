// GA4 Event Tracking — 29 Eleven Interiors
(function(){
  if(typeof gtag !== 'function') return;

  // Phone clicks
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="tel:"]');
    if(a) gtag('event','phone_call',{event_category:'contact',event_label:a.textContent.trim()});
  });

  // Email clicks
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="mailto:"]');
    if(a) gtag('event','email_click',{event_category:'contact',event_label:a.textContent.trim()});
  });

  // CTA buttons
  document.addEventListener('click', function(e){
    var btn = e.target.closest('a[href*="inquire"],.unlock-btn,.bc-btn,.cta-btn,.btn-submit');
    if(btn) gtag('event','cta_click',{event_category:'engagement',event_label:btn.textContent.trim().substring(0,50)});
  });

  // Project card clicks
  document.addEventListener('click', function(e){
    var card = e.target.closest('.project-card,.pgrid-card,.ip-card');
    if(card){
      var name = card.querySelector('.pc-name,.pgrid-name,.ip-name');
      gtag('event','project_view',{event_category:'portfolio',event_label:name?name.textContent.trim():'unknown'});
    }
  });

  // Form submission
  var sb = document.querySelector('.btn-submit');
  if(sb) sb.addEventListener('click', function(){ gtag('event','generate_lead',{event_category:'lead',event_label:'inquiry_form'}); });

  // Scroll depth
  var ms=[25,50,75,100],fired={};
  window.addEventListener('scroll',function(){
    var p=Math.round((window.scrollY/(document.body.scrollHeight-window.innerHeight))*100);
    ms.forEach(function(m){ if(p>=m&&!fired[m]){ fired[m]=true; gtag('event','scroll_depth',{event_category:'engagement',event_label:m+'%'}); }});
  },{passive:true});
})();
