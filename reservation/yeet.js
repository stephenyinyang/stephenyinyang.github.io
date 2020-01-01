/*eslint-env browser*/

/*var d = new Date();*/
/*var year = d.getFullYear();*/

// Creates the navigation calendar at top left of screen
function MainCalendarNav(setMonth) {
    "use strict";
    var today = new Date(),
        calendar = document.createElement('div'),
        addMonth = document.createElement('button'),
        decMonth = document.createElement('button'),
        newLine = document.createElement('br'),
        newLine2 = document.createElement('br'),
        reserve = document.createElement('button'),
        reserveSeason = document.createElement('button'),
        grid = document.createElement('table'),
        headerRow = document.createElement('tr'),
        headerCell = document.createElement('td');
    
    this.cal = calendar; 
    this.month = setMonth;
    grid.setAttribute("id", "grid");
    document.body.appendChild(calendar);
    calendar.appendChild(grid);
    calendar.appendChild(decMonth);
    calendar.appendChild(addMonth);
    calendar.appendChild(newLine);
    calendar.appendChild(reserve);
    calendar.appendChild(newLine2);
    calendar.appendChild(reserveSeason);
    grid.appendChild(headerRow);
    headerRow.appendChild(headerCell);
    headerCell.colSpan = 7;
    headerRow.setAttribute("id", "headerRow");
    calendar.setAttribute("id", "calendarNav");
    addMonth.innerHTML = "-->";
    decMonth.innerHTML = "<--";
    reserve.innerHTML = "Daily Reservation";
    reserveSeason.innerHTML = "Seasonal Reservation";
    
    
    var d = new Date();
    d.setMonth(setMonth);
    var year = d.getFullYear(),
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        month = months[setMonth],
        day = d.getDate(),
        shortDays = ["S", "M", "T", "W", "T", "F", "S"],
        dayName = shortDays[d.getDay()];
   headerCell.innerHTML = month + " " + year;
    var firstDay = new Date(year, setMonth, 1),
        startDayNum = firstDay.getDay();
    var numDays = new Date(year, (setMonth + 1), 0).getDate();
    var currentDay = 1;
    for (var i = 0; i < 7; i++){
        var row = document.createElement('tr');
        grid.appendChild(row);
        for (var j = 0; j < 7; j++){
            var column = document.createElement('td');
            column.month = setMonth;
            column.year = year;
            column.setAttribute("class", "cell");
            row.appendChild(column);
            if (i == 0){
            column.innerHTML = shortDays[j];
            column.setAttribute("class", "regCell");
            }
            else if (i == 1){
                if (j<startDayNum){
                    column.innerHTML = "-";
                    column.setAttribute("class", "regCell");
                }
                else{
                    column.innerHTML = currentDay;
                    if (column.innerHTML == (today.getDate()) && column.month == (currentCalendar.setMonth) && column.year == currentCalendar.year){
                        column.setAttribute("class", "currentDay");
                        }
                    
                    column.addEventListener('click', function() {
                        var change = document.getElementsByClassName("currentDay");
                        var dayNum = this.innerHTML;
                        var showCal = calendars.find(function(element){
                            if (element.day == dayNum && element.setMonth == setMonth && element.year == year){
                                return element;   
                            }
                        });
                        if (showCal == undefined){
                            alert("This day does not exist.");
                        }
                        else{
                        for (var i = 0; i < change.length; i++){
                        change[i].setAttribute("class", "cell");
                        }
                        this.setAttribute("class", "currentDay");
                        currentCalendar.table.style.display = "none";
                        currentCalendar.title.style.display = "none";
                        currentCalendar.subtitle.style.display = "none";
                        currentCalendar.dateDisplay.style.display = "none";
                        showCal.table.style.display = "block";
                        showCal.title.style.display = "block";
                        showCal.subtitle.style.display = "block";
                        showCal.dateDisplay.style.display = "block";
                        currentCalendar = showCal;
                        }
                    });
                    currentDay++;
                    }                                        
            }
            else {
                if (currentDay <= numDays){
                column.innerHTML = currentDay;
                if (column.innerHTML == (today.getDate()) && column.month == (currentCalendar.setMonth) && column.year == currentCalendar.year){
                    column.setAttribute("class", "currentDay");
                    }
                
                column.addEventListener('click', function() {   
                        var change = document.getElementsByClassName("currentDay");
                        var dayNum = this.innerHTML;
                        var showCal = calendars.find(function(element){
                            if (element.day == dayNum && element.setMonth == setMonth && element.year == year){
                                return element;   
                            }
                        });
                        if (showCal == undefined){
                            alert("This day does not exist.");
                        }
                        else{
                        for (var i = 0; i < change.length; i++){
                        change[i].setAttribute("class", "cell");
                        }
                        this.setAttribute("class", "currentDay");
                        currentCalendar.table.style.display = "none";
                        currentCalendar.title.style.display = "none";
                        currentCalendar.subtitle.style.display = "none";
                        currentCalendar.dateDisplay.style.display = "none";
                        showCal.table.style.display = "block";
                        showCal.title.style.display = "block";
                        showCal.subtitle.style.display = "block";
                        showCal.dateDisplay.style.display = "block";
                        currentCalendar = showCal;
                        }
                    });
                currentDay++;
                }
                else{
                    column.innerHTML = "-";
                    column.setAttribute("class", "regCell");
                }
            }
        }
    }
    addMonth.addEventListener('click', function(){
        var showCalNav = calendarNavs.find(function(element){
                            if (element.month == (setMonth + 1)){
                                return element;   
                            }
            });
        if (showCalNav == undefined){
            alert("This month does not exist");
        }
        else{
        calendar.style.display = "none";
        showCalNav.cal.style.display = "block";
        }
    });
    decMonth.addEventListener('click', function(){
        var showCalNav = calendarNavs.find(function(element){
                            if (element.month == (setMonth - 1)){
                                return element;   
                            }});
        if (showCalNav == undefined){
            alert("This month does not exist");
        }
        else{
        calendar.style.display = "none";
            showCalNav.cal.style.display = "block";
            }
        
        });
    reserve.addEventListener('click', setDailyReservation);
    reserveSeason.addEventListener('click', setSeasonalReservation);
}
// Highlights cells when mouse hovers
function hover() {
                for (var l = 0; l < (this.end.time - this.start.time + 1); l++){
                    document.getElementById(this.start.time + l + " " + this.court + " " + this.day + " " + this.setMonth + " " + this.year).setAttribute("class", "cellSelectedHover");
                }
            }
// Unhighlights cells when mouse leaves
function noHover() {
                for (var m = 0; m < (this.end.time - this.start.time + 1); m++){
                document.getElementById(this.start.time + m + " " + this.court + " " + this.day + " " + this.setMonth + " " + this.year).setAttribute("class", "cellSelected");
                }
            }
// Edit name on reservation or remove
function edit(cell){
    var popup = document.createElement("div"),
        popupContent = document.createElement("div"),
        settings = document.createElement("p"),
        name = document.createElement("input"),
        confirm = document.createElement("button"),
        removeSeason = document.createElement("button"),
        remove = document.createElement("button");
    
    
    popup.setAttribute("id", "myPopup");
    popupContent.setAttribute("id", "popupContent");
    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(settings);
    popupContent.appendChild(name);
    popupContent.appendChild(remove);
    popupContent.appendChild(removeSeason);
    popupContent.appendChild(confirm);
    confirm.innerHTML = "Confirm";
    remove.innerHTML = "Remove Single Day";
    removeSeason.innerHTML = "Remove Season Reservation";
    remove.addEventListener('click', function() {
        for (var n = 0; n < cell.end.time - cell.start.time + 1; n++){
            var current = document.getElementById(cell.start.time + n + " " + cell.start.court + " " + cell.start.day + " " + cell.start.setMonth + " " + cell.start.year);
            current.setAttribute("class", "cell");
            current.removeEventListener("mouseover", hover);
            current.removeEventListener("mouseout", noHover);
            cell.start.innerHTML = "";
            popup.style.display = "none";
        }
    });
    
    confirm.addEventListener('click', function() {
        var setName = name.value;
        cell.start.innerHTML = setName;
        popup.style.display = "none";
    })
    settings.innerHTML = "Edit Name or Remove Reservation";
    popup.style.display = "block";
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}
// Creates options popup to make the daily reservation
function setDailyReservation() {
    var popup = document.createElement("div"),
        popupContent = document.createElement("div"),
        startPrompt = document.createElement("p"),
        start = document.createElement("select"),
        endPrompt = document.createElement("p"),
        end = document.createElement("select"),
        courtPrompt = document.createElement("p"),
        court1 = document.createElement("input"),
        linebr1 = document.createElement("label"),
        court2 = document.createElement("input"),
        linebr2 = document.createElement("label"),
        court3 = document.createElement("input"),
        linebr3 = document.createElement("label"),
        court4 = document.createElement("input"),
        linebr4 = document.createElement("label"),
        court5 = document.createElement("input"),
        linebr5 = document.createElement("label"),
        court6 = document.createElement("input"),
        linebr6 = document.createElement("label"),
        br1 = document.createElement("br"),
        br2 = document.createElement("br"),
        br3 = document.createElement("br"),
        br4= document.createElement("br"),
        br5 = document.createElement("br"),
        namePrompt = document.createElement("p"),
        name = document.createElement("input"),
        cancel = document.createElement("button"),
        submit = document.createElement("button");
    
    for (var i = 0; i <= 29; i++){
        var time = document.createElement("option");
        var timeE = document.createElement("option");
        if (i==0){
            time.innerHTML = "8:00 AM";
            timeE.innerHTML = "8:00 AM";
        }
        if (i==1){
            time.innerHTML = "8:30 AM";
            timeE.innerHTML = "8:30 AM";
        }
        if (i==2){
            time.innerHTML = "9:00 AM";
            timeE.innerHTML = "9:00 AM";
        }
        if (i==3){
            time.innerHTML = "9:30 AM";
            timeE.innerHTML = "9:30 AM";
        }
        if (i==4){
            time.innerHTML = "10:00 AM";
            timeE.innerHTML = "10:00 AM";
        }
        if (i==5){
            time.innerHTML = "10:30 AM";
            timeE.innerHTML = "10:30 AM";
        }
        if (i==6){
            time.innerHTML = "11:00 AM";
            timeE.innerHTML = "11:00 AM";
        }
        if (i==7){
            time.innerHTML = "11:30 AM";
            timeE.innerHTML = "11:30 AM";
        }
        if (i==8){
            time.innerHTML = "12:00 PM";
            timeE.innerHTML = "12:00 PM";
        }
        if (i==9){
            time.innerHTML = "12:30 PM";
            timeE.innerHTML = "12:30 PM";
        }
        if (i==10){
            time.innerHTML = "1:00 PM";
            timeE.innerHTML = "1:00 PM";
        }
        if (i==11){
            time.innerHTML = "1:30 PM";
            timeE.innerHTML = "1:30 PM";
        }
        if (i==12){
            time.innerHTML = "2:00 PM";
            timeE.innerHTML = "2:00 PM";
        }
        if (i==13){
            time.innerHTML = "2:30 PM";
            timeE.innerHTML = "2:30 PM";
        }
        if (i==14){
            time.innerHTML = "3:00 PM";
            timeE.innerHTML = "3:00 PM";
        }
        if (i==15){
            time.innerHTML = "3:30 PM";
            timeE.innerHTML = "3:30 PM";
        }
        if (i==16){
            time.innerHTML = "4:00 PM";
            timeE.innerHTML = "4:00 PM";
        }
        if (i==17){
            time.innerHTML = "4:30 PM";
            timeE.innerHTML = "4:30 PM";
        }
        if (i==18){
            time.innerHTML = "5:00 PM";
            timeE.innerHTML = "5:00 PM";
        }
        if (i==19){
            time.innerHTML = "5:30 PM";
            timeE.innerHTML = "5:30 PM";
        }
        if (i==20){
            time.innerHTML = "6:00 PM";
            timeE.innerHTML = "6:00 PM";
        }
        if (i==21){
            time.innerHTML = "6:30 PM";
            timeE.innerHTML = "6:30 PM";
        }
        if (i==22){
            time.innerHTML = "7:00 PM";
            timeE.innerHTML = "7:00 PM";
        }
        if (i==23){
            time.innerHTML = "7:30 PM";
            timeE.innerHTML = "7:30 PM";
        }
        if (i==24){
            time.innerHTML = "8:00 PM";
            timeE.innerHTML = "8:00 PM";
        }
        if (i==25){
            time.innerHTML = "8:30 PM";
            timeE.innerHTML = "8:30 PM";
        }
        if (i==26){
            time.innerHTML = "9:00 PM";
            timeE.innerHTML = "9:00 PM";
        }
        if (i==27){
            time.innerHTML = "9:30 PM";
            timeE.innerHTML = "9:30 PM";
        }
        if (i==28){
            time.innerHTML = "10:00 PM";
            timeE.innerHTML = "10:00 PM";
        }
        if (i==29){
            time.innerHTML = "10:30 PM";
            timeE.innerHTML = "10:30 PM";
        }
        start.appendChild(time);
        end.appendChild(timeE);
        time.value = i;
        timeE.value = i;
    }
    popup.setAttribute("id", "myPopup");
    start.setAttribute("id", "start");
    end.setAttribute("id", "end");
    popupContent.setAttribute("id", "popupContent");
    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(startPrompt);
    popupContent.appendChild(start);
    popupContent.appendChild(endPrompt);
    popupContent.appendChild(end);
    popupContent.appendChild(courtPrompt);
    popupContent.appendChild(court1);
    popupContent.appendChild(linebr1);
    popupContent.appendChild(br1);
    popupContent.appendChild(court2);
    popupContent.appendChild(linebr2);
    popupContent.appendChild(br2);
    popupContent.appendChild(court3);
    popupContent.appendChild(linebr3);
    popupContent.appendChild(br3);
    popupContent.appendChild(court4);
    popupContent.appendChild(linebr4);
    popupContent.appendChild(br4);
    popupContent.appendChild(court5);
    popupContent.appendChild(linebr5);
    popupContent.appendChild(br5);
    popupContent.appendChild(court6);
    popupContent.appendChild(linebr6);
    
    var courts = [];
    courts.push(court1);
    courts.push(court2);
    courts.push(court3);
    courts.push(court4);
    courts.push(court5);
    courts.push(court6);
    linebr1.innerHTML = "1";
    linebr2.innerHTML = "2";
    linebr3.innerHTML = "3";
    linebr4.innerHTML = "4";
    linebr5.innerHTML = "5";
    linebr6.innerHTML = "6";
    court1.value = 1;
    court2.value = 2;
    court3.value = 3;
    court4.value = 4;
    court5.value = 5;
    court6.value = 6;
    court1.setAttribute("type", "checkbox");
    court2.setAttribute("type", "checkbox");
    court3.setAttribute("type", "checkbox");
    court4.setAttribute("type", "checkbox");
    court5.setAttribute("type", "checkbox");
    court6.setAttribute("type", "checkbox");
    popupContent.appendChild(namePrompt);
    popupContent.appendChild(name);
    popupContent.appendChild(cancel);
    popupContent.appendChild(submit);
    startPrompt.innerHTML = "Start time?";
    endPrompt.innerHTML = "End time?";
    courtPrompt.innerHTML = "Which court?";
    namePrompt.innerHTML = "What's the name?";
    cancel.innerHTML = "Cancel";
    submit.innerHTML = "Submit";
    popup.style.display = "block";
    cancel.addEventListener('click', function () {
        popup.style.display = "none";
    });
    submit.addEventListener('click', function () {
        var overlap = false;
        var monthMeter = currentCalendar.setMonth;
        var yearMeter = currentCalendar.year;
        var dayMeter = currentCalendar.day;
        var checkedCourts = [];
        var numNotif = 0;
        for (var a = 0; a < 6; a++){
            if (courts[a].checked == true){
                checkedCourts.push(courts[a].value);
            }
        }
        if (parseInt(end.value) > parseInt(start.value)){
        for (var b = 0; b < checkedCourts.length; b++){
        for (var k = 0; k < (parseInt(end.value) - parseInt(start.value)); k++){
            
            var checkCell = document.getElementById((parseInt(start.value) + k) + " " + checkedCourts[b] + " " + (dayMeter) + " " + (monthMeter) + " " + yearMeter);
            if (checkCell.className == "cellSelected" && numNotif == 0){
                alert("Reservation overlapped with another reservation.");
                overlap = true;
                numNotif++;
                break;
            }
        }
        if (!overlap){
        // highlights and "selects" all cells between start cell and end cell
        for (var h = 0; h < (end.value - start.value); h++){
            
            var current = document.getElementById((parseInt(start.value) + h) + " " + checkedCourts[b] + " " + (dayMeter) + " " + (monthMeter) + " " + yearMeter);
            select(current);
            current.start = document.getElementById(start.value +  " " + checkedCourts[b] + " " + dayMeter + " " + monthMeter + " " + yearMeter);
            current.end = document.getElementById(end.value - 1 +  " " + checkedCourts[b] + " " + dayMeter + " " + monthMeter + " " + yearMeter);
            // turns all cells within group pink when one cell is hovered
            current.addEventListener("mouseover", hover);
            current.addEventListener("mouseout", noHover);
        }
        var setName = name.value;
        current.start.innerHTML = setName;
        }
                
        popup.style.display = "none";
        
            
        }
        }
        else{
            alert("Invalid start/end time")
        }
        
        
    });
    
    
   
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}
// Creates options popup to make the seasonal reservation
function setSeasonalReservation() {
    var popup = document.createElement("div"),
        popupContent = document.createElement("div"),
        startPrompt = document.createElement("p"),
        start = document.createElement("select"),
        endPrompt = document.createElement("p"),
        end = document.createElement("select"),
        weekPrompt = document.createElement("p"),
        weeks = document.createElement("input"),
        courtPrompt = document.createElement("p"),
        court1 = document.createElement("input"),
        linebr1 = document.createElement("label"),
        court2 = document.createElement("input"),
        linebr2 = document.createElement("label"),
        court3 = document.createElement("input"),
        linebr3 = document.createElement("label"),
        court4 = document.createElement("input"),
        linebr4 = document.createElement("label"),
        court5 = document.createElement("input"),
        linebr5 = document.createElement("label"),
        court6 = document.createElement("input"),
        linebr6 = document.createElement("label"),
        br1 = document.createElement("br"),
        br2 = document.createElement("br"),
        br3 = document.createElement("br"),
        br4= document.createElement("br"),
        br5 = document.createElement("br"),
        namePrompt = document.createElement("p"),
        name = document.createElement("input"),
        cancel = document.createElement("button"),
        submit = document.createElement("button");
    
    for (var i = 0; i <= 29; i++){
        var time = document.createElement("option");
        var timeE = document.createElement("option");
        if (i==0){
            time.innerHTML = "8:00 AM";
            timeE.innerHTML = "8:00 AM";
        }
        if (i==1){
            time.innerHTML = "8:30 AM";
            timeE.innerHTML = "8:30 AM";
        }
        if (i==2){
            time.innerHTML = "9:00 AM";
            timeE.innerHTML = "9:00 AM";
        }
        if (i==3){
            time.innerHTML = "9:30 AM";
            timeE.innerHTML = "9:30 AM";
        }
        if (i==4){
            time.innerHTML = "10:00 AM";
            timeE.innerHTML = "10:00 AM";
        }
        if (i==5){
            time.innerHTML = "10:30 AM";
            timeE.innerHTML = "10:30 AM";
        }
        if (i==6){
            time.innerHTML = "11:00 AM";
            timeE.innerHTML = "11:00 AM";
        }
        if (i==7){
            time.innerHTML = "11:30 AM";
            timeE.innerHTML = "11:30 AM";
        }
        if (i==8){
            time.innerHTML = "12:00 PM";
            timeE.innerHTML = "12:00 PM";
        }
        if (i==9){
            time.innerHTML = "12:30 PM";
            timeE.innerHTML = "12:30 PM";
        }
        if (i==10){
            time.innerHTML = "1:00 PM";
            timeE.innerHTML = "1:00 PM";
        }
        if (i==11){
            time.innerHTML = "1:30 PM";
            timeE.innerHTML = "1:30 PM";
        }
        if (i==12){
            time.innerHTML = "2:00 PM";
            timeE.innerHTML = "2:00 PM";
        }
        if (i==13){
            time.innerHTML = "2:30 PM";
            timeE.innerHTML = "2:30 PM";
        }
        if (i==14){
            time.innerHTML = "3:00 PM";
            timeE.innerHTML = "3:00 PM";
        }
        if (i==15){
            time.innerHTML = "3:30 PM";
            timeE.innerHTML = "3:30 PM";
        }
        if (i==16){
            time.innerHTML = "4:00 PM";
            timeE.innerHTML = "4:00 PM";
        }
        if (i==17){
            time.innerHTML = "4:30 PM";
            timeE.innerHTML = "4:30 PM";
        }
        if (i==18){
            time.innerHTML = "5:00 PM";
            timeE.innerHTML = "5:00 PM";
        }
        if (i==19){
            time.innerHTML = "5:30 PM";
            timeE.innerHTML = "5:30 PM";
        }
        if (i==20){
            time.innerHTML = "6:00 PM";
            timeE.innerHTML = "6:00 PM";
        }
        if (i==21){
            time.innerHTML = "6:30 PM";
            timeE.innerHTML = "6:30 PM";
        }
        if (i==22){
            time.innerHTML = "7:00 PM";
            timeE.innerHTML = "7:00 PM";
        }
        if (i==23){
            time.innerHTML = "7:30 PM";
            timeE.innerHTML = "7:30 PM";
        }
        if (i==24){
            time.innerHTML = "8:00 PM";
            timeE.innerHTML = "8:00 PM";
        }
        if (i==25){
            time.innerHTML = "8:30 PM";
            timeE.innerHTML = "8:30 PM";
        }
        if (i==26){
            time.innerHTML = "9:00 PM";
            timeE.innerHTML = "9:00 PM";
        }
        if (i==27){
            time.innerHTML = "9:30 PM";
            timeE.innerHTML = "9:30 PM";
        }
        if (i==28){
            time.innerHTML = "10:00 PM";
            timeE.innerHTML = "10:00 PM";
        }
        if (i==29){
            time.innerHTML = "10:30 PM";
            timeE.innerHTML = "10:30 PM";
        }
        start.appendChild(time);
        end.appendChild(timeE);
        time.value = i;
        timeE.value = i;
    }
    popup.setAttribute("id", "myPopup");
    start.setAttribute("id", "start");
    end.setAttribute("id", "end");
    weeks.setAttribute("id", "weeks");
    popupContent.setAttribute("id", "popupContent");
    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(startPrompt);
    popupContent.appendChild(start);
    popupContent.appendChild(endPrompt);
    popupContent.appendChild(end);
    popupContent.appendChild(weekPrompt);
    popupContent.appendChild(weeks);
    popupContent.appendChild(courtPrompt);
    popupContent.appendChild(court1);
    popupContent.appendChild(linebr1);
    popupContent.appendChild(br1);
    popupContent.appendChild(court2);
    popupContent.appendChild(linebr2);
    popupContent.appendChild(br2);
    popupContent.appendChild(court3);
    popupContent.appendChild(linebr3);
    popupContent.appendChild(br3);
    popupContent.appendChild(court4);
    popupContent.appendChild(linebr4);
    popupContent.appendChild(br4);
    popupContent.appendChild(court5);
    popupContent.appendChild(linebr5);
    popupContent.appendChild(br5);
    popupContent.appendChild(court6);
    popupContent.appendChild(linebr6);
    
    var courts = [];
    courts.push(court1);
    courts.push(court2);
    courts.push(court3);
    courts.push(court4);
    courts.push(court5);
    courts.push(court6);
    linebr1.innerHTML = "1";
    linebr2.innerHTML = "2";
    linebr3.innerHTML = "3";
    linebr4.innerHTML = "4";
    linebr5.innerHTML = "5";
    linebr6.innerHTML = "6";
    court1.value = 1;
    court2.value = 2;
    court3.value = 3;
    court4.value = 4;
    court5.value = 5;
    court6.value = 6;
    court1.setAttribute("type", "checkbox");
    court2.setAttribute("type", "checkbox");
    court3.setAttribute("type", "checkbox");
    court4.setAttribute("type", "checkbox");
    court5.setAttribute("type", "checkbox");
    court6.setAttribute("type", "checkbox");
    popupContent.appendChild(namePrompt);
    popupContent.appendChild(name);
    popupContent.appendChild(cancel);
    popupContent.appendChild(submit);
    startPrompt.innerHTML = "Start time?";
    endPrompt.innerHTML = "End time?";
    weekPrompt.innerHTML = "How many weeks?";
    courtPrompt.innerHTML = "Which court?";
    namePrompt.innerHTML = "What's the name?";
    weekPrompt.innerHTML = "How many weeks?"
    cancel.innerHTML = "Cancel";
    submit.innerHTML = "Submit";
    popup.style.display = "block";
    cancel.addEventListener('click', function () {
        popup.style.display = "none";
    });
    submit.addEventListener('click', function () {
        var overlap = false;
        var monthMeter = currentCalendar.setMonth;
        var yearMeter = currentCalendar.year;
        var dayMeter = currentCalendar.day;
        var checkedCourts = [];
        var numNotif = 0;
        for (var a = 0; a < 6; a++){
            if (courts[a].checked == true){
                checkedCourts.push(courts[a].value);
            }
        }
        if (parseInt(end.value) > parseInt(start.value)){
               
                for(var f = 0; f < weeks.value; f++){
                  for(var b = 0; b < checkedCourts.length; b++){
        for (var k = 0; k < (parseInt(end.value) - parseInt(start.value)); k++){
            if (dayMeter > new Date(yearMeter, (monthMeter + 1), 0).getDate()){
                dayMeter = dayMeter - (new Date(yearMeter, (monthMeter + 1), 0).getDate());
                monthMeter++;
            }
            
            var checkCell = document.getElementById((parseInt(start.value) + k) + " " + checkedCourts[b] + " " + (dayMeter) + " " + (monthMeter) + " " + yearMeter);
            if (checkCell.className == "cellSelected" && numNotif == 0){
                alert("Reservation overlapped with another reservation.");
                overlap = true;
                numNotif++;
                break;
            }
        }
                  }
                    dayMeter += 7;
                }
        monthMeter = currentCalendar.setMonth;
        yearMeter = currentCalendar.year;
        dayMeter = currentCalendar.day;
        if (!overlap){
        // highlights and "selects" all cells between start cell and end cell
            for(var c = 0; c < weeks.value; c++){
                  for(var d = 0; d < checkedCourts.length; d++){
        for (var h = 0; h < (parseInt(end.value) - parseInt(start.value)); h++){
            if (dayMeter > new Date(yearMeter, (monthMeter + 1), 0).getDate()){
                dayMeter = dayMeter - (new Date(yearMeter, (monthMeter + 1), 0).getDate());
                monthMeter++;
            }
            
            var current = document.getElementById((parseInt(start.value) + h) + " " + checkedCourts[d] + " " + (dayMeter) + " " + (monthMeter) + " " + yearMeter);
            select(current);
            current.start = document.getElementById(start.value +  " " + checkedCourts[d] + " " + dayMeter + " " + monthMeter + " " + yearMeter);
            current.end = document.getElementById(end.value - 1 +  " " + checkedCourts[d] + " " + dayMeter + " " + monthMeter + " " + yearMeter);
            // turns all cells within group pink when one cell is hovered
            current.addEventListener("mouseover", hover);
            current.addEventListener("mouseout", noHover);
        }
        var setName = name.value;
        current.start.innerHTML = setName;
                  }
                dayMeter+=7;
            }
        
        }
                   
                
                     
        popup.style.display = "none";
        
                }
        
        else{
            alert("Invalid start/end time")
        }
        
        
    });
    
    
   
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
}
// Changes class of cell to selected
function select(cell){
    cell.setAttribute("class", "cellSelected");
}
// Changes class of cell that is clicked by user
function initialSelect(cell){
    cell.setAttribute("class", "cellInitialSelected");
}
// Reserve court popup when click on cell
function reserve(cell) {
    initialSelect(cell);
    var statement = "",
        popup = document.createElement("div"),
        popupContent = document.createElement("div"),
        hourPrompt = document.createElement("p"),
        hours = document.createElement("input"),
        namePrompt = document.createElement("p"),
        name = document.createElement("input"),
        cancel = document.createElement("button"),
        submit = document.createElement("button");
    
    
    popup.setAttribute("id", "myPopup");
    popupContent.setAttribute("id", "popupContent");
    document.body.appendChild(popup);
    popup.appendChild(popupContent);
    popupContent.appendChild(hourPrompt);
    popupContent.appendChild(hours);
    popupContent.appendChild(namePrompt);
    popupContent.appendChild(name);
    popupContent.appendChild(submit);
    popupContent.appendChild(cancel);
    submit.innerHTML = "Submit";
    cancel.innerHTML = "Cancel";
    namePrompt.innerHTML = "What's the name?";
    hourPrompt.innerHTML = "How many hours? (Ex. 0.5, 1, etc.)";
    popup.style.display = "block";
    cancel.addEventListener('click', function () {
        popup.style.display = "none";
        cell.setAttribute("class","cell");
    });
    submit.addEventListener('click', function () {
        var value = hours.value;
        var cellNum = value/.5 - 1;
        var startCell = document.getElementById(cell.id);
        var endCell = document.getElementById((cell.time + cellNum) + " " + cell.court + " " + cell.day + " " + cell.setMonth + " " + cell.year);
        var overlap = false;
        for (var k = 0; k < cellNum + 1; k++){
            var checkCell = document.getElementById(cell.time + k + " " + cell.court + " " + cell.day + " " + cell.setMonth + " " + cell.year);
            if (checkCell.className == "cellSelected"){
                alert("Reservation overlapped with another reservation.");
                cell.setAttribute("class","cell");
                overlap = true;
                break;
            }
        }
        if (!overlap){
        // highlights and "selects" all cells between start cell and end cell
        for (var h = 0; h < cellNum + 1; h++){
            var current = document.getElementById(cell.time + h + " " + cell.court + " " + cell.day + " " + cell.setMonth + " " + cell.year);
            if (current.className == "cellSelected"){
                alert("Reservation overlapped with another reservation.");
                break;
            }
            else {
            select(current);
            current.start = startCell;
            current.end = endCell;
            // turns all cells within group pink when one cell is hovered
            current.addEventListener("mouseover", hover);
            current.addEventListener("mouseout", noHover);
            }
        }
        var setName = name.value;
        cell.start.innerHTML = setName;
        var time,
            day,
            month,
            length;
        // makes time 2 character strings
        if (cell.time < 10) {
            time = "0" + cell.time;
            }
        else {
            time = "" + cell.time;
        }
        // makes day 2 character strings
        if (cell.day < 10) {
            day = "0" + cell.day;
        }
        else {
            day = "" + cell.day;
        }
        // makes month 2 character strings
        if (cell.setMonth < 10) {
            month = "0" + cell.setMonth;
        }
        else {
            month = "" + cell.setMonth;
        }
        // makes length 2 character strings
        if (cellNum < 10) {
            length = "0" + cellNum;
        }
        else {
            length = "" + cellNum;
        }
        reservations.push(month + day + cell.year + time + length + cell.court +  setName);
        localStorage.setItem("Reservations", JSON.stringify(reservations));
        statement = "reserved";
        }
        popup.style.display = "none";
        });
    
   
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            cell.setAttribute("class","cell");
            
        }
    }
    return statement;
}

// Generates table for calendar
function Calendar(date, setMonth, year) {
    this.day = date;
    this.setMonth = setMonth;
    this.year = year;
    this.numDays = new Date(year, (setMonth + 1), 0).getDate();
    "use strict";

    var d = new Date();
        d.setDate(date);
        d.setMonth(setMonth);
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        month = months[d.getMonth()],
        day = d.getDate(),
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayName = days[d.getDay()],
        cal = document.createElement('div'),
        row1 = document.createElement('tr'),
        time = document.createElement('th'),
        court1 = document.createElement('th'),
        court2 = document.createElement('th'),
        court3 = document.createElement('th'),
        court4 = document.createElement('th'),
        court5 = document.createElement('th'),
        court6 = document.createElement('th');
    this.year = year;
    this.table = document.createElement('table');
    this.title = document.createElement('h1');
    this.subtitle = document.createElement('h3');
    this.dateDisplay = document.createElement('h3');
    cal.setAttribute("id", "calendar");
    this.title.setAttribute("id", "title");
    this.subtitle.setAttribute("id", "subtitle");
    this.dateDisplay.setAttribute("id", "dateDisplay");
    this.table.setAttribute("class", "table");
    time.setAttribute("id", "time");
    court1.setAttribute("id", "court1");
    court2.setAttribute("id", "court2");
    court3.setAttribute("id", "court3");
    court4.setAttribute("id", "court4");
    court5.setAttribute("id", "court5");
    court6.setAttribute("id", "court6");
    this.title.innerHTML = "Burrows-Burleson Tennis Center";
    this.subtitle.innerHTML = "Indoor Court Reservations";
    this.dateDisplay.innerHTML = "Date: " + dayName + ", " + month + " " + day + " " + this.year;
    time.innerHTML = "Time";
    court1.innerHTML = "Court 1";
    court2.innerHTML = "Court 2";
    court3.innerHTML = "Court 3";
    court4.innerHTML = "Court 4";
    court5.innerHTML = "Court 5";
    court6.innerHTML = "Court 6";
    document.body.appendChild(cal);
    cal.appendChild(this.title);
    cal.appendChild(this.subtitle);
    cal.appendChild(this.dateDisplay);
    cal.appendChild(this.table);
    
    this.table.appendChild(row1);
    row1.appendChild(time);
    row1.appendChild(court1);
    row1.appendChild(court2);
    row1.appendChild(court3);
    row1.appendChild(court4);
    row1.appendChild(court5);
    row1.appendChild(court6);
    for (var i=0; i<29; i++) {
        var row = document.createElement('tr');
        this.table.appendChild(row);
        var clock = document.createElement('th');
        clock.setAttribute("id", "clock");
        if (i==0){
            clock.innerHTML = "8:00";
        }
        if (i==1){
            clock.innerHTML = "8:30";
        }
        if (i==2){
            clock.innerHTML = "9:00";
        }
        if (i==3){
            clock.innerHTML = "9:30";
        }
        if (i==4){
            clock.innerHTML = "10:00";
        }
        if (i==5){
            clock.innerHTML = "10:30";
        }
        if (i==6){
            clock.innerHTML = "11:00";
        }
        if (i==7){
            clock.innerHTML = "11:30";
        }
        if (i==8){
            clock.innerHTML = "12:00";
        }
        if (i==9){
            clock.innerHTML = "12:30";
        }
        if (i==10){
            clock.innerHTML = "1:00";
        }
        if (i==11){
            clock.innerHTML = "1:30";
        }
        if (i==12){
            clock.innerHTML = "2:00";
        }
        if (i==13){
            clock.innerHTML = "2:30";
        }
        if (i==14){
            clock.innerHTML = "3:00";
        }
        if (i==15){
            clock.innerHTML = "3:30";
        }
        if (i==16){
            clock.innerHTML = "4:00";
        }
        if (i==17){
            clock.innerHTML = "4:30";
        }
        if (i==18){
            clock.innerHTML = "5:00";
        }
        if (i==19){
            clock.innerHTML = "5:30";
        }
        if (i==20){
            clock.innerHTML = "6:00";
        }
        if (i==21){
            clock.innerHTML = "6:30";
        }
        if (i==22){
            clock.innerHTML = "7:00";
        }
        if (i==23){
            clock.innerHTML = "7:30";
        }
        if (i==24){
            clock.innerHTML = "8:00";
        }
        if (i==25){
            clock.innerHTML = "8:30";
        }
        if (i==26){
            clock.innerHTML = "9:00";
        }
        if (i==27){
            clock.innerHTML = "9:30";
        }
        if (i==28){
            clock.innerHTML = "10:00";
        }
        row.appendChild(clock);
        for (var j=0; j<6; j++){
            var cell = document.createElement('td');
            cell.time = i;
            cell.court = j+1;
            cell.day = this.day;
            cell.setMonth = this.setMonth;
            cell.year = this.year;
            row.appendChild(cell);
            cell.addEventListener('click', function(){
                if (this.className == "cellSelectedHover"){
                    edit(this);
                }
                else {
                    reserve(this);
                    /*alert(outcome);*/
                    
                }
            });

            cell.setAttribute("id",i + " " + (j + 1) + " " + this.day + " " + this.setMonth + " " + this.year);
            cell.setAttribute("class","cell");
            
        }
        
    }
      /*  var c = document.getElementsByClassName("myCanvas");*/
        
}
var reservations = JSON.parse(localStorage.getItem("Reservations"));
var calendars = [];
var calendarNavs = [];
var today = new Date();
var currentCalendar = new Calendar(today.getDate(),today.getMonth(),today.getFullYear());
calendars.push(currentCalendar);
for (var i = 0; i < reservations.length; i++){
    today.setDate(today.getDate() + 1);
    var cal = new Calendar(today.getDate(),today.getMonth(),today.getFullYear());
    calendars.push(cal);
    cal.table.style.display = "none";
    cal.title.style.display = "none";
    cal.subtitle.style.display = "none";
    cal.dateDisplay.style.display = "none";
    
}

today = new Date();
var currentCalendarNav = new MainCalendarNav(today.getMonth());
calendarNavs.push(currentCalendarNav);
for (var j = 0; j < 12; j++){
    var calNav = new MainCalendarNav(today.getMonth() + j + 1);
    calendarNavs.push(calNav);
    calNav.cal.style.display = "none";
}

/*for (var w = 0; w < 2; w++){
    for(var x = 0; x < 10; x++){
        
var print = document.createElement("p");
    document.body.appendChild(print);
    print.innerHTML = calendars[w].id;
    }
}*/
/*function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      }*/