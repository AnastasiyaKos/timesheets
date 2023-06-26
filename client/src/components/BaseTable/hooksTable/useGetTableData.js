import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getTableData} from "../../../store/slices/tableSlice/tableExtraReducers";
import {resetTable} from "../../../store/slices/tableSlice/tableSlice";


const useGetTableData = ({dataType}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    switch (dataType) {
      default:
        dispatch(getTableData({type: dataType}));
    }

    return () => {
      dispatch(resetTable('dataTable'));
    }
  }, [dataType, dispatch]);
};

export default useGetTableData;