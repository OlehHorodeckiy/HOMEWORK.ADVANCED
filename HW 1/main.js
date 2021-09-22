let meat = 15.678;
let fruit = 123.965;
let vegetable = 90.2345;


document.write("Максимальна ціна:"+Math.max(meat,fruit,vegetable)+";"+"<br>");
document.write("Мінімальна ціна :"+Math.min(meat,fruit,vegetable)+";"+"<br>");
let  total = (meat+fruit+vegetable);
document.write("Загальна сума товарів :"+total+";"+"<br>");
document.write("Округлення в меншу сторону :"+ Math.floor(total)+";"+"<br>");
document.write("Округлення до сотень :"+ Math.ceil((total) / 100*100)+";"+"<br>");
document.write("Булеве значення (округлена в меншу сторону) " + (!!Math.floor((total)%2))+";"+"<br>");
document.write("Cума решти, при оплаті всіх товарів , якщо клієнт платить 500 грн :"+ (500-total)+";"+"<br>");

document.write("Cереднє значення цін, округлене до другого знаку після коми :" + ((total/3)*100/100).toFixed(2) +";"+"<br>");


let random = Math.round(Math.random()*100);
 document.write("Випадкове число :"+Math.round(Math.random()*100)+";"+"<br>");
 document.write("Сума до Оплати зі Знижкою :"+((100-random)*total/100).toFixed(2) +";"+"<br>")
 let selfPrise = (total/2).toFixed(2);
 document.write("Самостійна ціна :"+ (total/2).toFixed(2) +";"+"<br>");
 document.write("Чистий Прибуток"+(selfPrise -(random*total/100)).toFixed(2) +";"+"<br>");