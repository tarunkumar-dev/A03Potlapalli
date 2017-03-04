

function calculateBmi() {


var weight = document.getElementById("txtbox1").value
var height = document.getElementById("txtbox1").value
var gender = document.getElementById("txtbox5").value

if(weight > 0 && height > 0 )
{	
if(gender=="M"||gender=="m")
{
var Bmival = weight/(height/100*height/100)
 document.getElementById("txtbox3").value = Bmival
// $("#txtbox3").html(Bmival);
if(Bmival <=17)
{
document.getElementById("txtbox4").value = "Moderate and severe thinness"
}
if(Bmival >=18.5 && Bmival<=24.99)
{
document.getElementById("txtbox4").value = "Healthy"
}
if(Bmival>=30.0)
{
    
document.getElementById("txtbox4").value = "Obese"
}
if(Bmival>=25.0)
{
    
document.getElementById("txtbox4").value = "OverWeight"
}
if(Bmival>=25.0 && Bmival<=29.99 )
{
    
document.getElementById("txtbox4").value = "pre-obese"
}
if(Bmival<18.5)
{
    
document.getElementById("txtbox4").value = "underweight"
}

    }  //  closing gender if



if(gender=="F"||gender=="f")
{
var Bmival = weight/(height*height)
document.getElementById("txtbox3").value = Bmival

if(Bmival <=17)
{
document.getElementById("txtbox4").value = "Moderate and severe thinness"
}
if(Bmival >=18.5 && Bmival<=24.99)
{
document.getElementById("txtbox4").value = "Healthy"
}
if(Bmival>=30.0)
{
    
document.getElementById("txtbox4").value = "Obese"
}
if(Bmival>=25.0)
{
    
document.getElementById("txtbox4").value = "OverWeight"
}
if(Bmival>=25.0 && Bmival<=29.99 )
{
    
document.getElementById("txtbox4").value = "pre-obese"
}
if(Bmival<18.5)
{
    
document.getElementById("txtbox4").value = "underweight"
}

    }  //  closing gender if

}
// closing weight and height if
else
{
alert("Please enter numbers in weight and height ")
}


}


var App = {
    
  launch: function (w,h) 
  {
 var Bmival = (w/(h*h))*1000;
return ((w/(h*h))*1000);
}} 
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater 

// BMI females % moderate and severe thinness ()
// BMI females % normal (18.5-24.99)
// BMI females % obese (>=30.0)
// BMI females % overweight (>=25.0)
// BMI females % pre-obese (25.0-29.99)
// BMI females % underweight (<18.5)

// BMI males % moderate and severe thinness ()
// BMI males % normal ()
// BMI males % obese ()
// BMI males % overweight ()
// BMI males % pre-obese ()
// BMI males % underweight ()




