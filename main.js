const obj =
{
    'kulcs1':'érték1',
    'kulcs2':'érték2'
};

function getAjax()
{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = load;
    let notRaw = JSON.stringify(obj);
    xhttp.open("GET","ajax.php?akarmi="+notRaw,true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}
function load()
{
    if(this.readyState == 4 && this.status == 200)
    {
        console.log(this.responseText);
    }
}
function postAjax()
{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = load;
    let notRaw = JSON.stringify(obj);
    xhttp.open("POST","ajax.php",true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("lehetjo="+notRaw);
}