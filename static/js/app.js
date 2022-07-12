// Not sure if we need this function anymore, but I left it just in case. 
// d3.json("api/v1.0/pitching").then(function(data) {
//     console.log(data);

//     // DROPDOWN
//         // Use D3 to select the dropdown menu
//         let dropdownMenu = d3.select("#selDataset_pitching");
//         // Assign the value of the dropdown menu option to a variable
//          data.forEach((id) => {
//              // console.log(id)
//              dropdownMenu.append("option").text(id[0]).property("value", id[0]);
            
//         })
//         // loadcharts(data.names[0])  
// });

// Not sure if we need this function anymore, but I left it just in case. 
// d3.json("api/v1.0/batting").then(function(data) {
//     console.log(data);
//     // DROPDOWN
//         // Use D3 to select the dropdown menu
//         let dropdownMenu = d3.select("#selDataset");
//         // Assign the value of the dropdown menu option to a variable
//          data.forEach((id) => {
//              // console.log(id)
//              dropdownMenu.append("option").text(id[0]).property("value", id[0]); 
//         })
//         // loadcharts(data.names[0])  
// });


// Not sure if we need this function anymore, but I left it just in case. 
// function loadcharts(selected){
//     d3.json("samples.json").then(function(data){
//         console.log(selected)
//     })
// };

// Not sure if we need this function anymore, but I left it just in case. 
// function optionChanged(this_id){
//     loadcharts(this_id)
// };

//-----------------------------------------------------------------------------------
// We created the function "batting" below which is being called 
// in the form_batting.html file on line 39 as the action =
function batting(yearID, playerID) {
    console.log(yearID, playerID)
    d3.json("/send_batting/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Batters
    })
};
//-----------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------
// We created the function "pitching" below which is being called 
// in the form_pitching.html file on line 39 as the action =
function pitching(yearID, playerID) {
    console.log(yearID, playerID)
    d3.json("/send_pitching/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Pitchers
    })
};
//-----------------------------------------------------------------------------------
// Matt's try at simplification
function pitching_api_year_player(yearID, playerID) {
    console.log(yearID, playerID)
    d3.json("/pitching/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Pitchers
    })
};

function batting_api_year_player(yearID, playerID) {
    console.log(yearID, playerID)
    d3.json("/pitching/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Pitchers
    })
};
//-----------------------------------------------------------------------------------