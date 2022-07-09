console.log()
// D3 DATA
// d3.json("api/v1.0").then(function(data) {
//     console.log(data);

//     // DROPDOWN
//         // Use D3 to select the dropdown menu
//         var dropdownMenu = d3.select("#selDataset");
//         // Assign the value of the dropdown menu option to a variable
//         data.names.forEach((id) => {
//             // console.log(id)
//             dropdownMenu.append("option").text(id).property("value", id);
            
//         })
//         // loadcharts(data.names[0])  
// });

d3.json("api/v1.0/pitching").then(function(data) {
    console.log(data);

    // DROPDOWN
        // Use D3 to select the dropdown menu
        let dropdownMenu = d3.select("#selDataset_pitching");
        // Assign the value of the dropdown menu option to a variable
         data.forEach((id) => {
             // console.log(id)
             dropdownMenu.append("option").text(id[0]).property("value", id[0]);
            
        })
        // loadcharts(data.names[0])  
});

d3.json("api/v1.0/batting").then(function(data) {
    console.log(data);

    // DROPDOWN
        // Use D3 to select the dropdown menu
        let dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
         data.forEach((id) => {
             // console.log(id)
             dropdownMenu.append("option").text(id[0]).property("value", id[0]);
            
        })
        // loadcharts(data.names[0])  
});

function optionChanged(this_id){
    loadcharts(this_id)
};

function loadcharts(selected){
    d3.json("samples.json").then(function(data){
        console.log(selected)

    })
};