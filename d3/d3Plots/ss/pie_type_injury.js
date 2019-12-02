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
      csvname="../data/injuryType_borough.csv"
      column="BRONX"
      break;
    case "datasetBR":
      csvname="../data/injuryType_borough.csv"
      column="BROOKLYN"
      break;
    case "datasetMH":
      csvname="../data/injuryType_borough.csv"
      column="MANHATTAN"
      break;
    case "datasetQS":
      csvname="../data/injuryType_borough.csv"
      column="QUEENS"
      break;
    case "datasetSI":
      csvname="../data/injuryType_borough.csv"
      column="STATEN ISLAND"
      break;
    default: 
      csvname="../data/injuryType_borough.csv"
      column="Total_Accidents"
    break;
    }

  //updatePlotly(data);
  init(csvname, column);
}
  
init("../data/injuryType_borough.csv", "Total_Accidents");
  
  