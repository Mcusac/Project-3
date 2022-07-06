// D3 DATA
d3.json("").then(function(data) {
    console.log(data);

    // DROPDOWN
        // Use D3 to select the dropdown menu
        var dropdownMenu = d3.select("#selDataset");
        // Assign the value of the dropdown menu option to a variable
        data.names.forEach((id) => {
            // console.log(id)
            dropdownMenu.append("option").text(id).property("value", id);
            
        })
        loadcharts(data.names[0])  
});