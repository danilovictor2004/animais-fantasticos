export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    this.tabContent = document.querySelectorAll('[data-tab="content"] section');
    this.activeTab = 'ativo';
  }
  
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('ativo', direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index))
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length){
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}




