var nameinput=document.getElementById('name')
var numberinput=document.getElementById('number')
var cityinput=document.getElementById('city')
var submit=document.getElementById('submitbtn')
var tabla=document.querySelector('.table')
var tbody=document.querySelector('tbody')

submit.addEventListener('click',()=>{
if(nameinput.value==""||numberinput.value==""||cityinput.value==""){
   alert('please enter info')
}else{
   let tr=document.createElement('tr')
   let input1=document.createElement('input')
   let input2=document.createElement('input')
   let input3=document.createElement('input')
   input3.setAttribute('type','number')
   let btncontainer=document.createElement('div')
   let edit=document.createElement('span')
   let del=document.createElement('span')
   let td1=document.createElement('td')
   let td2=document.createElement('td')
   let td3=document.createElement('td')
   let td4=document.createElement('td')
   btncontainer.setAttribute('class','btncontainer')
   input1.setAttribute('readonly','readonly')
        input2.setAttribute('readonly','readonly')
        input3.setAttribute('readonly','readonly')

input1.value=nameinput.value
input2.value=cityinput.value
input3.value=numberinput.value
let editicon=`<i class="fa fa-pencil fa-customedit" aria-hidden="true"></i>`;
let saveicon=`<i class="fa fa-floppy-o  fa-customsave" aria-hidden="true"></i>`;
let delicon=`<i class="fa fa-trash   fa-customdel" aria-hidden="true"></i>`;
edit.innerHTML=editicon
del.innerHTML=delicon

btncontainer.appendChild(edit)
btncontainer.appendChild(del)

td1.appendChild(input1)
td2.appendChild(input2)
td3.appendChild(input3)
td4.appendChild(btncontainer)
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)

tbody.appendChild(tr)           
tabla.appendChild(tbody)
nameinput.value=""
numberinput.value=""
cityinput.value=""

edit.addEventListener('click',()=>{
      if(edit.innerHTML==editicon){
        input1.removeAttribute('readonly')
        input2.removeAttribute('readonly')
        input3.removeAttribute('readonly')
        input1.style.backgroundColor=' #b3ffe0'
        input2.style.backgroundColor=' #b3ffe0'
        input3.style.backgroundColor=' #b3ffe0'
        edit.innerHTML=saveicon
         }else{
        input1.setAttribute('readonly','readonly')
        input2.setAttribute('readonly','readonly')
        input3.setAttribute('readonly','readonly')
        input1.style.backgroundColor='rgb(255, 255, 255)';
        input2.style.backgroundColor='rgb(255, 255, 255)';
        input3.style.backgroundColor='rgb(255, 255, 255)';
      edit.innerHTML=editicon
      }


   } )  


del.addEventListener('click',()=>{
  
   tr.removeChild(td1)
   tr.removeChild(td2)
   tr.removeChild(td3)
   tr.removeChild(td4)
tbody.removeChild(tr) 

})
} 
 })