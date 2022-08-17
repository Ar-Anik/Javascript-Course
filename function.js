function square()
{
    var num = 12;
    var result = num * num;
    document.write("Square :: ", result, "<br>");
}

square();

function summation(num1, num2)
{
    var sm = num1 + num2;
    return sm;
}

function subtruction(num1, num2)
{
    var sub = Math.abs(num1 - num2);
    return sub;
}

function multiplication(num1, num2)
{
    var mul = num1 * num2;
    return mul;
}

function division(num1, num2)
{
    var div = num1 / num2;
    return div;
}

document.write(summation(10, 12), "<br>");
document.write(subtruction(15, 8), "<br>");
document.write(multiplication(80, 2), "<br>");
document.write(division(70, 7), "<br>");
