const days = ['mon','tue','wed'];

for(let day of days){
   let upper_value = day.charAt(0).toUpperCase() + day.substring(1);
    console.log(upper_value);
}