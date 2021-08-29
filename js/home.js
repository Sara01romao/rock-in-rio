
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
      <button onclick="modal()">Pré-Venda</button>
    </div>
    `)
  }).join(" ")}
  
  `
  
  function modal(){
    console.log("modal")
  
  }