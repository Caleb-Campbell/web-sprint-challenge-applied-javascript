const Header = (title, date, temp) => {

  const headWrap = document.createElement('div')
  headWrap.classList.add('header')
  
  const headTitle = document.createElement('h1')
  headTitle.textContent = title

  const headDate = document.createElement('span')
  headDate.classList.add('date')
  headDate.textContent = date

  const headTemp = document.createElement('span')
  headTemp.classList.add('temp')
  headTemp.textContent = temp

  headWrap.appendChild(headDate)
  headWrap.appendChild(headTitle)
  headWrap.appendChild(headTemp)

  return headWrap


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

// console.log(Header('big boy', 'sept', 'real hot'))

const headerAppender = (selector) => {

  document.querySelector(`${selector}`).appendChild(Header('Justin Turner does it again', 'September', '80 degrees')
  )




  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
