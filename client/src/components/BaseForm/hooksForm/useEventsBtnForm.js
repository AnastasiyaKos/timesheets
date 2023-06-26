import {setFormAction} from "../../../store/slices/formSlice/formSlice";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";


const useEventsBtnForm = ({
                            dataType,
                            id,
                            hardId,
                            localText,
                            mutateAction,
                            dataForm,
                            hardFunctions,
                            hardRest,
                          }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  let {id: userID} = useParams();

  console.log(dataType);

  const handlerCancel = () => {
    if (mutateAction.current === "add") {
      switch (dataType) {
        default:
          navigate(`../${dataType}`);
          break;
      }
    } else {
      switch (dataType) {
        default:
          dispatch(setFormAction('view'));
          break;
      }
    }
  };

  const handlerBack = () => {
    navigate(`../${dataType}`);
  };

  const handlerEdit = () => {
    dispatch(setFormAction('edit'));
  };

  const handlerDelete = () => {
    switch (dataType) {
      default:
        // await dispatch(
        //   setModal({
        //     text: localText[dataType].modal,
        //     open: true,
        //     submit: async () => {
        //       await dispatch(deleteSettingsDataById({type: dataType, id}));
        //       navigate(`../${dataType}`);
        //     },
        //   })
        // );
        break;
    }
  };

  return {
    handlerCancel,
    handlerBack,
    handlerEdit,
    handlerDelete
  }
};

export default useEventsBtnForm;
