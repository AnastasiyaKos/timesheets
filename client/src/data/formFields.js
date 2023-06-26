class Field {
  constructor(component, props, listLabel = "label", size = 12) {
    this.component = component;
    this.props = props;
    this.listLabel = listLabel;
    this.size = size;
  }
}

class FieldProps {
  constructor(
    label,
    name,
    required = true,
    disabled = false,
    second_label = null
  ) {
    this.label = label;
    this.name = name;
    this.required = required;
    this.disabled = disabled;
    this.second_label = second_label;
  }
}

const formFields = {
  users: [
    new Field("TextField", new FieldProps("Имя", "first_name"), undefined, 6),
    new Field("TextField", new FieldProps("Фамилия", "last_name"), undefined, 6),
    new Field("TextField", new FieldProps("Отдел", "department"), undefined, 6),
    new Field("TextField", new FieldProps("Табельный номер", "tab_id"), undefined, 6),
    new Field("TextField", new FieldProps("Эл. почта", "email"), undefined, 6),
    new Field("TextField", new FieldProps("Телефон", "phone"), undefined, 6),
    new Field("TextField", new FieldProps("Логин", "login"), undefined, 6),
    new Field("TextField", {
      ...new FieldProps("Пароль", "password"),
      type: "password",
    }, undefined, 6),
    new Field("Autocomplete", new FieldProps("Роль", "roles"), "name", 6),
    new Field("TextField", new FieldProps("Зарплата", "salary", false), undefined, 6),
  ]
};

export default formFields;

