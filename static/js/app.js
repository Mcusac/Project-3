// //-----------------------------------------------------------------------------------
// // We created the function "batting" below which is being called 
// // in the form_batting.html file on line 39 as the action =
// function batting(yearID, playerID) {
//     console.log(yearID, playerID)
//     d3.json("/send_batting/"+yearID+"/"+playerID).then(function(data){
//         console.log(data)
//         //This is where the plotly charts will go for the Batters
//     })
// };
// //-----------------------------------------------------------------------------------

// //-----------------------------------------------------------------------------------
// // We created the function "pitching" below which is being called 
// // in the form_pitching.html file on line 39 as the action =
// function pitching(yearID, playerID) {
//     console.log(yearID, playerID)
//     d3.json("/send_pitching/"+yearID+"/"+playerID).then(function(data){
//         console.log(data)
//         //This is where the plotly charts will go for the Pitchers
//     })
// };
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
    d3.json("/batting/"+yearID+"/"+playerID).then(function(data){
        console.log(data)
        //This is where the plotly charts will go for the Pitchers
    })
};
//-----------------------------------------------------------------------------------