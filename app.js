document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  let count = 0;
  if (typeof(Storage) === "undefined") {
    header.innerHTML = 'sorry no local storage. try again in a different browser';
  } else {
    header.innerHTML = 'Choose an image for your moment to Own Your Spot!';
    document.querySelector('#submit-btn').addEventListener('click', () => {
      event.preventDefault();
      const img = document.querySelector('#img-submit').files[0];
      const name = document.querySelector('#moment-name').value;
      const description = document.querySelector('#moment-description').value;
      const h5 = document.querySelector('h5');
      if (img && name && description) {
        count++;
        const imgURL = window.URL.createObjectURL(img);
        localStorage.setItem(`${count}-moment-image`, imgURL);
        localStorage.setItem(`Name: ${count}-moment-name`, name);
        localStorage.setItem(`Description: ${count}-moment-description`, description);
        document.querySelectorAll('input').forEach(el => {
          el.value = '';
          el.files = null;
        });
        document.querySelector('label').innerHTML = 'Store another moment!'
        document.querySelector('#review').addEventListener('click', () => {
          event.preventDefault();
          const imgDisp = document.querySelector('img');
          imgDisp.src = localStorage.getItem(`${count}-moment-image`);
          document.querySelector('h3').innerHTML = localStorage.getItem(`${count}-moment-name`);
          document.querySelector('p').innerHTML = localStorage.getItem(`${count}-moment-description`);
          document.querySelector('#review-div').style.display = 'block';
        });
      } else {
        h5.innerHTML = 'please enter a name, description, and select an image to upload';
      }
    });
  }
});
