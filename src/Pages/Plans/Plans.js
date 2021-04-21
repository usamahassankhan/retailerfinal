import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import './Plans.css';
import db from "../../Firebase/Firebase";
import {useHistory} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
// function createData(name, calories, fat, carbs, protein ,id,id1,id2,id3,id4) {
//   return { name, calories, fat, carbs, protein,id,id1,id2,id3,id4 };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
// //   createData('Donut', 452, 25.0, 51, 4.9),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// //   createData('Honeycomb', 408, 3.2, 87, 6.5),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
// //   createData('KitKat', 518, 26.0, 65, 7.0),
// //   createData('Lollipop', 392, 0.2, 98, 0.0),
// //   createData('Marshmallow', 318, 0, 81, 2.0),
// //   createData('Nougat', 360, 19.0, 9, 37.0),
// //   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   { id: 'Plan Template Name', numeric: false, disablePadding: true, label: 'Banner' },
//   { id: 'Plan Template Id', numeric: true, disablePadding: false, label: 'Plan Name' },
//   { id: 'Speed Range', numeric: true, disablePadding: false, label: 'Store Number' },
//   { id: 'Cashback Range', numeric: true, disablePadding: false, label: 'Store Address' },
//   { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Plan Start Date' },
//   { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Plan End Date' },
//   { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Speed Range' },
//   { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Cashback Range' },
//   { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Max Customers' },
//   { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Plan Start' },
// ];

// function EnhancedTableHead(props) {
//   const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all desserts' }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'default'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <span className={classes.visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </span>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const useToolbarStyles = makeStyles((theme) => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   title: {
//     flex: '1 1 100%',
//   },
// }));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//         Plans Summary For the Retailer
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
 
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   paper1: {
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
//   table: {
//     minWidth: 750,
//   },
//   visuallyHidden: {
//     border: 0,
//     clip: 'rect(0 0 0 0)',
//     height: 1,
//     margin: -1,
//     overflow: 'hidden',
//     padding: 0,
//     position: 'absolute',
//     top: 20,
//     width: 1,
//   },
// }));

export default function EnhancedTable() {

  const [tabledata, settabledata] = useState([]);
  const getplans=()=>{
    db.collection("planSummary")
    // .orderBy("date")
    // .limit(10)
    .get()
    .then(querySnapshot => {
      const Matches = [];

      querySnapshot.forEach(function (doc) {
        Matches.push({
          team1: doc.data(),
         
        });
      });

      settabledata(Matches);
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  }
  useEffect(() => {
  getplans()
  }
    , [])
console.log(tabledata)
    const deleteplan=()=>{
      // setOpen(true)
      // const newList = tabledata?.team1?.filter((item) => item.plantemplatename !== selected);
      // settabledata(newList)
      // setOpen(false)
      // console.log("new",newList)
    
    
      db.collection("planSummary").doc(selected[0]).delete().then(() => {
        console.log("Document successfully deleted!");
        window.location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
    setOpen(false)

    getplans()
    }


  function createData(id,name, calories, fat, carbs, protein ,ids,id1,id2,id3,id4) {
    return {id, name, calories, fat, carbs, protein,ids,id1,id2,id3,id4 };
  }
  
  const rows = 
  tabledata.map((a)=>(createData(a.team1.id,a.team1.banner, a.team1.plantemplatename, a.team1.storenumber, a.team1.storeaddressline1+a.team1.storeaddressline2, a.team1.planstartdate, a.team1.planenddate,a.team1.spendrange,a.team1.cashbackrange,a.team1.maxcustomer,"approved")),);

    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Cupcake', 305, 3.7, 67, 4.3, 4.3,4.3,4.3,4.3,4.5),
    // createData('Donut', 452, 25.0, 51, 4.9),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
    // createData('Honeycomb', 408, 3.2, 87, 6.5),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Jelly Bean', 375, 0.0, 94, 0.0),
    // createData('KitKat', 518, 26.0, 65, 7.0),
    // createData('Lollipop', 392, 0.2, 98, 0.0),
    // createData('Marshmallow', 318, 0, 81, 2.0),
    // createData('Nougat', 360, 19.0, 9, 37.0),
    // createData('Oreo', 437, 18.0, 63, 4.0),

  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  console.log(tabledata)
  const headCells = [
    { id: 'Plan Template Name', numeric: false, disablePadding: true, label: 'Banner' },
    { id: 'Plan Template Id', numeric: true, disablePadding: false, label: 'Plan Name' },
    { id: 'Speed Range', numeric: true, disablePadding: false, label: 'Store Number' },
    { id: 'Cashback Range', numeric: true, disablePadding: false, label: 'Store Address' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Plan Start Date' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Plan End Date' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Spend Range' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Cashback Range' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Max Customers' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Plan Status' },
  ];
  
  function EnhancedTableHead(props) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            {/* <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            /> */}
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };
  
  const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }));
  
  const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {/* {numSelected}  */}
             selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Plans Summary For the Retailer
          </Typography>
        )}
  
        {/* {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )} */}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
   
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper1: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));





  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };
  console.log("select",selected)
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
const history=useHistory();
const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.root} className="wao">
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">{row.ids}</TableCell>
                      <TableCell align="right">{row.id1}</TableCell>
                      <TableCell align="right">{row.id2}</TableCell>
                      <TableCell align="right">{row.id3}</TableCell>
                      <TableCell align="right">{row.id4}</TableCell>
                      {/* <TableCell align="right">{row.id5}</TableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height:  53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      <div className="templatebtn"> 
        <button onClick={()=>setOpen(true)}>Delete Plans </button>
        <button>Edit Plans </button>

      </div>
      <div className="templatelast"> 
       <p> <strong>Don’t see a template that works for you? Create a new one
          </strong></p>
        <button onClick={()=>history.push("planform")}>Create New Plan </button>

      </div>
      <Modal
       
       className={classes.modal}
       open={open}
       onClose={handleClose}
     
       
     >
      
         <div className={classes.paper1}>
           <h2>Are You sure </h2>
           <p >It will delete Your respective plan</p>
           <div style={{display:"flex",justifyContent:"space-evenly"}}>
               <button className="modalbtn" onClick={deleteplan}>Yes</button>
               <button  className="modalbtn" onClick={()=>setOpen(false)}>No</button>
           </div>
         </div>
       
     </Modal>
    </div>
  );
}
