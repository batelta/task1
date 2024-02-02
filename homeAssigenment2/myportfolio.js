/*HIDE ON MOBILE*/
function showmobilemenu() {
const show =document.getElementById('mobile_nav')
show.style.display='flex'

}
function hidemobilemenu(){
    const hide=document.getElementById('mobile_nav')
    hide.style.display='none'
}

/*SCROLL ANIMATION*/
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
        });
    });
const hiddenelements=document.querySelectorAll('.hidden');
hiddenelements.forEach((el)=>observer.observe(el));