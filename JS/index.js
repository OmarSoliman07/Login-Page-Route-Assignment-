var btn=document.getElementById('btn')
var btnsucc=document.getElementById('btnsucc')
var succ=document.getElementById('succ')
var nav=document.querySelector("nav")


function success(){
    if( btnsucc.classList.contains('d-none')){
        btnsucc.classList.replace('d-none','d-inline-block')
       }
       if( succ.classList.contains('d-none')){
        succ.classList.replace('d-none','d-inline-block')
       }
       
var nemo={
    nam:signup.value ,
    email:inputtwo.value,
    pass:inputone.value

}
container.push(nemo)
console.log(container);
localStorage.setItem("about",JSON.stringify(container))
var x=JSON.parse(localStorage.getItem('about'))

console.log(x[0].email);
console.log(x[0].pass); 
console.log(x[0]);





}




function btnsign(){
   if( signup.classList.contains('d-none')){
    signup.classList.replace('d-none','d-inline-block')
   }
   if(sign.classList.contains('d-block')){
    sign.classList.replace('d-block','d-none')

   }
   if(signin.classList.contains('d-none')){
    signin.classList.replace('d-none','d-block')

   }
   if( btnsucc.classList.contains('d-none')){
    btnsucc.classList.replace('d-none','d-inline-block')
   }
   if(btn.classList.contains('d-block')){
    btn.classList.add('d-none')
   }
   if( wrong.classList.contains('d-block')){wrong.classList.remove('d-block','d-none')}
   else{
       wrong.classList.add("d-none")

   }
}
function btnin(){
    if( signup.classList.contains('d-inline-block')){
        signup.classList.replace('d-inline-block','d-none')
       }
       if(sign.classList.contains('d-none')){
        sign.classList.replace('d-none','d-block')
    
       }
       if(signin.classList.contains('d-block')){
        signin.classList.replace('d-block','d-none')
       }
       if( btnsucc.classList.contains('d-inline-block')){
        btnsucc.classList.replace('d-inline-block','d-none')
       }
       if(btn.classList.contains('d-none')){
        btn.classList.replace('d-none','d-block')
       }
       if(succ.classList.contains('d-inline-block')){
        succ.classList.replace('d-inline-block','d-none')
       }
    

       





}
var signup=document.getElementById('signup')
var signin=document.getElementById('signin')
var sign=document.getElementById('sign')
var inputone=document.getElementById('inputone')
var inputtwo=document.getElementById('inputtwo')
var slideone=document.getElementById('slideone')
var slidetwo=document.getElementById('slidetwo')
var wrong=document.getElementById('wrong')
var container=[]

    
    
    function add(){
        var x=JSON.parse(localStorage.getItem('about'))
console.log(x[0].email);
console.log(x[0].pass);
console.log(inputone.value);



       
        if(inputtwo.value==x[0].email && inputone.value==x[0].pass){
            if(nav.classList.contains("d-none")){
                nav.classList.replace('d-none','d-block')

                
            }
            if(slideone.classList.contains('d-block')){
                slideone.classList.replace('d-block','d-none')
                slidetwo.classList.replace('d-none','d-block')
               
            document.getElementById('slidetwo').innerHTML= ` <div class="w50">
            <h2>Welcome${x[0].nam}</h2>
    
        </div>`
            }
    
    
    
        }
        else{
            if( wrong.classList.contains('d-none'))
                {wrong.classList.remove('d-none','d-block')
            }
        }

}
function logout(){
    if(slideone.classList.contains('d-none')){
        slideone.classList.replace('d-none','d-block')
        slidetwo.classList.replace('d-block','d-none')
        if(nav.classList.contains("d-block")){
            nav.classList.replace('d-block','d-none')

            
        }
    }


}