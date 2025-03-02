import axios from 'axios'

const Card = (article) => {

  const cardWrapper = document.createElement('div')
  const headliner = document.createElement('div')
  const authorWrapper = document.createElement('div')
  const imgWrapper = document.createElement('div')
  const authorImg = document.createElement('img')
  const authName = document.createElement('span')

  cardWrapper.classList.add('card')
  headliner.classList.add('headline')
  authorWrapper.classList.add('author')
  imgWrapper.classList.add('img-container')

  headliner.textContent = article.headline
  authorImg.src = article.authorPhoto
  authName.textContent = `By ${article.authorName}`

  cardWrapper.appendChild(headliner)
  cardWrapper.appendChild(authorWrapper)
  authorWrapper.appendChild(imgWrapper)
  imgWrapper.appendChild(authorImg)
  authorWrapper.appendChild(authName)

  cardWrapper.addEventListener('click', e => {
    console.log(e.target.headline)
  })

  return cardWrapper



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
const array = []
axios.get('http://localhost:5001/api/articles')
.then(res => {
  console.log(res)
    res.data.articles.bootstrap.forEach(article => document.querySelector(selector).appendChild(Card(article)))
    res.data.articles.javascript.forEach(article => document.querySelector(selector).appendChild(Card(article)))
    res.data.articles.jquery.forEach(article => document.querySelector(selector).appendChild(Card(article)))
    res.data.articles.node.forEach(article => document.querySelector(selector).appendChild(Card(article)))
    res.data.articles.technology.forEach(article => document.querySelector(selector).appendChild(Card(article)))
}
)
.catch(bad => console.error(bad))

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.

  
}

export { Card, cardAppender }

