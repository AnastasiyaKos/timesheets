class HeadCell {
  constructor(id, label, labelKey = null, sx = {}) {
    this.id = id;
    this.label = label;
    this.labelKey = labelKey;
    this.sx = sx;
  }
}


const tableCells = {
  users: [
    new HeadCell('tab_id', 'Табельный №'),
    new HeadCell('full_name', 'ФИО'),
    new HeadCell('phone', 'Телефон'),
  ],
  projects: [
    new HeadCell('name', 'Название'),
    new HeadCell('deadline', 'Крайний срок'),
  ],
  tasks: [
    new HeadCell('project', 'Название'),
    new HeadCell('name', 'Название'),
    new HeadCell('status', 'Статус'),
    new HeadCell('deadline', 'Крайний срок'),
    new HeadCell('user', 'Ответственный'),
  ],
  skills: [
    new HeadCell('name', 'Название'),
    new HeadCell('parent', 'Раздел'),
  ],
  statuses: [
    new HeadCell('id', 'ID'),
    new HeadCell('name', 'Название'),
  ],
  roles: [
    new HeadCell('id', 'ID'),
    new HeadCell('name', 'Название'),
  ],
  budgets: [
    new HeadCell('project', 'Проект'),
    new HeadCell('status', 'Статус'),
    new HeadCell('value', 'Значение'),
  ],
  salaries: [
    new HeadCell('date_from', 'С'),
    new HeadCell('date_to', 'По'),
    new HeadCell('value', 'Значение'),
  ],
  billables: [
    new HeadCell('inner', 'inner'),
    new HeadCell('month', 'Месяц'),
    new HeadCell('year', 'Год'),
    new HeadCell('value', 'Значение'),
    new HeadCell('user', 'Сотрудник'),
  ],
  timesheets: [
    new HeadCell('user', 'Сотрудник'),
    new HeadCell('date', 'Дата'),
    new HeadCell('hours', 'Часы'),
    new HeadCell('task', 'Задачи'),
  ],
};

export default tableCells;