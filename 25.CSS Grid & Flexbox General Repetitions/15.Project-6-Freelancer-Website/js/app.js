document.addEventListener('DOMContentLoaded', function () {
  loadPortfolio();
})

function loadPortfolio() {
  const url = "data.json";
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let html = '';

      data.portfolio.forEach(item => {
        html +=
          `
            <div class="item">
              <img src="img/${item.id}.jpg">
              <div class="content">
                <h3>${item.projectname}</h3>
                <p>${item.desc}</p>
              </div>
            </div>
          `;
      });
      document.querySelector('#portfolio').innerHTML = html;
    })
}