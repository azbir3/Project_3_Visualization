function init(csvname, column) { 
  var values=[]
  var labels=[]

  d3.csv(csvname, function (data) 
  {
      for ( var i=0; i < data.length; i++){
        values.push(data[i][column]);
        labels.push(data[i].Type_of_Injury);
      }
      var data = [{
        values: values,
        labels: labels,
        hole: .5,
        type: "pie"
      }];
    
        var layout = {
          height: 500,
          width: 650
       };
      
        Plotly.newPlot("pie", data, layout);
  });
}
  
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  
  function getData(dataset) {
    var csvname="";
    var column="";
    switch (dataset) {
    case "datasetBX":
      csvname="http://localhost:5000/injuryType_borough"
      column="BRONX"
      break;
    case "datasetBR":
      csvname="http://localhost:5000/injuryType_borough"
      column="BROOKLYN"
      break;
    case "datasetMH":
      csvname="http://localhost:5000/injuryType_borough"
      column="MANHATTAN"
      break;
    case "datasetQS":
      csvname="http://localhost:5000/injuryType_borough"
      column="QUEENS"
      break;
    case "datasetSI":
      csvname="http://localhost:5000/injuryType_borough"
      column="STATEN ISLAND"
      break;
    default: 
      csvname="http://localhost:5000/injuryType_borough"
      column="Total_Accidents"
    break;
    }

  //updatePlotly(data);
  init(csvname, column);
}
  
init("http://localhost:5000/injuryType_borough", "Total_Accidents");