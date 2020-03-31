
var request = new XMLHttpRequest()

request.open('GET', 'https://coronavirus-19-api.herokuapp.com/all', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
      console.log(data) //cases | deaths | recovered
                        let a1 = document.getElementById("p1");
                        let a2 = document.getElementById("p2");
                        let a3 = document.getElementById("p3");
                        var p1 = document.createElement("p");
                        var p2 = document.createElement("p");
                        var p3 = document.createElement("p");
                        var text1 = `Total Cases: ${data.cases}`;
                        var text2 = `Total Deaths: ${data.deaths}`;
                        var text3 = `Total Recovered: ${data.recovered}`;

                        a1.append(text1);
                        a2.append(text2);
                        a3.append(text3);

  } else {
    console.log('error')
  }
}

request.send()

