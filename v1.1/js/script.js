var request = new XMLHttpRequest()

$(document).keypress(function(e){
    if (e.which == 13){
        $("#search").click();
    }
});
document.getElementById("search").addEventListener("click", () => {
    
    let hasfound = false;
    if(!document.getElementById("country").value || document.getElementById("country").value == null || document.getElementById("country").value == ""){
        swal("Opss!", "Type a country to search.", "error");
    }else{
        let input = document.getElementById("country").value;

                 /* Make a request to coronavirus api */
                    $.ajax({
                    url: 'https://coronavirus-19-api.herokuapp.com/countries',
                    method: 'GET',
                    success: (res) => {
                       let found = res.find(countries => countries.country.toUpperCase() == input.toUpperCase());
                       if(found){
                        if(hasfound == true){}else{
                          /* Make a request to restcountries and get alpha2code of the specific country */
                        request.open('GET', 'https://restcountries.eu/rest/v2/name/'+input+'?fullText=true', true)
                        request.onload = function() {
                        var data = JSON.parse(this.response)
                        if (request.status >= 200 && request.status < 400) {
                            /* if the country exists then it will pick the flag with another api */
                            console.log(data)
                            let getresultfrom = document.getElementById("getresultfrom");
                            var resulttext1 = `Results from ${data[0].name} <img src='${data[0].flag}' style='width:20px;height:15px;'>`;
                            getresultfrom.innerHTML = resulttext1;
                            let population = document.getElementById("population");
                            var resulttext2 = `Population: <b>${data[0].population}</b>`;
                            population.innerHTML = resulttext2;
                            population.style.float = "left";

                        } else {
                            console.log('error')
                        }
                        }
                        
                        request.send()
                        hasfound = true;
                        document.getElementById("tracker").style.display = "block";
                        let found_div = document.getElementById("found");
                        found_div.style.display = "inline-block";
                        let paragraph1 = document.getElementById("paragraph1");
                        let paragraph2 = document.getElementById("paragraph2");
                        let paragraph3 = document.getElementById("paragraph3");
                        let paragraph4 = document.getElementById("paragraph4");
                        let paragraph5 = document.getElementById("paragraph5");
                        let paragraph6 = document.getElementById("paragraph6");
                        var text1 = `Cases: <b>${found.cases}</b>`;
                        var text2 = `Deaths: <b>${found.deaths}</b>`;
                        var text3 = `Recovered: <b>${found.recovered}</b>`;
                        var text4 = `Daily Cases: <b>${found.todayCases}</b>`;
                        var text5 = `Daily Deaths: <b>${found.todayDeaths}</b>`;
                        var text6 = `First Case: <b>${found.firstCase}</b>`;
                        paragraph1.innerHTML = text1;
                        paragraph2.innerHTML = text2;
                        paragraph3.innerHTML = text3;
                        paragraph4.innerHTML = text4;
                        paragraph5.innerHTML = text5;
                        paragraph6.innerHTML = text6;
                        paragraph1.style.float = "left";
                        paragraph2.style.float = "left";
                        paragraph3.style.float = "left";
                        paragraph4.style.float = "left";
                        paragraph5.style.float = "left";
                        paragraph6.style.float = "left";
                        found.append(paragraph1);
                        found.append(paragraph2);
                        found.append(paragraph3);
                        found.append(paragraph4);
                        found.append(paragraph5);
                        found.append(paragraph6);
                        
                    }
                }else{
                    swal("Opss!", "Invalid Country, Try again!", "error");
                }
            }
        });

    }
});

