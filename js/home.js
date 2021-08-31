
//lista de ventos
const eventosData = [
    {
      name: "Iron Maiden",
      day: "25/03",
      photo: '../img/card1.png'
    },
    {
      name: "S.O.A.D",
      day: "25/03",
      photo: '../img/card2.png'
    },
    {
      name: "Bon Jovi",
      day: "25/03",
      photo: '../img/card3.png'
    },
    {
      name: "Metallica",
      day: "25/03",
      photo: '../img/card4.png'
    },
    
  ];
  
  
  document.getElementById("cardsEventos").innerHTML=`
  
  ${eventosData.map((e)=>{
    return (`
      <div class="cardEvento">
      <div >
          <img src="${e.photo}" alt="">
      </div>
  
      <p>${e.name}</p>
  
      <div class="dateEventos">
          <i class="fas fa-calendar-alt"></i>
          <p>${e.day}</p>
      </div>
      <button onclick="modalOpen()">Pré-Venda</button>
    </div>
    `)
  }).join(" ")}
  
  `

  
  function modalOpen(){
    var modalId = document.getElementById("modal")

    modalId.style.display="block"
  
  }



  function modalClose(){
    var modalId = document.getElementById("modal")

    modalId .style.display="none"
  
  }

  modal.addEventListener('click', function(e) {
    if (e.target == this){
      modalClose();
    } 
  });
 


  function modal2Open(){
    var modalId = document.getElementById("modal2")

    modalId.style.display="block"
    modalClose();
  
  }

  function modal2Close(){
    var modalId = document.getElementById("modal2")

    modalId .style.display="none"
  
  }

  modal2.addEventListener('click', function(e) {
    if (e.target == this){
      modal2Close();
    } 
  });
 