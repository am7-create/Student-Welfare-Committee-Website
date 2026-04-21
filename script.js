// Typing effect loop
const text = "& Support Committee"; 
let i=0;
function type(){
  if(i<text.length){
    document.getElementById('typed').innerHTML+=text.charAt(i); i++;
    setTimeout(type,120);
  } else {
    setTimeout(()=>{ document.getElementById('typed').innerHTML=''; i=0; type(); }, 2000);
  }
}
type();

// Countdown 24h & progress bar
const totalTime = 86400000; //24 hours in ms
const end = new Date().getTime()+totalTime;
setInterval(()=>{
  const now=new Date().getTime();
  const d=end-now;
  const h=Math.floor(d/(1000*60*60));
  const m=Math.floor((d%(1000*60*60))/(1000*60));
  const s=Math.floor((d%(1000*60))/1000);
  document.getElementById('countdown').innerHTML=`<div class='time-box'>${h}h</div><div class='time-box'>${m}m</div><div class='time-box'>${s}s</div>`;
  document.getElementById('progress').style.width=`${((totalTime-d)/totalTime)*100}%`;
},1000);

// Show additional content after Get Started
function showAdditionalContent() {
  const section = document.getElementById('additional-content');
  section.classList.add('active');
  section.scrollIntoView({ behavior: 'smooth' });
}

// Open/Close Modals
function openModal(){document.getElementById('popup').style.display='flex';}
function closeModal(){document.getElementById('popup').style.display='none';}
function openLogin(){document.getElementById('login').style.display='flex';}
function closeLogin(){document.getElementById('login').style.display='none';}

// Open popup on card click
function openPopup(title,text){
  document.getElementById('modal-title').innerText=title;
  document.getElementById('modal-text').innerText=text;
  openModal();
}

// Scroll reveal
window.addEventListener('scroll',()=>{
  document.querySelectorAll('.card').forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-100) el.style.opacity=1;
  });
});

function loginSubmit() {
  const user = document.getElementById('userInput').value.trim(); // remove spaces

  // Allowed phone numbers
  const allowedUsers = ["70017xxxxx", "85350xxxxx"];

  if (allowedUsers.includes(user)) {
    alert("Login successful!");
    closeLogin();
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
