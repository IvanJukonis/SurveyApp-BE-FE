import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import filterFactory,  {textFilter} from "react-bootstrap-table2-filter"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


function GestionarSiniestros() {
  const [Data, setData] = useState([]);

  const columns = [
    {dataField:"numPoliza", text : "Poliza", sort: true, filter: textFilter()},
    {dataField:"numSiniestro", text : "Siniestro", sort: true, filter: textFilter()},
    {dataField:"tipoRelevamiento", text : "Informe", sort: true, filter: textFilter()},
    {dataField:"tipoInforme", text : "Informe", sort: true, filter: textFilter()},
    {dataField:"estadoSiniestro", text : "Estado", sort: true, filter: textFilter()},
    {dataField:"fechaSiniestro", text : "Ocurrencia", sort: true, filter: textFilter()},
    {dataField:"fechaVencimiento", text : "Vencimiento", sort: true, filter: textFilter()},
    {dataField:"fechaDenuncia", text : "Denuncia", sort: true, filter: textFilter()},
    {dataField:"provinciaSiniestro", text : "Provincia", sort: true, filter: textFilter()},
    {dataField:"ciudadSiniestro", text : "Ciudad", sort: true, filter: textFilter()},
  ]

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText:"<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns:true,
    onPageChange: function (page, sizePerPage){
      console.log("page", page)
      console.log ("sizePerPage", sizePerPage)
    }
  }) 
    
  useEffect(() => {
    peticionGet();
  }, []);

  const peticionGet = async () => {
    await axios
      .get("http://localhost:5000/api/admin/getSiniestros")
      .then((response) => {
        setData(response.data.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  };


    return (
      
           <BootstrapTable 
           bootstrap4 
           keyField="_id" 
           columns= {columns} 
           data={Data} 
           pagination={pagination} 
           filter ={filterFactory()}>
           </BootstrapTable>
      
     
    );



}
export default GestionarSiniestros;