const toggleBtn = document.getElementById('toggleBtn');
const body = document.getElementById('body');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('bg-white');
  body.classList.toggle('text-black');
  body.classList.toggle('bg-black');
  body.classList.toggle('text-white');
});
