/* easy way */

//  document.getElementById("btnId").addEventListener('click', function(){
//    let inputField = document.getElementById('inputId');
//    let  inputValue = (inputField.value) ; 
//    /* console.log(inputValue);  */
//     inputValue.value = '' ;
 
  
//    let divCreate = document.getElementById('divs');
//    let ulCreate = document.createElement('ul')
//    let liTag = document.createElement('li');
//    liTag.innerHTML = ` <h1 style=" color: blue;" > ${inputField.value} </h1> ` ;

//    ulCreate.appendChild(liTag)
//    divCreate.appendChild(ulCreate) ;
//    /* divCreate.classList.add('style') */
// }) ;



//  AlterNative way and self try

let btn = () => {
    let inputField = document.getElementById('inputId');
   let  inputValue = (inputField.value) ; 
       /*  console.log(inputValue);  */
        inputField.value = '' ;
    showData(inputValue);
}
let showData = inputValue => {
    /* btn(); */
    let divCreate = document.getElementById('divs');
       let ulCreate = document.createElement('ul')
       let liTag = document.createElement('li');
       liTag.innerHTML = ` <h1 style=" color: blue;" > ${inputValue} </h1> ` ;
    
       ulCreate.appendChild(liTag)
       divCreate.appendChild(ulCreate) ;
        divCreate.classList.add('style') 

}



