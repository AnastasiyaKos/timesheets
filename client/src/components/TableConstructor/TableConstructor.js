import React, {Fragment, useState, useMemo, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {visuallyHidden} from "@mui/utils";
import {WrapTable} from "./TableConstructor.style";
import {
  Box,
  Button,
  Paper,
  Table, TableBody,
  TableCell,
  TableContainer,
  TableHead, TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography
} from "@mui/material";
import {localeStringToDate} from "../../utils/helpers";
import {setTable} from "../../store/slices/appSlice/appSlice";


function descendingComparator(a, b, orderBy) {
  let A = a[orderBy];
  let B = b[orderBy];

  switch (orderBy) {
    case "time":
      A = A.props ? A.props?.children[0].props?.children[0] : A;
      B = B.props ? B.props?.children[0].props.children[0] : B;
    case "createTime":
    case "dataCreation":
    case "dateCreated":
    case "timestamp":
    case "from":
    case "to":
      A = +localeStringToDate(A);
      B = +localeStringToDate(B);
      break;

    default:
      break;
  }

  if (B < A) {
    return -1;
  }
  if (B > A) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const EnhancedTableToolbar = (props) => {
  if (!props.title && !props.filter && props.btnHidden)
    return null;

  return (
    <Toolbar
      sx={{
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0!important",
        minHeight: 'auto!important',
      }}
    >
      {(props.title || !props.btnHidden) && (
        <div
          style={{
            width: "100%",
            padding: "11px",
            borderBottom: "1px solid #A1C6B3",
            display: "flex",
            alignItems: "center",
            minHeight: '45px',
          }}
        >
          {props.title && (
            <Typography
              sx={{flex: "1 1 100%", lineHeight: 1, color: "#425C51", fontSize: '15px'}}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              {props.title}
            </Typography>
          )}
          {!props.btnHidden && (
            <Button variant={'filledOrange'} name={"add"}
                    sx={{m: "0", ml: "auto", display: "flex", whiteSpace: 'nowrap'}}
                    onClick={props.handlerAddClick}
            >
              + Добавить
            </Button>
          )}
        </div>
      )}
      {props.filter}
    </Toolbar>
  );
};

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
    headCells,
    removeCell,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow sx={{"& .Mui-active": {color: "#425C51!important"}}}>
        {headCells.map((headCell) =>
          removeCell[headCell.id] ? null : (
            <TableCell
              key={headCell.id}
              id={headCell.id}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{
                color: "#425C51",
                borderBottom: "1px solid #A1C6B3",
                borderRight: "1px solid #A1C6B3",
                padding: '10px',
                background: '#62988120'
            }}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
}

const TableConstructor = ({options, handlerAddClick}) => {
  let {
    appText: {buttons},
    table: {page, selected},
    table
  } = useSelector((state) => state.app);
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState(options?.orderBy);
  const [rowsPerPage, setRowsPerPage] = useState(options.rowsPerPage || 25);
  const dispatch = useDispatch();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createRows = (rows = options.rows, slice = true) => {
    if (slice) {
      return stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      );
    } else {
      return stableSort(rows, getComparator(order, orderBy));
    }
  };

  const handleChangePage = async (event, newPage) => {
    if (!options.page && options.page !== 0) {
      dispatch(setTable({key: "page", value: newPage}));
    } else {
      options.changePage(newPage);
    }

    options.handleChangePagination &&
    (await options.handleChangePagination("page", newPage));
  };

  const handleChangeRowsPerPage = async (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    dispatch(setTable({key: "page", value: 0}));
    options.handleChangePagination &&
    (await options.handleChangePagination("rowsPerPage", event.target.value));
  };

  if (!options) return null;
  let removeCell = options.removeRows;
  if (!removeCell) removeCell = {};

  return (
    <WrapTable>
      <Paper
        sx={{
          width: "100%",
          maxWidth: "100%",
          mb: 2,
          "& .MuiTableCell-paddingCheckbox": {"& svg": {color: "#7A7A95"}},
        }}
      >
        <EnhancedTableToolbar
          title={options.tableTitle}
          filter={options.filter}
          statistics={options.statistics}
          handlerAddClick={handlerAddClick}
          btnHidden={options.mainBtnHidden}
        />
        <TableContainer>
          <Table aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={options.headCells}
              removeCell={removeCell}
            />
            <TableBody>
              {createRows(options.rows, !options?.totalRows).map(
                (row, ind) => {
                  return (
                    <Fragment key={`${row.id || ind}`}>
                      <TableRow hover
                                onClick={() => options.handlerRowClick && options.handlerRowClick(row)}
                                tabIndex={-1}
                                sx={{color: "#425C51"}}
                      >
                        {options.headCells.map(headCell => {
                          return removeCell[headCell.id] ? null : (
                            <TableCell key={`${headCell.id || ind}`}
                                       sx={{color: "#425C51", borderBottom: "1px solid #A1C6B3", borderRight: "1px solid #A1C6B3"}}
                                       onClick={(e) =>
                                         options.handlerRowCellClick &&
                                         options.handlerRowCellClick(e, {id: headCell.id, row})
                                       }
                            >
                              {headCell.labelKey && row[headCell.id]
                                ? row[headCell.id][headCell.labelKey]
                                : row[headCell.id]}
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    </Fragment>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {!options.removePagination && (
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100, 1000]}
            labelRowsPerPage={'Показать'}
            component="div"
            count={options?.totalRows || options.rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{color: "#686887"}}
          />
        )}
      </Paper>
    </WrapTable>
  )
};

export default TableConstructor;