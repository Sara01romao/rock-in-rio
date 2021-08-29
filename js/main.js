  var login = document.querySelector("#login");
  var senha = document.querySelector("#senha");

  var senhas =123456;
  var users = "teste@teste.com";

 const userData =[
   {
     name:"sara",
     login:"teste@teste.com",
     senha:123
   },

   {
    name:"Gome",
    login:"teste@teste.com",
    senha:1234
  }

 ]

//verificar usuario
 function verifica(){

  const result = userData.find(u => u.senha == senha.value && u.login == login.value)
  

  if(!result){
  
    document.getElementById("msg").innerHTML = "senha ou email inválido";
  }else{
    window.location.assign("http://127.0.0.1:5500/pages/home.html");
  
  }
  
 }

  



/************************************************************************ */
