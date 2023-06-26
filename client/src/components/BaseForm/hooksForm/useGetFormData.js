import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFormData, getFormLists} from "../../../store/slices/formSlice/formExtraReducers";
import {resetForm} from "../../../store/slices/formSlice/formSlice";


const useGetFormData = ({id,  dataForm, dataType, mutateAction}) => {
  const dispatch = useDispatch();

  console.log('useGetFormData ', dataType)

  useEffect(() => {
    async function fetchValuesFrom(){
      switch (dataType) {
        default:
          dispatch(getFormData({type: dataType, id}));
          break;
      }
    }

    if (!dataForm.values?.id && mutateAction.current === "view") fetchValuesFrom();
  }, [dispatch, dataType, id, dataForm.values?.id, mutateAction]);

  useEffect(() => {
    async function fetchListsData() {
      switch (dataType) {
        case 'users':
          dispatch(getFormLists({type: 'users'}));
          break;
        default:
          break;
      }
    }

    fetchListsData();

    return () => {
      switch (dataType) {
        default:
          dispatch(resetForm('formData'))
      }
    }
  }, [dispatch, dataType])
};

export default useGetFormData;