const loadPhones = () => {
  const searchInput = document.getElementById('phone-text');
  const searchText = searchInput.value;

  fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  .then(res => res.json())
  .then(data => displayPhones(data.data))

  searchInput.value = '';
}

const displayPhones = (phones) => {

  console.log(phones)
  const length = Math.min(20, phones.length);
  console.log(length);

  let count = 1;
  const showPhones = document.getElementById('show-phones');

  showPhones.textContent = '';

  for (const phone of phones) {
    if(count > 20) {
      break;
    }
    else {
      console.log(phone);
      count += 1;
      const div = document.createElement('div');
      div.classList.add('col');

      div.innerHTML = `
      <div class="card h-100">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <!-- <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
          <h5 class="card-text">Phone Name: </h5>
          <h5 class="card-text">Brand Name: </h5>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-100">Details</button>
        </div>
      </div>
      `
      showPhones.appendChild(div);
    }
  }
}