var scale = 0;
var base = 2;
var blacks = [2, 4, 7, 9, 11];
var whites = [1, 3, 5, 6, 8, 10, 12];
var h = "";

$('input[type="radio"].flat-red').iCheck({
    radioClass   : 'iradio_flat-blue'
});
scale = $('input[type="radio"].flat-red:checked').val();
$('input[type="radio"].flat-red').on('ifChecked', function(event){
	scale=this.value;
});

var mousedownShadow1 = '5px 5px 65px red inset';
var mousedownShadow2 = '5px 5px 65px orange inset';
var mousedownShadow3 = '5px 5px 65px yellow inset';
var mousedownShadow4 = '5px 5px 65px green inset';
var mousedownShadow5 = '5px 5px 65px aqua inset';
var mousedownShadow6 = '5px 5px 65px blue inset';
var mousedownShadow7 = '5px 5px 65px purple inset';
var mousedownBlackShadow = '3px 3px 8px white inset';
var mouseupShadow = '8px 8px 5px #333';
h="";
for(var i=1;i<=12;i++){
	if(i<=7){
		h+='<div id="btn_'+i+'" class="key_white"></div>';
	}else{
		h+='<div id="btn_'+i+'" class="key_black"></div>';
	}
	
}
document.getElementById('main').innerHTML = h;

var btn_1=document.getElementById('btn_1');
var btn_2=document.getElementById('btn_2');
var btn_3=document.getElementById('btn_3');
var btn_4=document.getElementById('btn_4');
var btn_5=document.getElementById('btn_5');
var btn_6=document.getElementById('btn_6');
var btn_7=document.getElementById('btn_7');
var btn_8=document.getElementById('btn_8');
var btn_9=document.getElementById('btn_9');
var btn_10=document.getElementById('btn_10');
var btn_11=document.getElementById('btn_11');
var btn_12=document.getElementById('btn_12');

btn_1.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow1;playAudio(scale*12+base+whites[0]);});
btn_2.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow2;playAudio(scale*12+base+whites[1]);});
btn_3.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow3;playAudio(scale*12+base+whites[2]);});
btn_4.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow4;playAudio(scale*12+base+whites[3]);});
btn_5.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow5;playAudio(scale*12+base+whites[4]);});
btn_6.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow6;playAudio(scale*12+base+whites[5]);});
btn_7.addEventListener('mousedown',function(){this.style.boxShadow=mousedownShadow7;playAudio(scale*12+base+whites[6]);});
btn_8.addEventListener('mousedown',function(){this.style.boxShadow=mousedownBlackShadow;playAudio(scale*12+base+blacks[0]);});
btn_9.addEventListener('mousedown',function(){this.style.boxShadow=mousedownBlackShadow;playAudio(scale*12+base+blacks[1]);});
btn_10.addEventListener('mousedown',function(){this.style.boxShadow=mousedownBlackShadow;playAudio(scale*12+base+blacks[2]);});
btn_11.addEventListener('mousedown',function(){this.style.boxShadow=mousedownBlackShadow;playAudio(scale*12+base+blacks[3]);});
btn_12.addEventListener('mousedown',function(){this.style.boxShadow=mousedownBlackShadow;playAudio(scale*12+base+blacks[4]);});

btn_1.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_2.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_3.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_4.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_5.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_6.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_7.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_8.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_9.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_10.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_11.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});
btn_12.addEventListener('mouseup',function(){this.style.boxShadow=mouseupShadow;});

//keydown
window.onkeydown=function(e){
    if(e.key=='q'){
        btn_1.style.boxShadow=mousedownShadow1;
        playAudio(safeScale(scale,-1)*12+base+whites[0]);
    }else if(e.key=='w') {
    	btn_2.style.boxShadow=mousedownShadow2;
        playAudio(safeScale(scale,-1)*12+base+whites[1]);
    }else if(e.key=='e'){
    	btn_3.style.boxShadow=mousedownShadow3;
        playAudio(safeScale(scale,-1)*12+base+whites[2]);
    }else if(e.key=='r'){
    	btn_4.style.boxShadow=mousedownShadow4;
        playAudio(safeScale(scale,-1)*12+base+whites[3]);
    }else if(e.key=='t'){
    	btn_5.style.boxShadow=mousedownShadow5;
        playAudio(safeScale(scale,-1)*12+base+whites[4]);
    }else if(e.key=='y'){
    	btn_6.style.boxShadow=mousedownShadow6;
        playAudio(safeScale(scale,-1)*12+base+whites[5]);
    }else if(e.key=='u'){
    	btn_7.style.boxShadow=mousedownShadow7;
        playAudio(safeScale(scale,-1)*12+base+whites[6]);
    }else if(e.key=='a'){
        btn_1.style.boxShadow=mousedownShadow1;
        playAudio(safeScale(scale,0)*12+base+whites[0]);
    }else if(e.key=='s') {
    	btn_2.style.boxShadow=mousedownShadow2;
        playAudio(safeScale(scale,0)*12+base+whites[1]);
    }else if(e.key=='d'){
    	btn_3.style.boxShadow=mousedownShadow3;
        playAudio(safeScale(scale,0)*12+base+whites[2]);
    }else if(e.key=='f'){
    	btn_4.style.boxShadow=mousedownShadow4;
        playAudio(safeScale(scale,0)*12+base+whites[3]);
    }else if(e.key=='g'){
    	btn_5.style.boxShadow=mousedownShadow5;
        playAudio(safeScale(scale,0)*12+base+whites[4]);
    }else if(e.key=='h'){
    	btn_6.style.boxShadow=mousedownShadow6;
        playAudio(safeScale(scale,0)*12+base+whites[5]);
    }else if(e.key=='j'){
    	btn_7.style.boxShadow=mousedownShadow7;
        playAudio(safeScale(scale,0)*12+base+whites[6]);
    }else if(e.key=='z'){
        btn_1.style.boxShadow=mousedownShadow1;
        playAudio(safeScale(scale,1)*12+base+whites[0]);
    }else if(e.key=='x') {
    	btn_2.style.boxShadow=mousedownShadow2;
        playAudio(safeScale(scale,1)*12+base+whites[1]);
    }else if(e.key=='c'){
    	btn_3.style.boxShadow=mousedownShadow3;
        playAudio(safeScale(scale,1)*12+base+whites[2]);
    }else if(e.key=='v'){
    	btn_4.style.boxShadow=mousedownShadow4;
        playAudio(safeScale(scale,1)*12+base+whites[3]);
    }else if(e.key=='b'){
    	btn_5.style.boxShadow=mousedownShadow5;
        playAudio(safeScale(scale,1)*12+base+whites[4]);
    }else if(e.key=='n'){
    	btn_6.style.boxShadow=mousedownShadow6;
        playAudio(safeScale(scale,1)*12+base+whites[5]);
    }else if(e.key=='m'){
    	btn_7.style.boxShadow=mousedownShadow7;
        playAudio(safeScale(scale,1)*12+base+whites[6]);
    }else if(e.key=='i'){
    	btn_8.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,-1)*12+base+blacks[0]);
    }else if(e.key=='o'){
    	btn_9.style.boxShadow=mousedownBlackShadow;
         playAudio(safeScale(scale,-1)*12+base+blacks[1]);
    }else if(e.key=='p'){
    	btn_10.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,-1)*12+base+blacks[2]);
    }else if(e.key=='['){
    	btn_11.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,-1)*12+base+blacks[3]);
    }else if(e.key==']'){
        btn_12.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,-1)*12+base+blacks[4]);
    }else if(e.key==1){
    	btn_8.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,0)*12+base+blacks[0]);
    }else if(e.key==2){
    	btn_9.style.boxShadow=mousedownBlackShadow;
         playAudio(safeScale(scale,0)*12+base+blacks[1]);
    }else if(e.key==3){
    	btn_10.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,0)*12+base+blacks[2]);
    }else if(e.key==4){
    	btn_11.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,0)*12+base+blacks[3]);
    }else if(e.key==5){
        btn_12.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,0)*12+base+blacks[4]);
    }else if(e.key==6){
    	btn_8.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,1)*12+base+blacks[0]);
    }else if(e.key==7){
    	btn_9.style.boxShadow=mousedownBlackShadow;
         playAudio(safeScale(scale,1)*12+base+blacks[1]);
    }else if(e.key==8){
    	btn_10.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,1)*12+base+blacks[2]);
    }else if(e.key==9){
    	btn_11.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,1)*12+base+blacks[3]);
    }else if(e.key==0){
        btn_12.style.boxShadow=mousedownBlackShadow;
        playAudio(safeScale(scale,1)*12+base+blacks[4]);
    }else if(e.key=='k'){
        btn_1.style.boxShadow=mousedownShadow1;
        playAudio(0);
    }else if(e.key=='l'){
        btn_2.style.boxShadow=mousedownShadow2;
        playAudio(2);
    }else if(e.key==';'){
        btn_8.style.boxShadow=mousedownBlackShadow;
        playAudio(1);
    }else if(e.key=="'"){
        btn_7.style.boxShadow=mousedownShadow7;
        playAudio(87);
    }
}
//keyup
window.onkeyup=function(e){
    btn_1.style.boxShadow=mouseupShadow;
    btn_2.style.boxShadow=mouseupShadow;
    btn_3.style.boxShadow=mouseupShadow;
    btn_4.style.boxShadow=mouseupShadow;
    btn_5.style.boxShadow=mouseupShadow;
    btn_6.style.boxShadow=mouseupShadow;
    btn_7.style.boxShadow=mouseupShadow;
    btn_8.style.boxShadow=mouseupShadow;
    btn_9.style.boxShadow=mouseupShadow;
    btn_10.style.boxShadow=mouseupShadow;
    btn_11.style.boxShadow=mouseupShadow;
    btn_12.style.boxShadow=mouseupShadow;
}

function safeScale(safeValue,num){
	var result = Number(safeValue) + Number(num);
	if(result<0){
		return 0;
	}else if(result>6){
		return 6;
	}else{
		return result;
	}
}

function playAudio(num){
	var audio = new Audio('data:audio/mpeg;base64,' + notes[num]);
	audio.play();
}
/* 
 * 1.0 正常速度
 * 0.5 半速（更慢）
 * 2.0 倍速（更快）
 * -1.0 向后，正常速度
 * -0.5 向后，半速
 * */
function playAudioRate(num, rate){
	var audio = new Audio('data:audio/mpeg;base64,' + notes[num]);
	audio.playbackRate = rate;
	audio.play();
}