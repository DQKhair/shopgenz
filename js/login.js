// function Login(){
//     var name=document.getElementById('username').value;
//     alert('Xin chào '+name);
//     localStorage.setItem('user',name);
//     var password=document.getElementById('userpassword').value;
//     localStorage.setItem('password',password)
//     var user=localStorage.getItem('user');
//     document.getElementById('valueusername').innerHTML=user;
// }
function RemoveLocalstorage(){
    localStorage.removeItem('user');
    localStorage.removeItem('password');
}

function Login(){
    var nostrings ='';
    var name=document.getElementById('username').value;
    var password=document.getElementById('userpassword').value;
    if(name===nostrings  || password===nostrings){
        alert('Lỗi đăng nhập vui lòng kiểm tra lại tên đăng nhập và mật khẩu');
        RemoveLocalstorage();
    }else{
        alert('Xin chào '+name);
        localStorage.setItem('user',name);
        localStorage.setItem('password',password)
        var user=localStorage.getItem('user');
        document.getElementById('valueusername').innerHTML=user;
    }
}

    var user=localStorage.getItem('user');
    if(user===null){
        document.getElementById('valueusername').innerHTML='Đăng nhập';
        document.getElementById('logout').innerHTML='Đăng Ký';
        document.getElementById('header__img-user').style.display='none';
    }else{
        document.getElementById('valueusername').innerHTML=user;
        document.getElementById('logout').innerHTML='Đăng xuất';
        document.querySelector('header__notify-footer').style.display='none';
        document.getElementById('header__img-user').style.display='none';
    }

    function Output(){
        RemoveLocalstorage();
    }