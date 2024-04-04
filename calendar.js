function coloriurDia(){
    let day  = document.getElementById("day").value;
    let color  = document.getElementById("color").value;
    let calendar =document.getElementById("calendar");
    let td = calendar.getElementsByTagName("td")[(parseInt(day))];

    td.style.backgroundColor = color;
}
