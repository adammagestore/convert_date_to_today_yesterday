/**
 * Install momentjs trước
 */
import * as moment from 'moment';

/**
     * This function to fix the problem of display date time as NaN on ios devices
     * @param date
     * @return {any}
     */
    convertDateForIos(date) {
        let arr = date.split(/[- :]/);
        date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    }

    /**
     * convert date time to text (today, yesterday, ...)
     * @param value
     * @return {any}
     */
    formatDate(value, formatDate, formatTime) {
        let order_date = this.convertDateForIos(value);

        let timeDiff = Date.now() - order_date.getTime();

        let now = new Date();
        let days = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

        let str: any;
        switch (days) {
            case 1:
                if(now.getDate() == order_date.getDate()){
                    str = this.translate.instant("Today");
                } else {
                    str = this.translate.instant("Yesterday");
                }
                break;
            case 2:
                if(now.getDate() == order_date.getDate()+1){
                    str = this.translate.instant("Yesterday");
                } else {
                    str = this.translate.instant("2 days ago");
                }
                break;
            case 3:
                if(now.getDate() == order_date.getDate()+2){
                    str = this.translate.instant("2 days ago");
                } else {
                    str = this.translate.instant("3 days ago");
                }
                break;
            case 4:
                if(now.getDate() == order_date.getDate()+3){
                    str = this.translate.instant("3 days ago");
                } else {
                    str = this.translate.instant("4 days ago");
                }
                break;
            case 5:
                if(now.getDate() == order_date.getDate()+4){
                    str = this.translate.instant("4 days ago");
                } else {
                    str = this.translate.instant("5 days ago");
                }
                break;
            case 6:
                if(now.getDate() == order_date.getDate()+5){
                    str = this.translate.instant("5 days ago");
                } else {
                    str = this.translate.instant("6 days ago");
                }
                break;
            case 7:
                if(now.getDate() == order_date.getDate()+6){
                    str = this.translate.instant("6 days ago");
                } else {
                    str = this.translate.instant("7 days ago");
                }
                break;
            case 8:
                if(now.getDate() == order_date.getDate()+7){
                    str = this.translate.instant("7 days ago");
                } else {
                    str = this.formatDateToString(order_date, formatDate, formatTime);
                }
                break;
            default:
                str = this.formatDateToString(order_date, formatDate, formatTime);
                break;
        }
        return str;
    }

    formatDateToString(value, formatDate, formatTime=''){
        let format = this.convertToMomentFormat(formatDate, formatTime);
        if(value){
            return moment(value).format(format);
        }
    }

    convertToMomentFormat(formatDate="%m/%d/%Y", formatTime=''){
        let format: string;
        if(formatDate){
            formatDate = formatDate.replace("%a", "ddd");
            formatDate = formatDate.replace("%b", "MMM");
            formatDate = formatDate.replace("%d", "DD");
            formatDate = formatDate.replace("%y", "YY");
            formatDate = formatDate.replace("%m", "MM");
            formatDate = formatDate.replace("%A", "dddd");
            formatDate = formatDate.replace("%B", "MMMM");
            formatDate = formatDate.replace("%j", "DDDD");
            formatDate = formatDate.replace("%w", "e");
            formatDate = formatDate.replace("%Y", "YYYY");
        }
        format = formatDate;
        if(formatTime){
            formatTime = formatTime.replace("%H", "HH");
            formatTime = formatTime.replace("%M", "mm");
            formatTime = formatTime.replace("%S", "ss");
            formatTime = formatTime.replace("%I", "hh");
            formatTime = formatTime.replace("%p", "A");
            format = format + " " + formatTime;
        }
        return format;
    }