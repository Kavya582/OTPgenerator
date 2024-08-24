let mobile = document.getElementById('mobilenum');
let btn = document.getElementById('btn');
let para = document.getElementById('para');

btn.addEventListener('click',()=>{
    if(mobile.value.length==10){
        para.innerHTML = Math.floor(10000000 + Math.random() * 900000);
        para.style.fontSize = "22px";
        para.style.fontWeight = "500";
        para.style.color = "green";
    }
    else{
        para.innerHTML = "Mobile Number Must Contain 10 Digits";
        para.style.color = "red";
        para.style.fontWeight = "500";
        para.style.fontSize = "22px";
    }

})