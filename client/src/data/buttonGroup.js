class Button {
  constructor(variant, name, type = 'button', value, disabled = false, url = false) {
    this.variant = variant;
    this.name = name;
    this.type = type;
    this.value = value;
    this.disabled = disabled;
    this.url = url;
    this.color = undefined;
  }
}


let buttonGroupCreate = [
  new Button('filledRed', 'cancel', undefined, 'Отменить'),
  new Button('filledGreen', 'save', 'submit', 'Сохранить'),
];

let buttonGroupView = [
  new Button('filledRed', 'delete', undefined, 'Удалить'),
  new Button('filledGreen', 'edit', undefined, 'Редактировать'),
];


const buttonGroup = {
  baseBtnsCreate: [
    ...buttonGroupCreate,
  ],
  baseBtnsView: [
    ...buttonGroupView,
  ],
};

export default buttonGroup;