const buttons=document.querySelectorAll('.btn');
const storeImages=document.querySelectorAll('.store-item')




function darkTheme(){
   let dark=document.getElementById('dark');
   let element=document.body;

    
//     document.body.style.backgroundColor='black';
//     document.body.style.transition='1s';
//     dark.style.backgroundColor='red';
//     dark.style.color='black';
//     dark.style.fontWeight="600";
//     document.getElementById('heading').style.color='white';

   if(dark.textContent.includes('Dark')){
    element.style.backgroundColor='black'
    element.style.color='white'
    dark.style.backgroundColor="white"
    dark.style.color="black";
    document.getElementById('dark').textContent='Light Theme';
    
   
   }
   else{
    document.getElementById('dark').textContent='Dark Theme';
    element.style.backgroundColor='white'
    element.classList.toggle('light-theme');

   }
}

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const filter=e.target.dataset.filter

        storeImages.forEach((item)=>{
            if(filter==="all"){
                item.style.display="block"
                
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.display="block"
                }
                else{
                    item.style.display="none"
                }
            }
        })
    })
})