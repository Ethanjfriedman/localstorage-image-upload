document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('header');
  const moments = [];
  if (typeof(Storage) === "undefined") {
    header.innerHTML = 'sorry no local storage. try again in a different browser';
  } else {
    header.innerHTML = 'Choose an image for your moment to Own Your Spot!';
    const fileUpload = document.querySelector('#img-submit');
    fileUpload.addEventListener('change', () => {
      const file = fileUpload.files[0];
      const imgURL = window.URL.createObjectURL(file);
      const img = document.querySelector('img');
      img.src = imgURL;
      img.setAttribute('display', 'block');
      const h5 = document.querySelector('h5');
      h5.innerHTML = 'Your moment:';
      const moment = {
      }
      moments.push(moment);
      localStorage.setItem('moments', moments);
      console.log(localStorage.getItem('moments'));
    });
  }
});
