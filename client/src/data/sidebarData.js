import {
  usersMenuIcon,
  projectsMenuIcon,
  rolesMenuIcon,
  billablesMenuIcon,
  budgetsMenuIcon,
  skillsMenuIcon,
  salariesMenuIcon,
  statusesMenuIcon,
  timesheetsMenuIcon,
  tasksMenuIcon
} from '../assets/images/svg';

const icons = {
  users: usersMenuIcon,
  projects: projectsMenuIcon,
  roles: rolesMenuIcon,
  billables: billablesMenuIcon,
  budgets: budgetsMenuIcon,
  skills: skillsMenuIcon,
  salaries: salariesMenuIcon,
  statuses: statusesMenuIcon,
  timesheets: timesheetsMenuIcon,
  tasks: tasksMenuIcon
};

export class NavMenuItem {
  constructor(name) {
    this.name = name;
    this.link = name;
    this.icon = icons[name];
  }
}