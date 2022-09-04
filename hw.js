const input = document.getElementById('name');
const button = document.getElementById('search-button');
const countryList = document.getElementById('c');


button.addEventListener('click', async () => {
    const value = input.value;
    try {
      const request = await fetch(
        `https://api.nationalize.io/?name=${value}`
      );
      if (request.status != 200) {
        return;
      }
      const data = await request.json();
  
      if (data.Response === 'False') {
        alert(data.Error);
        return;
      }
    
  
      const dataMap = data.country.map((countrys) => {
      return `
        <div class="col mt-3">
                  <div id="${countrys.country_id}" class="card text-center" >
                  <h5 class="card-title">${countrys.country_id}</h5>
                  <h5 class="card-title">${countrys.probability}</h5>
                  </div>         
        </div>
        `;
      });
  
      countryList.innerHTML = dataMap.join('');
      console.log(data.country);

    } catch (error) {
      console.log(error);
    }

  });