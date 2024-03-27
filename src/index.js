
function searchCity(city){
    let apiKey = 'o78b4041ct8e052b8e0418f8ffea31bf';
    let apiUrl =
      'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
      console.log(apiUrl);
}
function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML=searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement =document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);