export function modalError(firebaseError) {
  const containerModal = document.getElementById('container_modal');
  const close = document.getElementById('close');

  if (firebaseError.code === 'auth/email-already-in-use') {
    containerModal.classList.add('show');
  }

  close.addEventListener('click', () => {
    containerModal.classList.remove('show');
  });
}

export function modalErrorLogin(firebaseError) {
  const loginModal = document.getElementById('login_modal');
  const close = document.getElementById('close-login');

  if (firebaseError.code === 'auth/user-not-found' || 'auth/wrong-password') {
    loginModal.classList.add('show');
  }

  close.addEventListener('click', () => {
    loginModal.classList.remove('show');
  });
}
