// business logic
function Pizza(size,crust,toppings,price){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.price = price;

}


// user interface logic
//  
    // $("class.row").submit(function(event) {
    //   event.preventDefault();
  $(document).ready(function(){   
  $("# order").click(function() {
    $("#onother").append('<div class="row"> '+
        
    
            '<div class="col-md-4">'+
                '<label  style="font-size: 30px">Select Crust:</label>'+
                '<select name="crust" class="form-group">'+
                    '<option>select topings</option> '+
                     '<option>Flatbread :3000rwf</option>'+
                    '<option>New York :4000rwf</option>'+
                    '<option>Sicilian :3200rwf</option>'+
                    '<option> Romana :3000rwf</option>'+
                    '<option> Cast Irons :3500rwf</option>'+
                    '<option>Cracker Crust :3500rwf</option>' +
                    '<option>St. Louis :3000rwf</option>'+
                    '<option>>Multigrain :3400rwf</option>'+
                     '<option></option>'+
                '</select>'+
                
            '</div>'+


            '<div class="col-md-4">'+
                    '<label  style="font-size: 30px">Select toppings:</label>'+
                    '<select name="toppings" class="form-group">'+
                        '<option>select topings</option>'+
                        '<option>Onions.</option>'+
                        '<option> Mushrooms</option>'+
                        '<option> Extra cheese</option>'+
                        '<option> Green peppers.</option>'+
                        '<option> Black olives</option>'+
                        '<option> Bacon</option>'+
                        '<option>Pepperoni.</option>'+
                    '</select>'+
                    
                '</div>'+
                '<div class="col-md-4">' +
                    '<label style="font-size: 30px">Select size:</label>'+
                    '<select name="size" class="form-group">'+
                        '<option>Small price :6000 rwf</option>'+
                        '<option>Medium price :9000 rwf</option>'+
                        '<option>Large price :12 000 rwf</option>'+
                    '</select>'+
                '</div>'+
                '<div class="col-md-4">'+
                    '<label  style="font-size: 30px">Comfirm delivery:</label><br>'+
                    '<select name="deliver" class="form-group">'+
                            '<option>Yes</option>'+
                            '<option>No</option>'+
                    '</select>'+
                '</div>'+
                '<div class="order">'+
                    '<label  style="font-size: 30px">Enter number of pizza you want:</label><br>'+
                    '<input type="number" name="" id="nbr"><br><br>'+
                    '<input type="button" name="" value="ORDER">'+
                    // '<input type="button" id="addoder" value="another order">'+
                    '<span class="btn btn-primary" id="order">Another order</span><br>'+
                '</div>'+
                '</div>')
        
        }); 
    })         
  

