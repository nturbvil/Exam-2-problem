  
    function MenuChoice()

{
if (document.getElementById("menu").value == "View Product Category List")
{
document.getElementById("section1").style.visibility = "visible";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";
document.getElementById("section4").style.visibility = "hidden";
document.getElementById("section5").style.visibility = "hidden";
Section1();
}
else if (document.getElementById("menu").value == "Create Product Category")
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "visible";
document.getElementById("section3").style.visibility = "hidden";
document.getElementById("section4").style.visibility = "hidden";
document.getElementById("section5").style.visibility = "hidden";
section2();
}

else if (document.getElementById("menu").value == "Change a Product Category Description")   
{ 
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "visible";
document.getElementById("section4").style.visibility = "hidden";
document.getElementById("section5").style.visibility = "hidden";
Section3();
 }

else if (document.getElementById("menu").value == "Delete a Product Category")   
{ 
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";
document.getElementById("section4").style.visibility = "visible";
document.getElementById("section5").style.visibility = "hidden";
section4();
 }
 
 else if (document.getElementById("menu").value == "About")   
{ 
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";
document.getElementById("section4").style.visibility = "hidden";
document.getElementById("section5").style.visibility = "visible";
section5();
 } 
 
else  
{
document.getElementById("section1").style.visibility = "hidden";
document.getElementById("section2").style.visibility = "hidden";
document.getElementById("section3").style.visibility = "hidden";
document.getElementById("section4").style.visibility = "hidden";
document.getElementById("section5").style.visibility = "hidden";


}
}
   


 //-------------------Show list of all categories-----------------------------------
 
 function Section1()
 {
 var objRequest = new XMLHttpRequest() ; // Create AJAX request object

 // Create URL and Query string 
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCategories";



 // Checks that the object has returned data 
 objRequest.onreadystatechange = function()
 {
 if(objRequest.readyState == 4 && objRequest.status == 200)
 {
 var output = JSON.parse(objRequest.responseText) ;
 GenerateOutput(output) ; 
 }
 }

 //Initiate the server request 
 objRequest.open("GET", url, true) ;
 objRequest.send() ; 



 function GenerateOutput(result)
 {
 var count = 0 ;
 var displaytext = "<table><tr><th>Category ID</th><th></th><th>Category Name</th><th></th><th>Category Description</th></tr>" ;

 //Loop to extract data from the response object
 for (count=0; count < result.GetAllCategoriesResult.length; count++)
 {
 displaytext += "<tr><td>" + result.GetAllCategoriesResult[count].CID + " </td><td>" + "</td><td> " + result.GetAllCategoriesResult[count].CName + " </td><td>" + "</td><td> " + result.GetAllCategoriesResult[count].CDescription + "</td></tr>"; 

 }


 displaytext += "</table>"; 
 document.getElementById("section1display").innerHTML = displaytext; 

 }
 }



function section2()
 {
 var objRequest = new XMLHttpRequest() ; // Create AJAX request object

 // Create URL and Query string 
 var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
 url += document.getElementById("custid").value ;


 // Checks that the object has returned data 
 objRequest.onreadystatechange = function()
 {
 if(objRequest.readyState == 4 && objRequest.status == 200)
 {
 var output = JSON.parse(objRequest.responseText) ;
 GenerateOutput(output) ; 
 }
 }

 //Initiate the server request 
 objRequest.open("GET", url, true) ;
 objRequest.send() ; 


 function GenerateOutput(result)
 {
 var count = 0 ;
 var displaytext = "<table><tr><th>Product Name</th><th></th><th>Quantities Ordered</th></tr>" ;

 //Loop to extract data from the response object
 for (count=0; count < result.length; count++)
 {
 displaytext += "<tr><td>"+ result[count].ProductName + " </td><td>" + "</td><td> " + result[count].Total + "</td></tr>" ;

 }


 displaytext += "</table>" ; 
 document.getElementById("section2display").innerHTML = displaytext; 

 }
 }


function Section3()
{

var objRequest = new XMLHttpRequest(); //Create AJAX request object
//Create URL and Query string
var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
url += document.getElementById("custid").value;
//Checks that the object has returned data
objRequest.onreadystatechange = function()
{
if (objRequest.readyState == 4 && objRequest.status == 200)
{
var output = JSON.parse(objRequest.responseText);
GenerateOutput(output);
}
}
//Initiate the server request
objRequest.open("GET", url, true);
objRequest.send();
}
function GenerateOutput(result)
{
var count = 0;
//var displaytext = "";
var displaytext = "<table><tr><th>Order Date</th><th></th><th>Order ID</th><th></th><th>Ship Address</th><th></th><th>Ship City</th><th></th><th>Ship Name</th><th></th><th>Ship Post Code</th><th></th><th>Shipped Date</th></tr>" ;

//Loop to extract data from the response object
for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
{
   // displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " + result.GetOrdersForCustomerResult[count].OrderID  + ", " + result.GetOrdersForCustomerResult[count].ShipAddress + ", " + result.GetOrdersForCustomerResult[count].ShipCity + ", " + result.GetOrdersForCustomerResult[count].ShipName + ", " + result.GetOrdersForCustomerResult[count].ShipPostcode + ", " + result.GetOrdersForCustomerResult[count].ShippedDate +"<br>";
//displaytext += "<tr><td>"+ result.GetOrdersForCustomerResult[count].OrderDate + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].OrderID   + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipAddress + " </td><td>" + "</td><td> "+ result.GetOrdersForCustomerResult[count].ShipCity + " </td><td>" + "</td> <td>"+ result.GetOrdersForCustomerResult[count].ShipName " </td><td>" + "</td><td> " result.GetOrdersForCustomerResult[count].ShipPostcode + " </td><td>" + "</td><td> "+ result.GetOrdersForCustomerResult[count].ShippedDate + " </td></tr>";

displaytext += "<tr><td>"+ result.GetOrdersForCustomerResult[count].OrderDate + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].OrderID   + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipAddress + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipCity + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipName + " </td><td>" + "</td><td> " + result.GetOrdersForCustomerResult[count].ShipPostcode + " </td><td>" + "</td><td> "+ result.GetOrdersForCustomerResult[count].ShippedDate + " </td></tr>"; 

}
displaytext += "</table>" ;
document.getElementById("orderdisplay").innerHTML = displaytext;

}
 
    
//----------------------Create Product Category-----------------------------------------------    
    
 function CreateCategory()
{
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCategory";
        
        //Collect Customer data from web page
        var catname = document.getElementById("CatName").value;
        var catdescript = document.getElementById("CatDescript").value;
        
        
        //Create the parameter string
        var newcustomer = '{"CName":"' + catname + '","CDescription":"' + catdescript +'"}';
        
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
            
        OperationResult(result);
            
        }
            
        }
        
        //Start AJAX request
        objRequest.open("POST", url, true);
        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        objRequest.send(newcustomer);
        
        }
        
        function OperationResult(output)
        
        {
            if (output.WasSuccessful == 1)
            {
                document.getElementById("result2").innerHTML = "Category Added!";
            }
            else
            {
                document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
            }
                
        }
//---------------------Update category description-----------------------

function UpdateDescription()
{
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
        
        //Collect Customer data from web page
        var catid = document.getElementById("CatID").value;
        var catdescription = document.getElementById("CatD").value;
        
        
        //Create the parameter string
        var updatedescription = '{CID:"'+ catid +'", "CDescription":"'+ catdescription +'"}';
        
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
            
        OperationResult2(result);
            
}
            
}
        
        //Start AJAX request
        objRequest.open("POST", url, true);
        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        objRequest.send(updatedescription);
        
        }
        
        function OperationResult2(output)
        
        {
            if (output.WasSuccessful == 1)
            {
                document.getElementById("result3").innerHTML = "Category Description Changed!";
            }
            else
            {
                document.getElementById("result3").innerHTML = "The operation was not successful, ID not found";
            }
                
            }  
            
   //----------------------------Delete A Category----------------------- 

function DeleteCategory()
{
        var objRequest = new XMLHttpRequest();
        var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCategory/";
        url += document.getElementById("CATID").value;
        
        //Collect Customer data from web page
        //var customerid = document.getElementById("custid").value;
        //var customername = document.getElementById("custname").value;
        //var customercity = document.getElementById("custcity").value;
        
        //Create the parameter string
        //var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';
        
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
        var result = JSON.parse(objRequest.responseText);
            
        OperationResult1(result);
            
        }
            
        }
        
        //Start AJAX request
        objRequest.open("GET", url, true);
        objRequest.send();
        
        }
        
        function OperationResult1(output)
        
        {
            if (output.DeleteCategoryResult.WasSuccessful == 1)
            {
                document.getElementById("section4display").innerHTML = "Category Deleted!";
            }
            else
            {
                document.getElementById("section4display").innerHTML = "The operation was not successful!";
            }
                
        }
function myFunction() {
    var txt;
    var r = confirm("Are you sure you want to delete!\nSelect OK or Cancel.");
    if (r == true) {
        DeleteCategory();
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}