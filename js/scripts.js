// business logic
var purchase=[];
function Pizza(size,crust,toppings,sizePrice,crustPrice,toppingsPrice,pizzaNumber){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.price = 0;
    // this.sizePrice = sizePrice;
    // this.crustPrice = crustPrice;
    // this.toppingsPrice = toppingsPrice;

 }

// Pizza.prototype.oderSummary = function() {
//     return this.names + " " + this.email + ""+ this.phoneNumber + " " + this.selectSize + "" + this.selectCrust + ""
//     this.selectTopping;
// }
Pizza.prototype.pizzaCost = function(){
    if(this.size==="small"){
      this.price += 1000;
    }
    else if(this.size="medium"){
        this.price += 2000;
    }
     else if(this.size==="large")  {
        this.price +=  3000;
    }
    if(this.crust==="stuffed"){
        this.price += 2500;
    }
    else if(this.crust==="New-York"){
        this.price +=2000;
    }
    else if(this.crust ==="Cracker-Crust"){
        this.price += 1500;
    }
    else if (this.crust === "glutenfree"){
        this.price += 1000;
    }
    else if(this.crust === "St-Louis"){
        this.price += 1300;
    }
    else if (this.crust === "Multigrain"){
        this.price +=1700;
    }
    else if (this.crust === " Cast-Irons"){
        this.price +== 1200;
    }
    else if(this.crust === "Flatbread") {
        price = 1800; 
    }
    if (this.toppings === "1"){
        price = 1000;
    }
    else if (this.toppings === "2"){
        price = 1500;
    }
    else if (this.toppings === "3"){
        this.price += 600;
    }
    else if (this.toppings === "4"){
        this.price +=700;
    }
    else if (this.toppings === "5"){
        this.price +=800;
    }
}
pizza.prototype.totalAmount = function(){
    var totalPayment=0;
    for ( var i = 0 ; i < purchase.length ; i++)
    {
        totalPayment += purchase[i]; 
    }
    return totalPayment;
}



// user interface logic
// $(document).ready(function(){
//     $("#ss,#s1").click(function(){
//      $(".small").toggle();
//      $("#s1").toggle();
//     });
    
    $(document).ready(function() {
        $("#send").click(function(event) {
          event.preventDefault();
    //   var names=$("input#user").val();
    //   var email=$("input#mail").val();
    //   var phoneNumber=$("input#phone").val();
      var pizzaSize=$("select#size").val();
      var pizzaCrust=$("select#crust").val();
      var pizzzaTopping=$("select#topping").val();
      var pizzaNumber=$("input#nbr").val();

      var description = pizzaSize + "" + pizzaCrust + "" + pizzzaTopping + "" + pizzaNumber;
      var newOrder = new Pizza(pizzzaSize,pizzaCrust,pizzaTopping);
      newOrder.pizzaCost();
      purchase.push(newOrder.price);
      $("#summary").show();
      $("#paid").text(newOrder.totalAmount);
      $("ul#pizzaOrdered").append("<ul><li>" + description + "</span></ul><li>");
      $("#size,#crust,#topping,#nbr").val();
    });
});

//   $("# order").click(function() {
//     $("#onother").append('<div class="row"> '+
        
    
//             '<div class="col-md-4">'+
//                 '<label  style="font-size: 30px">Select Crust:</label>'+
//                 '<select name="crust" class="form-group">'+
//                     '<option>select topings</option> '+
//                      '<option>Flatbread :3000</option>'+
//                     '<option>New York :4000</option>'+
//                     '<option>Sicilian :3200</option>'+
//                     '<option> Romana :3000</option>'+
//                     '<option> Cast Irons :3500</option>'+
//                     '<option>Cracker Crust :3500</option>' +
//                     '<option>St. Louis :3000</option>'+
//                     '<option>>Multigrain :3400</option>'+
//                      '<option></option>'+
//                 '</select>'+
                
//             '</div>'+


//             '<div class="col-md-4">'+
//                     '<label  style="font-size: 30px">Select toppings:</label>'+
//                     '<select name="toppings" class="form-group">'+
//                         '<option>select topings</option>'+
//                         '<option>Onions.</option>'+
//                         '<option> Mushrooms</option>'+
//                         '<option> Extra cheese</option>'+
//                         '<option> Green peppers.</option>'+
//                         '<option> Black olives</option>'+
//                         '<option> Bacon</option>'+
//                         '<option>Pepperoni.</option>'+
//                     '</select>'+
                    
//                 '</div>'+
//                 '<div class="col-md-4">' +
//                     '<label style="font-size: 30px">Select size:</label>'+
//                     '<select name="size" class="form-group">'+
//                         '<option>Small price :6000 </option>'+
//                         '<option>Medium price :9000 </option>'+
//                         '<option>Large price :2000</option>'+
//                     '</select>'+
//                 '</div>'+
//                 '<div class="col-md-4">'+
//                     '<label  style="font-size: 30px">Comfirm delivery:</label><br>'+
//                     '<select name="deliver" class="form-group">'+
//                             '<option>Yes</option>'+
//                             '<option>No</option>'+
//                     '</select>'+
//                 '</div>'+
//                 '<div class="order">'+
//                     '<label  style="font-size: 30px">Enter number of pizza you want:</label><br>'+
//                     '<input type="number" name="" id="nbr"><br><br>'+
//                     '<input type="button" name="" value="ORDER">'+
//                     // '<input type="button" id="addoder" value="another order">'+
//                     '<span class="btn btn-primary" id="order">Another order</span><br>'+
//                 '</div>'+
//                 '</div>')
        
//         }); 

//     });        
  
