const cartSection = document.querySelector(".cart-1");
let cartItems = JSON.parse(localStorage.getItem("cart"));

console.log("fetched",cartItems);


//function for calculating total price...

function calculation(){
   let totalprice = 0;
    cartItems.map((item)=>{
       return totalprice += item.price;
    });

    let currUser = JSON.parse(localStorage.getItem("currUser"));
    currUser.totalprice = totalprice.toFixed(2)

    localStorage.setItem("currUser",JSON.stringify(currUser));

    document.getElementById("total-price").innerHTML = "$"+totalprice.toFixed(2);

}

calculation();



///function to show add-cart data on screen

function showList(){
    const searchHTML = cartItems.map((item)=> renderItems(item));
      document.getElementById("cart-itemsss").innerHTML = searchHTML.join("");
    
}

showList();


//function to show on checkoutlist
function renderlist(){
    const searchHTML02 = cartItems.map((item)=>renderPrice(item));

    document.querySelector(".listItem").innerHTML = searchHTML02.join("");
}

renderlist();

function renderPrice(item){
    return`
 
    <div id="list-items">${item.title.slice(0, 20)}...</div>
    <div >$${item.price}</div>  
    
         `;
}


// function for removing items from cart
function removeItems(id){
    cartItems=cartItems.filter((item)=>{
        return item.id != id
    })

    localStorage.setItem("cart", JSON.stringify(cartItems));
    showList();
    renderlist();
    calculation();
}

/////redirecting to the payment page
document.querySelector('#pay-btn').addEventListener('click',()=>{
     localStorage.setItem("cart",JSON.stringify([]));
     swal("Great..!", "List of an items got purchased", "success");
     
     setTimeout(()=>{
        window.location.href = "../razorpay page/index.html"
     },1000);
    
});



function renderItems(item){
       
    let rate1 = item.rating;
 
    // men's area      
          if(item.category == "men's clothing"){
  
              if(rate1.rate > 4.5 && rate1.rate <= 5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1" >&#9733;&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          };
  
          if(rate1.rate > 4 && rate1.rate <= 4.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
             
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          };
  
         
          if(rate1.rate > 3.5 && rate1.rate <= 4){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          }; 
  
          if(rate1.rate > 3 && rate1.rate <= 3.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
              <span>$${item.price}</span>
              <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
           </div>

           <div class="color-p">Colors :
           <div class="circle  ${
             item.maincolor[0] == "green"
             ? "green1"
             : item.maincolor[0] == "black"
             ? "black1"
             :item.maincolor[0] == "white"
             ? "white"
             :item.maincolor[0] == "red"
             ? "red1"
             :item.maincolor[0] == "blue"
             ? "blue1"
             :""}">
             </div>

             <div class="circle  ${
                item.maincolor[1] == "green"
                ? "green1"
                : item.maincolor[1] == "black"
                ? "black1"
                :item.maincolor[1] == "white"
                ? "white"
                :item.maincolor[1] == "red"
                ? "red1"
                :item.maincolor[1] == "blue"
                ? "blue1"
                :""}">
                </div>

             <div class="circle  ${
                item.maincolor[2] == "green"
                ? "green1"
                : item.maincolor[2] == "black"
                ? "black1"
                :item.maincolor[2] == "white"
                ? "white"
                :item.maincolor[2] == "red"
                ? "red1"
                :item.maincolor[2] == "blue"
                ? "blue1"
                :""}">
                </div> 
           </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          }; 
  
    if(rate1.rate > 2.5 && rate1.rate <= 3){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          }; 
  
  
          if(rate1.rate > 2 && rate1.rate <= 2.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          }; 
  
          if(rate1.rate > 1.5 && rate1.rate <= 2){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          }; 
  
  
          if(rate1.rate > 0 && rate1.rate <= 1.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}   </span>
              <span class="material-symbols-outlined">
              group
              </span></div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
          }; 
  
  
      };
  //women's area
  
          if(item.category == "women's clothing"){
  
              if(rate1.rate > 4.5 && rate1.rate <= 5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
  
              if(rate1.rate > 4 && rate1.rate <= 4.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3.5 && rate1.rate <= 4)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3 && rate1.rate <= 3.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2.5 && rate1.rate <= 3)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2 && rate1.rate <= 2.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 1.5 && rate1.rate <= 2)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 0 && rate1.rate <= 1.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
             
          };
    // jwelery area      
          if(item.category == "jewelery"){
  
              if(rate1.rate > 4.5 && rate1.rate <= 5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 4 && rate1.rate <= 4.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3.5 && rate1.rate <= 4)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3 && rate1.rate <= 3.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2.5 && rate1.rate <= 3)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2 && rate1.rate <= 2.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 1.5 && rate1.rate <= 2)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 0 && rate1.rate <= 1.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>        
              
              `;
              };
  
          };
  
  
   //elctronics area       
          if(item.category == "electronics"){
  
              if(rate1.rate > 4.5 && rate1.rate <= 5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 4 && rate1.rate <= 4.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 3.5 && rate1.rate <= 4){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 3 && rate1.rate <= 3.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 2.5 && rate1.rate <= 3){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 2 && rate1.rate <= 2.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 1.5 && rate1.rate <= 2){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733;&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 0 && rate1.rate <= 1.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">

              <div class="titl">Title : ${item.title}</div>

              <div class="desp">Description : ${item.description}</div>
              
              <div class="span-item">
                <span>$${item.price}</span>
                <span>${item.mainsize[0]}, ${item.mainsize[1]}, ${item.mainsize[2]}</span>
             </div>
 
             <div class="color-p">Colors :
             <div class="circle  ${
               item.maincolor[0] == "green"
               ? "green1"
               : item.maincolor[0] == "black"
               ? "black1"
               :item.maincolor[0] == "white"
               ? "white"
               :item.maincolor[0] == "red"
               ? "red1"
               :item.maincolor[0] == "blue"
               ? "blue1"
               :""}">
               </div>

               <div class="circle  ${
                  item.maincolor[1] == "green"
                  ? "green1"
                  : item.maincolor[1] == "black"
                  ? "black1"
                  :item.maincolor[1] == "white"
                  ? "white"
                  :item.maincolor[1] == "red"
                  ? "red1"
                  :item.maincolor[1] == "blue"
                  ? "blue1"
                  :""}">
                  </div>

               <div class="circle  ${
                  item.maincolor[2] == "green"
                  ? "green1"
                  : item.maincolor[2] == "black"
                  ? "black1"
                  :item.maincolor[2] == "white"
                  ? "white"
                  :item.maincolor[2] == "red"
                  ? "red1"
                  :item.maincolor[2] == "blue"
                  ? "blue1"
                  :""}">
                  </div> 
             </div>
  
              <div class="r1"><span>Rating : ${rate1.rate}</span>
              <span class="s1">&#9733</span>
              </div>
              <div class="r2"><span>Review : ${rate1.count}</span>
              <span class="material-symbols-outlined">
              group
              </span>
              </div>
  
              <button class="add-cartBtn" onclick="removeItems(${item.id})">Remove from Cart</button>
          
   </div>    
              
              `;
              }
              
          };
};