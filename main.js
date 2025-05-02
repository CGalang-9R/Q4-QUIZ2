function avg(){
	var subj1 = Number(document.getElementById('science').value);
	var subj2 = Number(document.getElementById('math').value);
	var subj3 = Number(document.getElementById('english').value);
	var divi = 3;
	var subjA = (subj1+subj2+subj3) / divi;
	var subjAvg = subjA.toFixed(2);

	if(subjAvg>=94 && subjAvg<=100){
		window.alert('Your grade is ' + subjAvg + '. Excellent, amazing job!');
	}

	else if(subjAvg>=87 && subjAvg<=93.99){
		window.alert('Your grade is ' + subjAvg + '. Above Satisfactory, well done!');
	}

	else if(subjAvg>=80 && subjAvg<=86.99){
		window.alert('Your grade is ' + subjAvg + '. Satisfactory, not bad!');
	}

	else if(subjAvg>=75 && subjAvg<=79.99){
		window.alert('Your grade is ' + subjAvg + '. Needs Improvement, you can do better!');
	}

	else {
		window.alert('Your grade is ' + subjAvg + '. Poor, do not give up!');
	}


}