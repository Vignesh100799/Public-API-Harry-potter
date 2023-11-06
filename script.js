
// function to fetching error for url
function fetchingData(url){
  return new Promise((resolve, reject) => {
    fetch(url).then((response)=>{
      if(!response.ok){
        reject(new Error(`${response.status} ${response.statusText}`))
        
      }
      return response.json();
    })
    .then((data)=>{
      resolve(data);
    })
    .catch((error)=>{
      reject(error);
    })
  })
}

// async fucntion to get error from the fetching data

async function fetchData(url){
  try {
    const response = await fetchingData(url)
    display(response);
  } catch (error) {
    console.log("Error Found", error);
  }
}

let url = "https://hp-api.onrender.com/api/characters";
fetchData(url);

let card = document.getElementById('card')
function display(data){
        for(let i=0; i<data.length ; i++){
            
          //  console.log(data[i]); 

        let cardDetails =`
        <div class="card p-4 my-4" style="width: 18rem;">
  <img src="${data[i].image}" class="card-img-top" alt="Profile Image">
  <div class="card-body">
    <h5>${data[i].yearOfBirth}</h5>
    <h3 class="card-title">${data[i].name}</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Actor : ${data[i].actor}</li>
    <li class="list-group-item">Species : ${data[i].species}</li>
    <li class="list-group-item">Gender : ${data[i].gender}</li>
    <li class="list-group-item">Alive : ${data[i].alive}</li>

  </ul>
</div>
     
       
        `
        card.innerHTML += cardDetails

            // console.log(cardDetails);
    
        }}
  


