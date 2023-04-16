const openModal = (btn, content) => {
  btn.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('active');
    content.classList.add('hidden');
  })
}

const closeModal = (content) => {
  const modal = document.querySelector('.modal');
  modal.addEventListener('click', (e) => {
    if(e.target === modal) {
      modal.classList.remove('active');
      content.classList.remove('hidden');
    } else return;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const capsuleBtnA = document.querySelector('.js-btn-a');
  const capsuleBtnB = document.querySelector('.js-btn-b');
  const contentA = document.querySelector('.capsule-a');
  const contentB = document.querySelector('.capsule-b');

  openModal(capsuleBtnA, contentA);
  openModal(capsuleBtnB, contentB);
  closeModal(contentA);
  closeModal(contentB);
})

