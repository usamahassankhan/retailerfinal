import React, { useEffect, useState } from 'react';
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
import LinearProgress from '@material-ui/core/LinearProgress';
import db from "../../Firebase/Firebase";
import './index.css';
import { matchPath, useHistory } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';



export default function EnhancedTable() {

  const [tabledata, settabledata] = useState([]);
  const [selectedrow, setSelectedrow] = useState([]);
  const [storedata,setstoredata]=useState([]);
  function createData(id,PlanTemplateName, PlanTemplateid, Spendrange, cashbackrange, maxcustomer) {
    return {id, PlanTemplateName, PlanTemplateid, Spendrange, cashbackrange, maxcustomer };
  }
console.log("row",selectedrow)
  console.log("sdas", tabledata?.map((a) => a.team1.plantemplateid))
console.log("storedata",storedata)

  const renderRows = () => {

    let arr = []

    if (Boolean(tabledata?.length)) {
      for (let i in tabledata) {

        arr.push(createData(tabledata[i]?.team1.id,tabledata[i]?.team1.plantemplatename, tabledata[i]?.team1.plantemplateid, tabledata[i]?.team1.targetSpend, tabledata[i]?.team1.cashbackoffer, tabledata[i]?.team1.cashbackoffer, tabledata[i]?.team1.maxshoppers));
      }

      return arr
    }

    return []



  }


  // const rows = tabledata.map((item) => {

  //   return createData(item?.team1.plantemplatename, item?.team1.plantemplateid, item?.team1.targetSpend, item?.team1.cashbackoffer, item?.team1.cashbackoffer, item?.team1.maxshoppers)


  // })

  // console.log(rows)


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

  const headCells = [
    // { id: 'Plan Template Name', numeric: false, disablePadding: true, label: 'Id' },
    { id: 'Plan Template Name', numeric: false, disablePadding: true, label: 'Plan Template Name' },
    { id: 'Plan Template Id', numeric: true, disablePadding: false, label: 'Plan Template Id' },
    { id: 'Speed Range', numeric: true, disablePadding: false, label: 'Spend Range' },
    { id: 'Cashback Range', numeric: true, disablePadding: false, label: 'Cashback Range' },
    { id: 'Max Customers', numeric: true, disablePadding: false, label: 'Max Customers' },
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
            {/* {numSelected} */}
             selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            Select From Existing Templates
          </Typography>
        )}

        {/* {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon onC />
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
   
      root1: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
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

  const gettemplatedata=()=>{
    db.collection("template")
      // .orderBy("date")
      // .limit(10)
      .get()
      .then(querySnapshot => {
        const Matches = [];

        querySnapshot.forEach(function (doc) {
          Matches.push({
            team1: doc.data(),
            // team2: doc.data(),
            // winner: doc.data().winner,
            // date: doc.data().date
          });
        });

        settabledata(Matches);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }
  
  useEffect(()=>{
    gettemplatedata()
  },[])

  // useEffect(() => {
  //   db.collection("template")
  //     // .orderBy("date")
  //     // .limit(10)
  //     .get()
  //     .then(querySnapshot => {
  //       const Matches = [];

  //       querySnapshot.forEach(function (doc) {
  //         Matches.push({
  //           team1: doc.data(),
  //           // team2: doc.data(),
  //           // winner: doc.data().winner,
  //           // date: doc.data().date
  //         });
  //       });

  //       settabledata(Matches);
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting documents: ", error);
  //     });
  // }
  //   , [])

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  //   const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
console.log("seleced",selected)
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  console.log("tab", tabledata)
  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = renderRows().map((n) => n.id);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };



useEffect(() => {

if(localStorage.getItem("myid")){
 db.collection('store').doc(localStorage.getItem("myid")).get()
   .then((docSnapshot) => {
    if (docSnapshot.exists) {
      db.collection('store').doc(localStorage.getItem("myid"))
        .onSnapshot((doc) => {
          setstoredata(doc.data());
        });
    }  });

}
// else{
//   alert("no store")
// }


}, [])


console.log("storedata",storedata)
  const useTemplate=async ()=>{

    // await db.collection("planSummary").doc(localStorage.getItem("myid")).set({
      await db.collection("planSummary").doc(selectedrow.PlanTemplateid).set({
     id:selectedrow.id,
plantemplatename:selectedrow.PlanTemplateName,
plantemplateid:selectedrow.PlanTemplateid,
spendrange:selectedrow.Spendrange,
cashbackrange:selectedrow.cashbackrange,
maxcustomer:selectedrow.maxcustomer,

//  retailerpartnername:storedata.name,
//  address:storedata.address,
//  planstartdate:storedata.planstartdate,
//  planenddate:storedata.endplandate,
//  planid:storedata.planId,
//  storenumber:storedata.storenumber,
//  banner:storedata.banner,
//  mainid:localStorage.getItem("myid")

    
  })
  .then(() => {
      console.log("Document successfully written!");
      localStorage.setItem("plantemplateid",selectedrow.PlanTemplateid)
      history.push("/planform")
     
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
  }
  // console.log("aaja",selectedrow.id);
  // console.log("aaja",selectedrow.PlanTemplateName);
  console.log("aajaaaaa",selectedrow.PlanTemplateid)
  // console.log("aaja",selectedrow.Spendrange)
  // console.log("aaja",selectedrow.cashbackrange)
  // console.log("aaja",selectedrow.maxcustomer)
const deletetemplate=()=>{
  // setOpen(true)
  // const newList = tabledata?.team1?.filter((item) => item.plantemplatename !== selected);
  // settabledata(newList)
  // setOpen(false)
  // console.log("new",newList)


  db.collection("template").doc(selected).delete().then(() => {
    console.log("Document successfully deleted!");
    window.location.reload();
    // gettemplatedata()
}).catch((error) => {
    console.error("Error removing document: ", error);
});
setOpen(false)
gettemplatedata()
// window.location.reload();
}
  const handleClick = (event, name,row) => {
    // const selectedIndex = selected.indexOf(name);
    // let newSelected = [];

    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, name);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }
setSelectedrow(row);
setSelected(name)
    // setSelected(newSelected);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // var docRef = db.collection("store").doc(localStorage.getItem("myid"));
  // console.log('adasd',docRef)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, renderRows().length - page * rowsPerPage);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
console.log("rows",renderRows().length)
  return (
    <div className={classes.root} className="wao">
    {renderRows().length >0 ? ( <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
        {renderRows().length >0 ?        
      ( 
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
           
            size={'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={renderRows().length}
            />
        <TableBody>
              {stableSort(renderRows(), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.PlanTemplateid);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event,row.PlanTemplateid,row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.PlanTemplateid}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.PlanTemplateName}
                      </TableCell>
                      <TableCell align="right">{row.PlanTemplateid}</TableCell>
                      <TableCell align="right">{row.Spendrange}</TableCell>
                      <TableCell align="right">{row.cashbackrange}</TableCell>
                      <TableCell align="right">{row.maxcustomer}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>):(<div style={{textAlign:"center"}}><h1>there is no template please create a new one</h1></div>)}
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={renderRows().length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>):( <div className={classes.root}>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </div>)}

      <div className="templatebtn">
      
        <button  disabled={selected.length>0? false:true} onClick={() => setOpen(true)}>Delete Template </button>
       {selected.length>0 ? <button   onClick={useTemplate}>Use Template </button>: <button  disabled  onClick={useTemplate}>Use Template </button>}

      </div>
      <div className="templatelast">
        <p> <strong>Don’t see a template that works for you? Create a new one
          </strong></p>
        <button onClick={() => history.push("templateform")}>Create New Template </button>

      </div>
      <Modal

        className={classes.modal}
        open={open}
        onClose={handleClose}


      >

        <div className={classes.paper1}>
          <h2>Are You sure </h2>
          <p >It will delete Your respective plan</p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button className="modalbtn" onClick={deletetemplate}>Yes</button>
            <button className="modalbtn" onClick={() => setOpen(false)}>No</button>
          </div>
        </div>

      </Modal>
    </div>
  );
}
