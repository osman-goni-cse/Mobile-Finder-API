
// Load all phones according to search

const loadPhones = () => {
  const searchInput = document.getElementById('phone-text');
  const searchText = searchInput.value;

  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res => res.json())
  .then(data => displayPhones(data.data))

  searchInput.value = '';
}

// Show all phones 

const displayPhones = (phones) => {

  // console.log(phones)
  const length = Math.min(20, phones.length);
  // console.log(length);
  const showdetails = document.getElementById('show-details');
  showdetails.textContent = '';

  let count = 1;
  const showPhones = document.getElementById('show-phones');

  showPhones.textContent = '';

  for (const phone of phones) {
    if(count > 20) {
      break;
    }
    else {
      // console.log(phone);
      count += 1;
      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = `
      <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h6 class="card-text"> <span class="fw-bold">Phone Name: </span> ${phone.phone_name} </h6>
          <h6 class="card-text"><span class="fw-bold">Brand Name: </span>${phone.brand}</h6>
        </div>
        <div class="card-footer">
          <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary w-100">Details</button>
        </div>
      </div>
      `
      showPhones.appendChild(div);
    }
  }
}

// Details

const loadDetails = (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`

  fetch(url)
  .then(res => res.json())
  .then(data => showPhoneDetails(data.data))
}

// dynamic html

// const dynamicTemplate = (phoneDetails) => {
//   const tr = document.createElement('tr');
//   const td = document.createElement('td');
//   td.classList.add('table-data');
//   td.classList.add('fw-bold');
//   td.innerText = 'Sensors';

//   for (const sensor of phoneDetails.mainFeatures.sensors) {
//     const td = document.createElement('td')
//     td.classList.add('table-data');
//     td.innerText = sensor;
//     tr.appendChild(td);
//   }
//   return tr;
//   console.log(tr);
// }

// show Details of a phone

const showPhoneDetails = (phoneDetails) => {

  console.log(phoneDetails)
  console.log(phoneDetails.others)
  const showdetails = document.getElementById('show-details');
  showdetails.textContent = '';

  // console.log(phoneDetails.mainFeatures)
  // for(const [key, value] of Object.entries(phoneDetails.mainFeatures)) {
    
  //   if(!Array.isArray(value))
  //     console.log(key, value)

  // }style="width: 18rem;"

  

  /* This is */


  
  // const tr = document.createElement('tr');
  // const td = document.createElement('td');
  // td.classList.add('table-data');
  // td.classList.add('fw-bold');
  // td.innerText = 'Sensors';

  // for (const sensor of phoneDetails.mainFeatures.sensors) {
  //   const td = document.createElement('td')
  //   td.classList.add('table-data');
  //   td.innerText = sensor;
  //   tr.appendChild(td);
  // }

  // console.log(tr);

  showdetails.innerHTML = `
  <div style="width: 18rem;" class="card mx-auto">
    <img src="${phoneDetails.image}" class="card-img-top" alt="..." style="height:>
    <div class="card-body">
      
      <table class="w-100 mt-3">
        <tr>
          <td class="fw-bold"> Phone Name </td>
          <td class="table-data"> ${phoneDetails.name} </td>
        </tr>
        <tr>
          <td class="fw-bold"> Release Date </td>
          <td class="table-data"> ${phoneDetails.releaseDate?phoneDetails.releaseDate:'Coming Soon...'} </td>
        </tr>
      </table>
      
      <div>

          <table class="mt-3 w-100">
            <tr>
              <td class="fw-bold text-center"  colspan="2"> Main Features </td>
            </tr>
            <tr>
              <td  class="fw-bold "> Chipset </td>
              <td class="table-data">${phoneDetails.mainFeatures.chipSet?phoneDetails.mainFeatures.chipSet:''}  </td>
            </tr>
            <tr>
              <td  class="fw-bold "> Display Size </td>
              <td class="table-data">${phoneDetails.mainFeatures.displaySize?phoneDetails.mainFeatures.displaySize:''} </td>
            </tr>

            <tr>
              <td  class="fw-bold "> Memory </td>
              <td class="table-data">${phoneDetails.mainFeatures.memory?phoneDetails.mainFeatures.memory:''} </td>
            </tr>

            <tr>
              <td  class="fw-bold "> Storage </td>
              <td class="table-data">${phoneDetails.mainFeatures.storage?phoneDetails.mainFeatures.storage:''} </td>
            </tr>
          </table>

          <table class="mt-3 w-100">
            <tr>
              <td class="fw-bold text-center"  > Sensors 
              </td>
              <td>
                ${phoneDetails.mainFeatures.sensors[0]?phoneDetails.mainFeatures.sensors[0]:''} <br>
                ${phoneDetails.mainFeatures.sensors[1]?phoneDetails.mainFeatures.sensors[1]:''} <br> 
                ${phoneDetails.mainFeatures.sensors[2]?phoneDetails.mainFeatures.sensors[2]:''} <br>
                ${phoneDetails.mainFeatures.sensors[3]?phoneDetails.mainFeatures.sensors[3]:''} <br>
                ${phoneDetails.mainFeatures.sensors[4]?phoneDetails.mainFeatures.sensors[4]:''} <br>
                ${phoneDetails.mainFeatures.sensors[5]?phoneDetails.mainFeatures.sensors[5]:''} <br>
                ${phoneDetails.mainFeatures.sensors[6]?phoneDetails.mainFeatures.sensors[6]:''} <br>
                ${phoneDetails.mainFeatures.sensors[7]?phoneDetails.mainFeatures.sensors[7]:''} <br>
                ${phoneDetails.mainFeatures.sensors[8]?phoneDetails.mainFeatures.sensors[8]:''}
                
                
              </td> 
            </tr>

          </table>


          <table class="my-3 w-100">
            <tr>
              <td class="fw-bold text-center"  colspan="2"> Others </td>
            </tr>
            
            <tr>
              <td  class="fw-bold "> WLAN </td>
              <td class="table-data">${phoneDetails.others?phoneDetails.others.WLAN:''}  </td>
            </tr>
            <tr>
              <td  class="fw-bold "> Bluetooth </td>
              <td class="table-data">${phoneDetails.others?phoneDetails.others.Bluetooth:''} </td>
            </tr>

            <tr>
              <td  class="fw-bold "> GPS </td>
              <td class="table-data">${phoneDetails.others?phoneDetails.others.GPS:''} </td>
            </tr>

            <tr>
              <td  class="fw-bold "> NFC </td>
              <td class="table-data">${phoneDetails.others?phoneDetails.others.NFC:''} </td>
            </tr>
            <tr>
              <td  class="fw-bold "> Radio </td>
              <td class="table-data">${phoneDetails.others?phoneDetails.others.Radio:''} </td>
            </tr>
            <tr>
              <td  class="fw-bold "> USB </td>
              <td class="table-data">${phoneDetails.others?phoneDetails.others.USB:''} </td>
            </tr>
          </table>
        
      </div>
      
    </div>
    
    
  </div>
  `
}