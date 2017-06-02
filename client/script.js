$(document).ready(function(){
    $.getJSON("http://localhost:3000/strains").then(function(data){
        console.log(data);
        for(var i=0; i < data.length; i++){
            var names = `<option>${data[i].name}</option>`;
            $("#strain-names").append(names)
        }
        $("#strain-names").change(function(){
            var val = $("#strain-names").val();
            console.log(val)
            if(val == "Blue Dream"){
                console.log(data[0].flowering_time)
                $("#flower-time").html(`<h2>FLOWERING TIME:</h2><h4>${data[0].flowering_time}</h4>`)
                $("#yield").html(`<h2>YIELD:<h4>${data[0].yield}</h4>`)
                $("#grow-difficulty").html(`<h2>GROW DIFFICULTY:<h4>${data[0].difficulty}</h4>`)
                $("#climate").html(`<h2>CLIMATE:<h4>${data[0].climate}</h4>`)
            }else if (val == "OG Kush"){
                $("#flower-time").html(`<h2>FLOWERING TIME:</h2><h4>${data[1].flowering_time}</h4>`)
                $("#yield").html(`<h2>YIELD:<h4>${data[1].yield}</h4>`)
                $("#grow-difficulty").html(`<h2>GROW DIFFICULTY:<h4>${data[1].difficulty}</h4>`)
                $("#climate").html(`<h2>CLIMATE:<h4>${data[1].climate}</h4>`)   
            } else if (val == "Sour Diesel"){
                $("#flower-time").html(`<h2>FLOWERING TIME:</h2><h4>${data[2].flowering_time}</h4>`)
                $("#yield").html(`<h2>YIELD:<h4>${data[2].yield}</h4>`)
                $("#grow-difficulty").html(`<h2>GROW DIFFICULTY:<h4>${data[2].difficulty}</h4>`)
                $("#climate").html(`<h2>CLIMATE:<h4>${data[2].climate}</h4>`)   
            }
        })
    })
})