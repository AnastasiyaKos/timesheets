import {NavMenuItem} from '../data/sidebarData';
// import {handlerLocalStorage} from './handlerLocalStorage.service';
// import formFields from './../data/formFields';
// import buttonGroup from './../data/buttonGroup';
// import { appIcons } from '../data/appIcons';
// import { objStatusesStyle } from "../data/statusStyle";
// import appTabs from "../data/appTabs";
import {findOjectInArray} from "../utils/helpers";
import {text_ru} from "../text/text_ru";
import tableCells from "../data/tableCells";
import formFields from "../data/formFields";
import buttonGroup from "../data/buttonGroup";

export const handlerData = () => {
  const getNavListData = (type = '') => {
    let navItemNames = ['users', 'timesheets', 'projects', 'tasks', 'skills', 'budgets', 'salaries',
      'billables', 'roles', 'statuses'];

    return navItemNames.map(name => (new NavMenuItem(name)));
  };

  const getAppText = () => text_ru;

  const getFormFields = (formName, text = {}) =>  formFields[formName]?.map((field) => {
    // console.log(field.props)
    return {
      ...field,
      props: {
        ...field.props,
        label: (text.label && text.label[field.props.name]) || text[field.props.name] || field.props.label,
        placeholder: (text.placeholder && text.placeholder[field.props.name]) || text[field.props.name] || field.props.placeholder,
      }
    }
  });

  // const getButton = (bittonName, text) => text
  //   ? buttonGroup[bittonName]?.map(elem => ({...elem, value: text[elem.name] || elem.value}))
  //   : buttonGroup[bittonName];

  const getButtonGroup = (groupName, text) => text
    ? buttonGroup[groupName]?.map(elem => ({...elem, value: text[elem.name] || elem.value}))
    : buttonGroup[groupName];

  const getTableHeadCells = (tableName) => tableCells[tableName];

  // const getIcon = (iconName, props) => {
  //   let Icon = appIcons[iconName];
  //   return <Icon {...props}/>;
  // };

  // const getStatusesStyle = (status) => {
  //   return status ? objStatusesStyle[status] : objStatusesStyle;
  // };

  // const getAppTabs = (type, text) => {
  //   return text ? appTabs[type]?.map(tab => ({...tab, label: text[tab.value]})) : appTabs[type];
  // };

  // const tabCheck = (type, path) => {
  //   let result = 0;
  //   getAppTabs(type).map(item => {
  //     if (path === item.value) result++;
  //   });
  //   return result;
  // };

  const getToast = (key, type) => {
    switch (key) {
      case "users":
        return type ==="add" ? "userAdd": type === "edit" ? "userEdit" : "userRemove" ;
      case "privacy-management":
        return type ==="add" ? "agreementAdd": type === "edit" ? "agreementEdit" : "agreementRemove" ;
      case "templates/reports/main-dashboard":
        return type ==="add" ? "reportTemplateCreate": type === "edit" ? "reportTemplateEdit" : "reportTemplateRemove" ;
      case "templates/reports/cheque":
        return "receiptTemplateEdit";
      default:
        return type ==="add" ? "successAdd": type === "edit" ? "successEdit" : "successRemove" ;
    }
  };


  return {
    getNavListData,
    getAppText,
    getButtonGroup,
    getTableHeadCells,
    // getIcon,
    // getStatusesStyle,
    getFormFields,
    // getAppTabs,
    getToast,
    // tabCheck,
  }
}