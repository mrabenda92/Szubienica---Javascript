let passwords = new Array(4);
passwords[0] = "Biednemu zawsze wiatr w oczy";
passwords[1] = "Co za dużo to niezdrowo";
passwords[2] = "Bez pracy nie ma kołaczy";
passwords[3] = "Być pracowitym jak pszczoła";

const selected_password = Math.floor(Math.random() * 4);
let password = passwords[selected_password];
password = password.toUpperCase();

const length = password.length;
let failure_counter = 0;

let password1 = "";

for (i=0; i<length; i++)
{
	if (password.charAt(i)==" ") password1 = password1 + " ";
	else password1 = password1 + "-";
}

write_password = () => {
	document.getElementById("game_area").innerHTML = password1;
}

window.onload = start;

const letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start()
{
	let div_text ="";
	
	for (i=0; i<=34; i++)
	{
		let element = "lett" + i;
		div_text = div_text + '<div class="letter" onclick="check_word('+i+')" id="'+element+'">'+letters[i]+'</div>';
		if ((i+1) % 7 ==0) div_text = div_text + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = div_text;
	
	write_password();
}

String.prototype.write_letter = function(place, word)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0, place) + word + this.substr(place+1);
}


check_word = (nr) =>{
	
	let correct_option = false;
	
	for(i=0; i<length; i++)
	{
		if (password.charAt(i) == letters[nr]) 
		{
			password1 = password1.write_letter(i,letters[nr]);
			correct_option = true;
		}
	}
	
	if(correct_option == true) {
		let element = "lett" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		write_password();
	}

	else {
		let element = "lett" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//failure
		failure_counter++;
		let picture = "img/s"+ failure_counter + ".jpg";
		document.getElementById("gibbet").innerHTML = '<img src="'+picture+'" alt="" />';
	}
	
	//win
	if (password == password1)
	document.getElementById("alphabet").innerHTML  = "Brawo! Poprawne hasło to: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//lose
	if (failure_counter>=9)
	document.getElementById("alphabet").innerHTML  = "Przegrana! Prawidłowe hasło to: "+password+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
