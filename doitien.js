
    function doitien(){
    let sotien = document.getElementById("sotiennhap").value;
    let chontiendoi = document.getElementById("chontien").value;
    let chontiendoi2 = document.getElementById("chontien2").value;
    xomui = parseInt(sotien);
    if (chontiendoi==1 && chontiendoi2==4){
    xomui = xomui*0.000044;
    alert(xomui+"usd")
}
    else if (chontiendoi==2 && chontiendoi2==3){
    xomui  = xomui*23000;
    alert(xomui+"vnd")
}
    else
    alert(xomui)

}