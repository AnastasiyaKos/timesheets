import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {handlerData} from "../../services/handlerData.service";
import useHandlerRowClick from "./hooksTable/useHandlerRowClick";
import useHandlerAddClick from "./hooksTable/useHandlerAddClick";
import useCreateRows from "./hooksTable/useCreateRows";
import useGetTableData from "./hooksTable/useGetTableData";
import BaseTable from "./BaseTable";


const BaseTableContainer = ({selector}) => {
  let {
    data: dataTable,
    dialog,
    paramsTable = {},
  } = useSelector((state) => state.table);
  const tableTitles = useSelector(state => state.app.appText.tableTitles);
  const {current: {getTableHeadCells}} = useRef(handlerData());
  const dispatch = useDispatch();
  const location = useLocation();

  let dataType = location.pathname.substring(1, location.pathname.length);

  const [searchParams] = useSearchParams();

  // const [localState, setLocalState] = useState({});
  let rowsData = dataTable;
  let dataTypeRef = useRef();
  let paramsTableRef = useRef({pageNumber: 0, pageSize: 100});

  const handlerRowClick = useHandlerRowClick({dataType});
  const handlerAddClick = useHandlerAddClick({dataType});
  const createRows = useCreateRows({dataType});
  useGetTableData({dataType});

  if (dataTypeRef.current !== dataType) {
    dataTypeRef.current = dataType;
    return null;
  }

  const tableOptions = {
    mainBtnHidden: dataType === 'roles' || dataType === 'statuses',
    tableTitle: tableTitles[dataType],
    rowsPerPage: paramsTableRef.current.pageSize,
    totalRows: paramsTable.totalElements,
    headCells: getTableHeadCells(dataType) || [],
    rows: createRows(rowsData),
    handlerRowClick: handlerRowClick,
    removePagination: false,
    orderBy: null,
  };

  return <BaseTable tableOptions={tableOptions} handlerAddClick={handlerAddClick}/>
};

export default BaseTableContainer;