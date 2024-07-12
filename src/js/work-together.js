import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function manageModal() {
  const workTogetherForm = document.querySelector('.work-together-form');
  const workTogetherModal = document.querySelector('.work-together-backdrop');
  const workTogetherModalButton = document.querySelector(
    '.work-together-modal-btn-closing'
  );
  const workTogetherInputEmail = document.querySelector(
    '.work-together-input-email'
  );
  const workTogetherErrorMessage = document.querySelector(
    '.work-together-error-message'
  );
  const workTogetherEmailCheckIcon = document.querySelector(
    '.work-together-address-icon-form'
  );
  const workTogetherInputMessage = document.querySelector(
    '.work-together-input-message'
  );

  const postToAdd = {};
  workTogetherForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = workTogetherInputEmail.value.trim();
    const messageValue = workTogetherInputMessage.value.trim();

    if (emailValue === '' || emailValue === ' ') {
      workTogetherErrorMessage.innerHTML = 'Email cannot be blank';
      workTogetherErrorMessage.classList.add('active');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      workTogetherErrorMessage.innerHTML = 'Please input correct Email address';
      workTogetherInputEmail.style.color = 'red';
      workTogetherErrorMessage.classList.add('active');
      return;
    } else if (messageValue === '') {
      iziToast.error({
        title: 'Error',
        message: 'Message cannot be empty',
        position: 'topRight',
      });
      return;
    }

    workTogetherErrorMessage.classList.remove('active');
    workTogetherEmailCheckIcon.classList.remove('hidden');
    workTogetherInputEmail.style.color = 'black';

    postToAdd.email = emailValue;
    postToAdd.comment = messageValue;

    const options = {
      method: 'POST',
      body: JSON.stringify(postToAdd),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    fetch('https://portfolio-js.b.goit.study/api/requests', options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(post => {
        console.log(post);
        workTogetherModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        workTogetherEmailCheckIcon.classList.remove('hidden');
      })
      .catch(error => {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, something went wrong, please check your request once more.',
          position: 'topRight',
        });
        console.log(error);
      });
  });

  workTogetherModalButton.addEventListener('click', () => {
    workTogetherModal.classList.remove('active');
    document.body.style.overflow = '';
    workTogetherInputEmail.value = '';
    workTogetherEmailCheckIcon.classList.add('hidden');
    workTogetherInputMessage.value = '';
  });

  workTogetherModal.addEventListener('click', event => {
    if (
      event.target.classList.value !== 'work-together-modal-btn-closing' &&
      event.target.classList.value !== 'work-together-modal'
    ) {
      workTogetherModal.classList.remove('active');
      document.body.style.overflow = '';
      workTogetherInputEmail.value = '';
      workTogetherEmailCheckIcon.classList.add('hidden');
      workTogetherInputMessage.value = '';
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      workTogetherModal.classList.remove('active');
      document.body.style.overflow = '';
      workTogetherInputEmail.value = '';
      workTogetherEmailCheckIcon.classList.add('hidden');
      workTogetherInputMessage.value = '';
    }
  });
}
