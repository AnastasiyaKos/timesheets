import { useDispatch, useSelector } from "react-redux";
import {updateFormData} from "../../../store/slices/formSlice/formExtraReducers";


const useSubmitForm = ({
                         dataType,
                         selector,
                         dataForm,
                         id,
                         localText,
                         hardId,
                         mutateAction,
                         localDialog,
                         hardRest,
                       }) => {
  const dispatch = useDispatch();

  return async (formData, event) => {

    let form_data = { ...formData };

    if (mutateAction.current === "add") {
      switch (dataType) {

        default:
          break;
      }
    } else {
      switch (dataType) {
        case 'users':
          form_data.role_id = form_data.roles.id;
          form_data.tab_id = +form_data.tab_id;
          form_data.department = +form_data.department;
          console.log(form_data)
          dispatch(updateFormData({type: dataType, id, body: form_data}));
          break;
        default:
          break;
      }
    }
  }
};

export default useSubmitForm;