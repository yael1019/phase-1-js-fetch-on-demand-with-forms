const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event.target.children[1].value); This was one way to access the value of the input
    // Another way is to access the input directly then use .value on that
    const input = document.querySelector('input#searchByID');
    // console.log(input.value);
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(resp => resp.json())
        .then(data => {
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
  })
}

document.addEventListener('DOMContentLoaded', init);