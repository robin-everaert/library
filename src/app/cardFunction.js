export const ChangeIconBtnOpenCard = (idC) => {
  let chevron = document.querySelector(`#chevron${idC}`);

  if(chevron.classList.contains('fa-chevron-down')) {
    chevron.classList.remove('fa-chevron-down');
    chevron.classList.add('fa-chevron-up')
  }
  else if(chevron.classList.contains('fa-chevron-up')) {
    chevron.classList.remove('fa-chevron-up');
    chevron.classList.add('fa-chevron-down')
  };
};

  

