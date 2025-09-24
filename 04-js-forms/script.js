const form = document.querySelector('#movie-form');
const errorDiv = document.querySelector('#error');
const movieList = document.querySelector('#movie-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();          
  errorDiv.textContent = '';    

  const title = document.querySelector('#title').value.trim();
  const year  = document.querySelector('#year').value;
  const watched = document.querySelector('#watched').checked;

  const currentYear = 2025;


  if (!title || !year) {
    errorDiv.textContent = 'Please fill in both fields.';
    return;
  }
  if (year > currentYear) {
    errorDiv.textContent = `How can we watch a movie from the future?`;
    return;
  }
    if (year < 1880) {
    errorDiv.textContent = `The first offical movie was not made until 1888!`;
    return;
  }


  const li = document.createElement('li');
  li.textContent = `${title} (${year})${watched ? ' ✅ Watched' : ''}`;
  movieList.appendChild(li);


  form.reset();
});
