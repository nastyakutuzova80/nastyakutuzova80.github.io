/****************************************************************  СМЕНА ТЕМЫ  ******************************************************************************************/

function theme() //смена темы
{ 
    if (style == 1){
        style = 2;
    }
    else {style = 1};
st1 = 'pink.css'; // основной цвет / синий
st2 = 'blue.css'; // дополнительный /розовый стиль
	if (style == 2)
	{
		var color=st2
	}
		else 
		{
			var color=st1;
		};
			document.getElementById('Change_Theme').href=color; 
};
/************************************************************  ОСНОВНЫ ПЕРЕМЕННЫЕ  ********************************************************************************************************************/
var Value_Now = "0"; //начальное положение 0
var Value_medium = "0"; //промежточное вычислениями значение
var Value_Minus = false; //если true то  число отрицательное
var Operation_Now = null; //символ между операцифми
var Reset_On_Pressed_numeric = false; //сброс вычилений если нажади "ровно"
var style = 1; //изначальный стиль темы
 
var Highl_Light_Id_element = null; //id подсвеченного элемента

/************************************************************  ФУНКЦИИ ПРИ НАЖАТИИ НА КНОПКИ  **************************************************************************************************************/

 
function display() 
{ // обновление дисплея
    document.getElementById("display").innerHTML = Value_Minus ? "-" + Value_Now : Value_Now; //если экран "ложный", то текущее число отрицательное,если нет, то положительное
}
 
function Pressed_numeric(num) { //нажали на кнопку
    if (Reset_On_Pressed_numeric) {//если после равно нажали цифру
        reset(); //экран сбрасывается
        Reset_On_Pressed_numeric = false;//сбрасываются кнопки
    }
    //дописываем к текущему значению нажатую цифру
    if (Value_Now == "0")  //Если начальное положение 0 то в строку добавляется нажатая 2ая кнопка,иначе равно кнопке
        Value_Now = String(num);
    else
        Value_Now += num;
    display();
}

function tochka(p) { // к начальному значению добавляется точка
    Value_Now += "."; 
    display();
}
 
function reset() { //сброс 
    Value_Now = "0"; //сбрасывается начальное значение 
    Value_medium = "0"; //сбрасывается промежуточное значение 
    Value_Minus = false; //сброс до положительного числа
    Reset_high_light(); //сброс подсветки и показ дисплея
    display();
}
 
	  

	function backspace() { 
	
	//удаление 1го символа //попытка
    Value_Now = Value_Now.length > 0 ? Value_Now.substring(0, Value_Now.length - 1) : "";
	display();
    }
	  
	  
function Operation(op) 
{ //операция + - / * mod
    if (Operation_Now != null) //если есть  незавершенная операция в данный момент
	{calculate();} //то ее нужно выполнить и обновить значение
		
    Reset_On_Pressed_numeric = false; //сброс кнопок
	
    Value_medium = Value_Minus ? "-" + Value_Now : Value_Now;//Запоминанает текущее значение как промежуточный результат
    Value_Now = 0;
    Value_Minus = false;
    Operation_Now = op;
    display();
}
 
 
 /************************************************************************** ОСНОВНЫЕ ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ **********************************************************************************************************/
 
function calculate() { //Выполнение дополнительных операций
    if (Operation_Now == null) // Если операции нет, возврат
        return;
			Value_Now = Value_Minus ? "-" + Value_Now : Value_Now; //Начальное положение - проверка на отрицательное число
	
    if (Operation_Now == "div")  // Если текущая операция div, то выполняется соответствующая операция
	{
        Value_Now = parseInt(Value_medium/Value_Now); 
    }
		else if (Operation_Now == "sqrt") // Иначе Если текущая операция корень,  то выполняется соответствующая операция
			{
				Value_Now = Math.sqrt(Value_medium);
			}
			else if (Operation_Now == "exp") // Иначе Если текущая операция возведение в степень,  то выполняется соответствующая операция
				{
					Value_Now = Math.pow(Value_medium, Value_Now);
				}
				else 
					{
						Value_Now = String(eval(Value_medium + Operation_Now + Value_Now)); //вычисляет текущее значение 
					}
 
    Operation_Now = null; //текущая операция 0
    Value_medium = 0; //промежуточное значение 0
    Value_Minus = false; //число положительное
    Reset_On_Pressed_numeric = true; //сборс кнопок верен
 
    if (Value_Now[0] == '-') { //если число отрицательное
        Value_Now = Value_Now.substring(1);//сохраним его в виде модуля
        Value_Minus = true; //Отрицательное число					(Для избежания ошибок значение находится в данной переменной)
    }
 
    Reset_high_light(); //При успешной операции сбрасывается подсветка 
    display();
}
 
 
 /************************************************** ВЫДИЛЕНИЕ КНОПОК********************************************************************************************************************/
 
 
function highlight(id) { //Выделение подсветкой соответствующего ID
    Reset_high_light(); //сначала убираем подсветку с предыдушей кнопки
    document.getElementById(id).style.backgroundColor = "#FFFFFF";
    Highl_Light_Id_element = id; //запоминает id подсвеченной кнопки
}
 
function Reset_high_light() { //очистка подсветки, вспомогательная функция
    if (Highl_Light_Id_element != null)
        document.getElementById(Highl_Light_Id_element).style.backgroundColor = "";
}

