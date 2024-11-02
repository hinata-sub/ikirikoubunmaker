function btnClick() {
x = document.getElementById("value").value;
a='なんかクラスの'+x;
y = document.getElementById("value1").value;
a=a+'の'+y+'が'
    document.getElementById("output").textContent=x;
z = document.getElementById("value2").value;
a=a+z+'とか言ってきたから、うちと'
v = document.getElementById("value3").value;
a=a+v+'の友達でそいつのことフルボッコにしたことかな☆))) まぁ、俺が覚醒したら'+x+y+'なんて全滅だからみんな覚悟しといてね？)))))圧 ちなみにうちは'
w = document.getElementById("value4").value;
a=a+w+'だからお前らより'
i = document.getElementById("value5").value;
a=a+i+'からね♪'
    document.getElementById("output").textContent=a;
navigator.clipboard.writeText(a);
    b="https://x.com/intent/tweet?text="+a

};
