function inputsMask() {
    var dateInput = document.getElementById("dateInput");
    var dateMaskOptions = {
        mask: Date
    }
    IMask(dateInput, dateMaskOptions);

    var plateInput = document.getElementById("plateInput");
    var plateMaskOptions = {
        mask: 'aaa-0000'
    }
    IMask(plateInput, plateMaskOptions);
};

function availableCheck(){

    //INPUTS OBJ VARIABLE
    var carCheck = {
        "plate" : document.getElementById("plateInput").value.split('-'),
        "date" : document.getElementById("dateInput").value.split('.'),
        "time" : document.getElementById("timeInput").value.split(":")
    }

    /* CORRECT INPUTS VALIDATION */
    if(carCheck.plate.length < 2){
        alert("PLATE FIELD ERROR")
    } else if(carCheck.plate[1].toString().length < 3){
        alert("PLATE FIELD WITH BAD FORMAT")
    } else if (carCheck.date.length < 3){
        alert("DATE FIELD ERROR")
    } else if(carCheck.time.length < 2){
        alert("TIME FIELD ERROR")
    } else {

        var lastDigit = carCheck.plate[1] % 10;
        var stringDate = carCheck.date[2] +','+ carCheck.date[1] +','+ carCheck.date[0];
        var date = new Date(stringDate);
        var day = date.getDay();

        /* Conditions
            Time: 7:00 - 19:00
            Monday -> 0 - 1 - 2 - 3
            Tuesday -> 2 - 3 - 4 - 5
            Wednesday -> 4 -5 -6- 7
            Thursday -> 6 - 7 - 8 - 9
            Friday -> 0 - 1 - 8 - 9
        */

        if((day == 1) && (lastDigit == 0 || lastDigit == 1 || lastDigit == 2 || lastDigit == 3) && ((parseInt(carCheck.time[0]) >= 7 && (parseInt(carCheck.time[0]) <= 9 && parseInt(carCheck.time[1]) <= 30)) || (parseInt(carCheck.time[0]) >= 16 && (parseInt(carCheck.time[0]) <= 19 && parseInt(carCheck.time[1]) <= 30)))){
            alert("You can not drive!")
        } else if ((day == 2) && (lastDigit == 2 || lastDigit == 3 || lastDigit == 4 || lastDigit == 5) && ((parseInt(carCheck.time[0]) >= 7 && (parseInt(carCheck.time[0]) <= 9 && parseInt(carCheck.time[1]) <= 30)) || (parseInt(carCheck.time[0]) >= 16 && (parseInt(carCheck.time[0]) <= 19 && parseInt(carCheck.time[1]) <= 30)))){
            alert("You can not drive!")
        } else if ((day == 3) && (lastDigit == 4 || lastDigit == 5 || lastDigit == 6 || lastDigit == 7) && ((parseInt(carCheck.time[0]) >= 7 && (parseInt(carCheck.time[0]) <= 9 && parseInt(carCheck.time[1]) <= 30)) || (parseInt(carCheck.time[0]) >= 16 && (parseInt(carCheck.time[0]) <= 19 && parseInt(carCheck.time[1]) <= 30)))){
            alert("You can not drive!")
        } else if ((day == 4) && (lastDigit == 6 || lastDigit == 7 || lastDigit == 8 || lastDigit == 9) && ((parseInt(carCheck.time[0]) >= 7 && (parseInt(carCheck.time[0]) <= 9 && parseInt(carCheck.time[1]) <= 30)) || (parseInt(carCheck.time[0]) >= 16 && (parseInt(carCheck.time[0]) <= 19 && parseInt(carCheck.time[1]) <= 30)))){
            alert("You can not drive!")
        } else if ((day == 5) && (lastDigit == 0 || lastDigit == 1 || lastDigit == 8 || lastDigit == 9) && ((parseInt(carCheck.time[0]) >= 7 && (parseInt(carCheck.time[0]) <= 9 && parseInt(carCheck.time[1]) <= 30)) || (parseInt(carCheck.time[0]) >= 16 && (parseInt(carCheck.time[0]) <= 19 && parseInt(carCheck.time[1]) <= 30)))){
            alert("You can not drive!")
        } else {
            alert("Congratulations! You can drive!")
        }
    }

}

function clearFields(){
    document.getElementById("plateInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("timeInput").value = "";
}
