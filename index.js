
function createData(id,text){
  const keyAlready=Object.keys(localStorage).indexOf(id.toString());
  if(typeof(id)==='number' && keyAlready===-1){
    localStorage.setItem(id,JSON.stringify(text))
  } 
  else{
    console.log('Either your key is not a number or localstorage has already the same key')
  }
}

function getData(id){
 let data= localStorage.getItem(id);
 data=JSON.parse(data);
 return data;
}

function deleteData(id){
  localStorage.removeItem(id)
}

function updateData(index,text){
const item=window.localStorage.key(index);
  localStorage.setItem(item,text)
}

function getAllKeys(){
  return Object.keys(localStorage)
}