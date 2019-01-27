function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
function plural(n,str1,str2,str5){return n + ' ' + ((((n%10)==1)&&((n%100)!=11))?(str1):(((((n%10)>=2)&&((n%10)<=4))&&(((n%100)<10)||((n%100)>=20)))?(str2):(str5)))}

window.onload = function() {
   var age=getAge("03/01/1998");
   document.getElementById('age').innerHTML=plural(age, 'год', 'года', 'лет')+', Тюмень';
};
