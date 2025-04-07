img= ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
firstImg="";
firstElement="";
count=0;
t= 60;
winCounter= 8;

function randomImg(){
	for(i=0; i<img.length; i++){
		r= Math.floor(Math.random()*15);
		temp = img[i];
		img[i] = img[r];
		img[r] = temp;
	}
	console.log(img);
}
randomImg();

function changeImg(index, element){
	element.setAttribute('src', ""+img[index]);

		if(count == 0) {
			count++;
			firstImg = img[index];
			firstElement = element;
		}
		else {
			setTimeout(function(){
				if(firstImg == img[index] && firstElement != element){
					firstElement.style.visibility = "hidden";
					element.style.visibility = "hidden";
					winCounter--;
					if(winCounter == 0){
						alert("Congratulations! "+player+" won in "+t+ "seconds");
						location.reload();
					}
					count=0;
				}
				else{
				firstElement.setAttribute('src', "back.jpg");
				element.setAttribute('src', "back.jpg");
				count=0;
				}
			}, 1000);
		}
	}
function startGame() {
	count=0;
	t=60;
	winCounter =8;
	document.getElementsByTagName("button")[0].disabled = true;
	player = prompt("Player's name:");
	document.getElementById("player").innerHTML= player;
	myVar= setInterval(myTimer, 1000);
}
function myTimer(){
		if (t==0) {
			clearInterval(myVar);
			alert("You lost!");
			document.getElementsByTagName("button")[0].disabled = false;
		}
		else {
			t--;
			document.getElementById("timer").innerHTML = "Time: " +t;
		}
	
}
