var kullanicilar = [
    {email:"haticekatranci@gmail.com",sifre:"12345"},
    {email:"hakkikatranci@hotmail.com",sifre:"12345"}
]

var tvitler = [
    {email:"haticekatranci@gmail.com",tvit:"Bugün hava çok güzel"},
    {email:"hakkikatranci@hotmail.com",tvit:"Bugün hava çok güzel 2"},
    {email:"haticekatranci@gmail.com",tvit:"Bugün hava çok sıcak"},
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tvitler)
    }else{
        console.log("Kullanıcı adı veya şifresi hatalı");
    }
}
giris(email,sifre)
