const firstbtn=document.getElementById("yes");
const heading=document.getElementById("heading");
firstbtn.onclick=function(){
    heading.textContent="I love you to..."
}
const secondBtn=document.getElementById("no");
secondBtn.addEventListener('mouseover',()=>{
    let i=Math.floor(Math.random()*(80-1)+1);
    let j=Math.floor(Math.random()*(80-1)+1);
    secondBtn.style.top=j+"%";
    secondBtn.style.left=i+"%";
})
