function init() {
    var data = [{
      values: [64150, 131182, 86727, 114879, 15634],
      labels: ["BRONX", "BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND"],
      type: "pie"
    }];
  
    var layout = {
      height: 600,
      width: 800
    };
  
    Plotly.plot("pie", data, layout);
  }
  
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  
  function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset17":
      data = [21398, 44914, 31774, 38626, 6241];
      break;
    case "dataset18":
      data = [23056, 47310, 31410, 41275, 6170];
      break;
    case "dataset19":
      data = [19696, 38958, 23543, 34978, 3223];
    }
    updatePlotly(data);
  }
  
  init();
  
  