//-----------------------------------------------------------------------------------
function pitching_api_year_player(playerID) {
    console.log(playerID)
    d3.json("/pitching/"+playerID).then(function(data){
      console.log(data)
      // HR
      let FYear = data[0][6]
      let LYear = data[0][7]
      let xValue = new Array(data.length)
      for (i = 0; i < data.length; i++) {
          xValue[i] = data[i][1];
      }
      let yValue = []
      for (let i=0; i < data.length; i++) {
        yValue.push(data[i][2])
      }
      let trace1 = {
          x: xValue,
          y: yValue,
          type: 'bar',
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
          
      // SO
      yValue = []
      for (let i=0; i < data.length; i++) {
        yValue.push(data[i][3])
      }
      trace1 = {
        x: xValue,
        y: yValue,
        type: 'bar',
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
        data1 = [trace1];
        layout = {
          title: 'Strike Outs by Year',
          orientation : 'h'
        };
        Plotly.newPlot('pgraph2', data1, layout);

      // BB
      yValue = []
      for (let i=0; i < data.length; i++) {
        yValue.push(data[i][4])
      }
      trace1 = {
        x: xValue,
        y: yValue,
        type: 'bar',
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
        data1 = [trace1];
        layout = {
          title: 'Walks by Year',
          orientation : 'h'
        };
        Plotly.newPlot('pgraph3', data1, layout);

      // ERA
      yValue = []
      for (let i=0; i < data.length; i++) {
        yValue.push(data[i][5])
      }
      trace1 = {
        x: xValue,
        y: yValue,
        type: 'bar',
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
        data1 = [trace1];
        layout = {
          title: 'Earned Run Average by Year',
          orientation : 'h'
        };
        Plotly.newPlot('pgraph4', data1, layout);
    })
};

// function batting_api_player(playerID) {

// };

function batting_api_year_player(yearID, playerID){
  console.log(yearID,playerID)
  d3.json("/batting/"+yearID+"/"+playerID).then(function(data){
    console.log(data['Batting'], data['Year'])
    //This is where the plotly charts will go for the Pitchers
    // AVG
    let FYear = data['Batting'][0][6]
    let LYear = data['Batting'][0][7]
    let xValue = new Array(data['Batting'].length)
    for (i = 0; i < data['Batting'].length; i++) {
      xValue[i] = data['Batting'][i][1];
    }
    let yValue = []
    for (let i=0; i < data['Batting'].length; i++) {
      yValue.push(data['Batting'][i][2])
    }
    let trace1 = {
        x: xValue,
        y: yValue,
        type: 'bar',
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
        title: 'Batting Average by Year',
        orientation : 'h'
      };
      Plotly.newPlot('bgraph1', data1, layout);
        
    // HR
    yValue = []
    for (let i=0; i < data['Batting'].length; i++) {
      yValue.push(data['Batting'][i][3])
    }
    trace1 = {
      x: xValue,
      y: yValue,
      type: 'bar',
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
      data1 = [trace1];
      layout = {
        title: 'Home Runs by Year',
        orientation : 'h'
      };
      Plotly.newPlot('bgraph2', data1, layout);

    // SO
    yValue = []
    for (let i=0; i < data['Batting'].length; i++) {
      yValue.push(data['Batting'][i][5]);
    }
    trace1 = {
      x: xValue,
      y: yValue,
      type: 'bar',
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
      data1 = [trace1];
      layout = {
        title: 'Strike Outs by Year',
        orientation : 'h'
      };
      Plotly.newPlot('bgraph3', data1, layout);
    
    // Pie Chart
    console.log(data)
    labels = [
      'Singles',
      'Doubles',
      'Triples',
      'Home Runs'
    ]
    trace1 = {
      // I think error is here
      values: data['Batting'],
      labels: labels,
      type: 'pie'
    }
      bat_data = [trace1]
      layout = {
        title: 'Base Hit Breakdown',
        height: 400,
        width: 400,
        showlegend: true
      }
      Plotly.newPlot('bgraph4', bat_data, layout);
  })
}
//-----------------------------------------------------------------------------------