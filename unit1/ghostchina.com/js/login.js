var user_email='admit@163.com';
var user_password='123456';

//取本地数据进行校验
function checkLogin() {
    //获取文本框数据
    var email=$('#txtEmail').val();
    var password=$('#txtPassword').val();
    if(email==user_email&&password==user_password){
        sessionStorage.setItem('userId',email);
        return true;
    }else {
        //alert('用户名或密码错误');
        $('.div-alert').fadeIn(1000).fadeOut(4000);
        return false;
    }
    //console.log(email);
}