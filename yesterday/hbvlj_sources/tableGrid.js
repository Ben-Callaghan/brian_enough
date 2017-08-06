function gridMaker(downRows, acrossCells) {
    
    var grid = document.getElementById("gridTable");
    var gridRows = [];
    var gridCells = [];
    
    for(i = 0; i < downRows; i++) {
        gridRows[i] = grid.insertRow();
    }
    
    for(i = 0; i < acrossCells; i++) {
        for (x = 0; x < acrossCells; x++) {
            gridCells[x] =gridRows[i].insertCell();
        }
    }
}

gridMaker(30, 30);