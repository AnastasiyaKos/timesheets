import {useMemo} from "react";


const useMutateValuesForm = ({ dataForm, dataType, hardData }) => {

  return useMemo(
    () => (values, localText, language) => {
      let result = {...values};

      switch (dataType) {
        // case 'users':
        //   result.roles = result.role_id;
        //   break;
        default:
          break;
      }

      return result;
    },
    [dataType, dataForm]
  );
};

export default useMutateValuesForm;