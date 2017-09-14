var dateFormatter = {
    //Arrays to call for English months and days of the week
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    daysOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    //Return date in format of 4:20 PM
    getShortTime: function (date) {
        var hour = date.getHours();
        var minutes = date.getMinutes();
        minutes < 10 ? (minutes = "0" + minutes) : "";
        // If it's before noon, set to AM. If it's afternoon, subtract 12 from hours and add PM.
        if (hour < 12) {
            return hour + ":" + minutes + " AM";
        } else {
            return hour - 12 + ":" + minutes + " PM";
        }
    },
    //Return date as 4:20:00 PM. Same as above plus seconds.
    getLongTime: function (date) {
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        minutes < 10 ? (minutes = "0" + minutes) : "";
        seconds < 10 ? (seconds = "0" + seconds) : "";
        if (hour < 12) {
            return hour + ":" + minutes + ":" + seconds + " AM";
        } else {
            return hour - 12 + ":" + minutes + ":" + seconds + " PM";
        }
    },
    //Return as 1/20/2017
    getShortDate: function (date) {
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var year = date.getFullYear();
        return month + "/" + day + "/" + year;
    },
    //Return as January 20, 2017
    getLongDate: function (date) {
        var month = this.months[date.getMonth()];
        var day = date.getDate();
        var year = date.getFullYear();
        return month + " " + day + ", " + year;
    },
    //Return as short date and time
    getShortDateTime: function (date) {
        return this.getShortDate(date) + " " + this.getShortTime(date);
    },

    //Return long date and time
    getLongDateTime: function (date) {
        return this.getLongDate(date) + " " + this.getLongTime(date);
    },
    //Return extended date and time, with day of the week
    getExtendedDateTime: function (date) {
        var weekDay = this.daysOfWeek[date.getDay()];
        return (
            weekDay + ", " + this.getLongDate(date) + ", " + this.getLongTime(date)
        );
    }
};