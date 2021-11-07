export function formatTime(timestamp) {
   const date = new Date(timestamp * 1000);
   var hours = date.getHours();
   var minutes = "0" + date.getMinutes();
   var ampm = hours >= 12 ? 'pm' : 'am';
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   minutes = minutes < 10 ? '0'+minutes : minutes;
   var formattedTime = hours + ':' + minutes.substr(-2) + ' ' + ampm;
   return formattedTime
 }

 export function groupBy(objectArray, property) {
   return objectArray.reduce(function (acc, obj) {
     let key = obj[property]
     if (!acc[key]) {
       acc[key] = []
     }
     acc[key].push(obj)
     return acc
   }, {})
 }