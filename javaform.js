
function validasi(){
    var nama1=document.getElementById('nama').value;
    if(nama1 == ""){
        document.getElementById('nama').style.borderColor = "red";
        return false;
    }else{
        document.getElementById('nama').style.borderColor = "green";
    }
}
