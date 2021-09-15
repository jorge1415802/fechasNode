const moment = require('moment');

const date = (dateValue) => {
    const date = new Date(dateValue);
    if(moment(date).isValid()) {
        console.log(moment(dateValue).fromNow());
    }
    else {
        console.log('the date has not a valid format')  
    }
}

date('2021-08-13 18:50:00');

const date2 = (dateValue) => {
    const dateNow = new Date();
    const date = new Date(dateValue);
    if(moment(date).isValid()) {
        if(date > dateNow) {
            console.log('The date cannot be greater than the actual date')
        }
        else {
            const time = dateNow - date;
            const seconds = time / 1000
            if(seconds < 86400) {
                if(seconds < 60) console.log('1 minite ago')
                else {
                    const dif = Math.round(seconds / 60);
                    console.log(`${dif} minutes ago`);
                }
            } 
            if(seconds >= 86400 && seconds < 2592000) {
                if(seconds == 86400) console.log('1 day ago');
                else {
                    const dif = Math.round(seconds / 86400);
                    console.log(`${dif} days ago`);
                }
            }
            if(seconds >= 2592000 && seconds < 31104000) {
                if(seconds == 2592000) console.log('1 month ago');
                else {
                    const dif = Math.round(seconds / 2592000);
                    console.log(`${dif} months ago`);
                }
            }
            if(seconds >= 31104000) {
                if(seconds == 31104000) console.log('1 year ago');
                else {
                    const dif = Math.round(seconds / 31104000);
                    console.log(`${dif} years ago`);
                }
            }
        }
    }
    else {
        console.log('the date has not a valid format')
    }
}

// date2('kahjsgdkajhsdg')
date2('2018-10-14 10:25:00');
