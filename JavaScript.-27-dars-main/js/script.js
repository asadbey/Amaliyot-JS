/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

document.addEventListener('DOMContentLoaded',()=>{
  const newsGenre = document.querySelector(".promo__genre")
// newsGenre.innerHTML = ("<p>UzNews<p>")
// newsGenre.insertAdjacentElement("afterbegin","<p>Hello World</p>");
  const buttonNews = document.querySelector("button"),
      updateImg = document.querySelector(".promo__bg"),
      listNews = document.querySelector(".promo__interactive-list"),
      addForm = document.querySelector(".add"),
      addInput = document.querySelector(".adding__input"),
      checkbox = addForm.querySelector("[type='checkbox']");

  const news = [
    "FOOTBALL",
    "BASKETBALL",
    "UFC",
    "BOX",
    "AMERICAN FOOTBAL IN EU...",
  ];

  const sortArray = arr =>{
    arr.sort()
  }

  addForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    let newFilm = addInput.value;
    const favourite = checkbox.checked;
    console.log(favourite)
    if(newFilm){
      if(newFilm.length >21){
        newFilm = `${newFilm.substring(0,21)}...`
      }
      if (favourite){
        console.log("Sevimli yangiligiz qo\'shilmoqda")
      }
      news.push(newFilm)
      sortArray(news)
      createNewsList(news,listNews)
    }
    event.target.reset()
  })

  newsGenre.textContent = ("UzNews")
  buttonNews.remove()
  updateImg.style.backgroundImage = "url(img/2.jpg)"

  function createNewsList(newsList,parent){
    parent.innerHTML = "";
    sortArray(news);
    newsList.forEach((itemNews, index) =>{
      console.log(itemNews)
      parent.innerHTML += `<li class="promo__interactive-item">${index+1} ${itemNews}
                        <div class="delete"></div>
                        </li>`
    })
    document.querySelectorAll(".delete").forEach((btn,i) =>{
      btn.addEventListener('click',()=>{
        btn.parentElement.remove();
        news.splice(i,1)
        createNewsList(newsList,parent);
      })
    })
  }

  createNewsList(news,listNews);

  })

// btnRadius.style.borderRadius ="50px"







