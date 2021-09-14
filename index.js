const moment = require('moment');

const date = (dateValue) => {
    const d = new Date();
    if(moment(dateValue).isValid()) {
        console.log(moment(dateValue).fromNow());
    }
}

date('2021-09-14 18:50:00');