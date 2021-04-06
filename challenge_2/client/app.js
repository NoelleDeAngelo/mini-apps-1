

 var createCSV= function (text){
    var obj= JSON.parse(text);
    console.log(obj);
    var storage= [];
    var result=[];
    var inner= function(obj) {
      for (key in obj){
      if(key === 'children'){
        storage.pop()
        result.push(storage.join(''))
        storage=[];
        if( obj[key].length > 0){
          for (var i=0; i< obj[key].length; i++){
          inner(obj[key][i], storage);
          }
        }
      }else{
      storage.push(obj[key])
      storage.push(',')
      }
    }

    }
    inner(obj)
    for (key in obj){
      storage.push(key);
      storage.push(',');
    }
    storage.pop()
    result.unshift(storage.join(''));
    result=result.join('\n')

    console.log(result)
  }


module.exports= {createCSV}



//key === children && obj[children].length > 0


// {
//   "firstName": "Joshie",
//   "lastName": "Wyattson",
//   "county": "San Mateo",
//   "city": "San Mateo",
//   "role": "Broker",
//   "sales": 1000000
// }