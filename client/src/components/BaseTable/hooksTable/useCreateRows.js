import React, {useMemo} from "react";
import {dateToLocaleString} from "../../../utils/helpers";

const useCreateRows = ({dataType}) => {

  return useMemo(() => data => {
      let result;

      switch (dataType) {
        case 'users':
          result = data.map(item => ({
            ...item,
            full_name: `${item.first_name} ${item.last_name}`,
          }))
          break;
        case 'tasks':
          result = data.map(item => ({
            ...item,
            deadline: dateToLocaleString(item.deadline)
          }))
          break;
        default:
          result = data;
          break;
      }

      return result;
    }, [dataType]
  )
};

export default useCreateRows;