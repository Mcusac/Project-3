//-----------------------------------------------------------------------------------
function pitching_api_year_player(playerID) {
    console.log(playerID)
    d3.json("/pitching/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Pitchers
        let FYear = data[0][6]
        let LYear = data[0][7]
        let xValue = Range(FYear, LYear)
        let yValue = []
        for (let i=0; i < data[0].length; i++) {
            yValue.push(data[i][2])
        }
        let trace1 = {
            x: xValue,
            y: yValue,
            type: 'bar',
            text: yValue.map(String),
            textposition: 'auto',
            hoverinfo: 'none',
            marker: {
              color: 'rgb(158,202,225)',
              opacity: 0.6,
              line: {
                color: 'rgb(8,48,107)',
                width: 1.5
              }
            }
          };
          let data1 = [trace1];
          let layout = {
            title: 'Home Runs Allowed by Year',
            orientation : 'h'
          };
          Plotly.newPlot('pgraph1', data1, layout);
    })
};

function batting_api_year_player(yearID, playerID) {
    console.log(yearID, playerID)
    d3.json("/batting/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Pitchers
    })
};
//-----------------------------------------------------------------------------------
// bar chart
//Plot 1 - AVG
//xvalue = [First Year -> Last]
//yvalue = Array values by year


// let xValue = ['Product A', 'Product B', 'Product C'];
// let yValue = [20, 14, 23];
// let trace1 = {
//   x: xValue,
//   y: yValue,
//   type: 'bar',
//   text: yValue.map(String),
//   textposition: 'auto',
//   hoverinfo: 'none',
//   marker: {
//     color: 'rgb(158,202,225)',
//     opacity: 0.6,
//     line: {
//       color: 'rgb(8,48,107)',
//       width: 1.5
//     }
//   }
// };
// let data = [trace1];
// let layout = {
//   title: 'January 2013 Sales Report',
//   barmode: 'stack'
// };
// Plotly.newPlot('myDiv', data, layout);