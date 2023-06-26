import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {handlerData} from "../../services/handlerData.service";
import useGetFormData from "./hooksForm/useGetFormData";
import BaseForm from "./BaseForm";
import useMutateValuesForm from "./hooksForm/useMutateValuesForm";
import useEventsBtnForm from "./hooksForm/useEventsBtnForm";
import useSubmitForm from "./hooksForm/useSubmitForm";


const BaseFormForDataContainer = ({selector = "none", hardData}) => {
  let {
    current: {
      text: hardText,
      dataForm: hardDataForm,
      type: hardDataType,
      id: hardId,
      functions: hardFunctions,
      rest: hardRest,
    },
  } = useRef(hardData || {});
  const {data: dataForm = hardDataForm, dialog: localDialog} = useSelector(
    (state) => hardDataForm ? {} : state.form || {}
  );
  const location = useLocation();
  let dataType = location.pathname.split( '/')[1];
  let {id} = useParams();

  let dataTypeRef = useRef();
  let mutateAction = useRef();
  let formRef = useRef();
  let valuesFormRef = useRef();
  mutateAction.current =
    id === "add" && dataForm.action !== "add" ? "add" : dataForm.action;
console.log(dataForm.action)
  const dispatch = useDispatch();
  const {
    current: {getFormFields, getButtonGroup},
  } = useRef(handlerData());

  const {
    handlerCancel,
    handlerBack,
    handlerEdit,
    handlerDelete
  } = useEventsBtnForm({dataType, id, mutateAction});
  const mutateFormValues = useMutateValuesForm({dataForm, dataType, hardData});
  useGetFormData({id, dataForm, dataType, mutateAction});
  const handlerSubmit = useSubmitForm({dataType, id, mutateAction})
  console.log(dataForm)

  const formOptions = {
    onSubmit: handlerSubmit,
    initValues: mutateAction.current === "add"
      ? dataForm.values
      : mutateFormValues(dataForm.values),
    data: dataForm.lists,
    validate: () => {},
    fields: getFormFields(dataType),
    removeFields: {},
    disabledFields: {},
    disabledAll: mutateAction.current === "view",
  };

  const buttonOptions = {
    buttons: mutateAction.current === "view"
      ? getButtonGroup("baseBtnsView")
      : getButtonGroup("baseBtnsCreate"),
    handlerClick: {
      cancel: handlerCancel,
      backToList: handlerBack,
      edit: handlerEdit,
      delete: handlerDelete,
    },
    removeButtons: {},
  };

  return <BaseForm formOptions={formOptions} dataType={dataType} buttonOptions={buttonOptions} handlerBack={handlerBack}
                   mutateAction={mutateAction}/>
};

export default BaseFormForDataContainer;