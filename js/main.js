//FETCH DATA FROM TECHCHRUNCH

const myUrl = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed"


   fetch(myUrl)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(cards => {      
      console.log(cards)
    displayData(cards)
  })
  .catch((error) => console.error("FETCH ERROR:", error));



  /* var mainContainer = document.querySelector(".cards"); */

function displayData(obj) {
  const section = document.querySelector('section');
  const cards = obj;

  for (const card of cards) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');   
    const img = document.createElement('img'); 
    const myPara2 = document.createElement('div');
    const myPara3 = document.createElement('p');

    

    myH2.textContent = card.title.rendered;    
    myPara2.textContent =  card.excerpt.rendered;
    myPara3.textContent = card.date;
    const src = card.jetpack_featured_media_url;
    img.setAttribute('src', src);

   

    myArticle.appendChild(myH2);
    myArticle.appendChild(img);   
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    
   

    section.appendChild(myArticle);
  }
}
 