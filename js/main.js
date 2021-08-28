  var login = document.querySelector("#login");
  var senha = document.querySelector("#senha");

  var senhas =123456;
  var users = "teste@teste.com";



  function entrar(){
      if(senhas==senha.value && users == login.value){
          console.log('ok')
          window.location.href = "http://127.0.0.1:5500/pages/home.html";
      }else{
        document.getElementById("msg").innerHTML = "senha errada";

      }
        

}
  
  
