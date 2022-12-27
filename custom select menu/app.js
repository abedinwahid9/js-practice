const wrapper = document.querySelector(".wrapper");
const selectBtn = document.querySelector(".select-btn");
const input = document.querySelector("input");
const option = document.querySelector(".options");


let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];




function countrie(selectCountry){
    option.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        option.insertAdjacentHTML("beforeend",li);
    });
};

countrie()



function updateName(selectli){
    input.value = "";
    countrie(selectli.innerText);
    wrapper.classList.remove("active")
    selectBtn.firstElementChild.innerText = selectli.innerText;
}

selectBtn.addEventListener("click",function(){
    wrapper.classList.toggle("active")
});

input.addEventListener("keyup",()=>{
   let arr = [];
   const searchedVl = input.value.toUpperCase();

   arr = countries.filter(data=>{
        return data.toUpperCase().startsWith(searchedVl);
    }).map(data=> `<li onclick="updateName(this)">${data}</li>`).join("");

    option.innerHTML = arr ? arr : `<li>Opps! Not found</li>`;
})