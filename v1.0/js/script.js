
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
        $.ajax({
            url: 'https://coronavirus-19-api.herokuapp.com/countries',
            method: 'GET',
            success: (res) => {
                let found = res.find(countries => countries.country.toUpperCase() == input.toUpperCase());
                if(found){
                    if(hasfound == true){}else{
                        hasfound = true;
                        document.getElementById("tracker").style.display = "block";
                        let found_div = document.getElementById("found");
                        found_div.style.display = "inline-block";
                        let paragraph1 = document.getElementById("paragraph1");
                        let paragraph2 = document.getElementById("paragraph2");
                        let paragraph3 = document.getElementById("paragraph3");
                        var text1 = `Cases: <b>${found.cases}</b>`;
                        var text2 = `Deaths: <b>${found.deaths}</b>`;
                        var text3 = `Recovered: <b>${found.recovered}</b>`;
                        paragraph1.innerHTML = text1;
                        paragraph2.innerHTML = text2;
                        paragraph3.innerHTML = text3;
                        paragraph1.style.float = "left";
                        paragraph2.style.float = "left";
                        paragraph3.style.float = "left";
                        found.append(paragraph1);
                        found.append(paragraph2);
                        found.append(paragraph3);
                        
                    }
                }else{
                    swal("Opss!", "Invalid Country, Try again!", "error");
                }
            }
        });

    }
});

