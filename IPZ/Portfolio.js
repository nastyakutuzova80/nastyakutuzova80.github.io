
function clicked (buttonName) //при нажатии на кнопку

{ 
	var day = buttonName;
	
		if (day == 'Student')
		{
			document.getElementById('info').innerHTML = document.getElementById('Student').innerHTML;
		}
		else 
			if (day == 'Intelligence')
				{
					document.getElementById('info').innerHTML = document.getElementById('Intelligence').innerHTML;
				}
					else 
						{
								document.getElementById('info').innerHTML = document.getElementById('project_s').innerHTML;
						}
}