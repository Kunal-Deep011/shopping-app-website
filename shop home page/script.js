let arr = [];
let newArrData = [];
async function getData(){
    try{
        const response = await fetch( "https://fakestoreapi.com/products");
        arr = await response.json();
        
        
        // alert("Added to Session Storage");
       

            localStorage.setItem("data",JSON.stringify(arr));
            console.log("data", arr);
 ///update with adding color,size          

            const colorArray = ["red", "blue", "green", "black", "white"];
            const sizeArray = ['S','M','L','XL'];

let getDatas = JSON.parse(localStorage.getItem("data"));


function getRandomColor(colors) {
    // Get a random index within the length of the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
  
    // Retrieve the color at the random index
    const color = colors[randomIndex];
    const colorF = colors[randomIndex];
    const colorS = colors[randomIndex];

    return(color,colorF,colorS);
  }

  function getRandomSize(sizes) {
    // Get a random index within the length of the colors array
    const randomIndex = Math.floor(Math.random() * sizes.length);
  
    // Retrieve the color at the random index
    const size = sizes[randomIndex];
    const sizeF = sizes[randomIndex];
    const sizeS = sizes[randomIndex];
  
    return (size,sizeF,sizeS);
  }


  
 for(let i = 0; i< getDatas.length; i++){
    
    
    let color = getRandomColor(colorArray);
    let colorF = getRandomColor(colorArray);
    let colorS = getRandomColor(colorArray);

    let maincolor = [];
    maincolor.push(color,colorF,colorS);

    let size = getRandomSize(sizeArray);
    let sizeF = getRandomSize(sizeArray);
    let sizeS = getRandomSize(sizeArray);

    let mainsize = [];
    mainsize.push(size,sizeF,sizeS)

    let currArrayObj = {
         ...getDatas[i], maincolor, mainsize
    }
    newArrData.push(currArrayObj);  
 }
 localStorage.setItem("newdata",JSON.stringify(newArrData));
 console.log("update-Data",newArrData);

 showData(newArrData);
        
    }  catch(e){
        console.log("Error--",e);
    }
};

getData();

function showData(productArr){
   
    let myHtml1 ="";
    let myHtml2 ="";
    let myHtml3 ="";
    let myHtml4 ="";
       productArr.forEach((item)=>{
        
         let rate1 = item.rating;
 
   // men's area      
         if(item.category == "men's clothing"){
 
             if(rate1.rate > 4.5 && rate1.rate <= 5){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         };
 
         if(rate1.rate > 4 && rate1.rate <= 4.5){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
            
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         };
 
        
         if(rate1.rate > 3.5 && rate1.rate <= 4){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         }; 
 
         if(rate1.rate > 3 && rate1.rate <= 3.5){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         }; 
 
   if(rate1.rate > 2.5 && rate1.rate <= 3){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         }; 
 
 
         if(rate1.rate > 2 && rate1.rate <= 2.5){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         }; 
 
         if(rate1.rate > 1.5 && rate1.rate <= 2){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         }; 
 
 
         if(rate1.rate > 0 && rate1.rate <= 1.5){
             myHtml1 += `
 <div class="men-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
         }; 
 
 
     };
 //women's area
 
         if(item.category == "women's clothing"){
 
             if(rate1.rate > 4.5 && rate1.rate <= 5)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
 
             if(rate1.rate > 4 && rate1.rate <= 4.5)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 3.5 && rate1.rate <= 4)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 3 && rate1.rate <= 3.5)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 2.5 && rate1.rate <= 3)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 2 && rate1.rate <= 2.5)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 1.5 && rate1.rate <= 2)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 0 && rate1.rate <= 1.5)
             {
                 myHtml2 += `
             
 <div class="women-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
            
         };
   // jwelery area      
         if(item.category == "jewelery"){
 
             if(rate1.rate > 4.5 && rate1.rate <= 5)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 4 && rate1.rate <= 4.5)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 3.5 && rate1.rate <= 4)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 3 && rate1.rate <= 3.5)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 2.5 && rate1.rate <= 3)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 2 && rate1.rate <= 2.5)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 1.5 && rate1.rate <= 2)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
             if(rate1.rate > 0 && rate1.rate <= 1.5)
             {
                 myHtml3 += `
 <div class="jewelery-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>        
             
             `;
             };
 
         };
 
 
  //elctronics area       
         if(item.category == "electronics"){
 
             if(rate1.rate > 4.5 && rate1.rate <= 5){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 4 && rate1.rate <= 4.5){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 3.5 && rate1.rate <= 4){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 3 && rate1.rate <= 3.5){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 2.5 && rate1.rate <= 3){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 2 && rate1.rate <= 2.5){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 1.5 && rate1.rate <= 2){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
 
             if(rate1.rate > 0 && rate1.rate <= 1.5){
                 myHtml4 += `
             
 <div class="electronic-area">
 
     
             <img class="img2" src="${item.image}">
             
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
 
             <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
         
  </div>    
             
             `;
             }
             
         };

       
        });
       
    let dd = document.querySelector(".men-container");
    let nn = document.createElement("div");
    nn.setAttribute('class',"data1");
    nn.innerHTML = myHtml1;
    dd.appendChild(nn);

   let dd1 = document.querySelector(".women-container");
   let nn1 = document.createElement("div");
   nn1.setAttribute('class',"data2");
   nn1.innerHTML = myHtml2;
   dd1.appendChild(nn1);

   let dd2 = document.querySelector(".jewel-container");
   let nn2 = document.createElement("div");
   nn2.setAttribute('class',"data3");
   nn2.innerHTML = myHtml3;
   dd2.appendChild(nn2);

   let dd3 = document.querySelector(".elec-container");
   let nn3 = document.createElement("div");
   nn3.setAttribute('class',"data4");
   nn3.innerHTML = myHtml4;
   dd3.appendChild(nn3);
    //getElementsByClassName(".data1").innerHTML=myHtml1;
    //document.querySelector(".data2").innerHTML=myHtml2;
    //document.querySelector(".data3").innerHTML=myHtml3;
    //document.querySelector(".data4").innerHTML=myHtml4;   
};




//adding funtionality

let allBtn =document.getElementById("all-btn");
let menBtn =document.getElementById("men-btn");
let womenBtn =document.getElementById("women-btn");
let jewelBtn =document.getElementById("jewel-btn");
let elecBtn =document.getElementById("elec-btn");


allBtn.addEventListener("click",()=>{
    
    document.getElementById("m1").style.display="block";
    document.getElementById("w").style.display="block";
    document.getElementById("e1").style.display="block";
    document.getElementById("j").style.display="block";

    document.getElementsByClassName("data1")[0].style.display ="flex";
    document.getElementsByClassName("data2")[0].style.display="flex";
    document.getElementsByClassName("data3")[0].style.display="flex";
    document.getElementsByClassName("data4")[0].style.display="flex";

});
menBtn.addEventListener("click",()=>{
    document.getElementById("m1").style.display="block";
    document.getElementById("w").style.display="none";
    document.getElementById("j").style.display="none";
    document.getElementById("e1").style.display="none";

    document.getElementsByClassName("data1")[0].style.display ="flex";
    document.getElementsByClassName("data2")[0].style.display="none";
    document.getElementsByClassName("data3")[0].style.display="none";
    document.getElementsByClassName("data4")[0].style.display="none";
});
womenBtn.addEventListener("click",()=>{
    document.getElementById("m1").style.display="none";
    document.getElementById("w").style.display="block";
    document.getElementById("j").style.display="none";
    document.getElementById("e1").style.display="none";

    document.getElementsByClassName("data2")[0].style.display="flex";
    document.getElementsByClassName("data1")[0].style.display ="none";
    document.getElementsByClassName("data3")[0].style.display="none";
    document.getElementsByClassName("data4")[0].style.display="none";
});
jewelBtn.addEventListener("click",()=>{
    document.getElementById("m1").style.display="none";
    document.getElementById("w").style.display="none";
    document.getElementById("e1").style.display="none";
    document.getElementById("j").style.display="block";

    document.getElementsByClassName("data3")[0].style.display="flex";
    document.getElementsByClassName("data2")[0].style.display="none";
    document.getElementsByClassName("data1")[0].style.display ="none";
    document.getElementsByClassName("data4")[0].style.display="none";
});
elecBtn.addEventListener("click",()=>{
    document.getElementById("m1").style.display="none";
    document.getElementById("w").style.display="none";
    document.getElementById("j").style.display="none";
    document.getElementById("e1").style.display="block";

    document.getElementsByClassName("data4")[0].style.display="flex";
    document.getElementsByClassName("data3")[0].style.display="none";
    document.getElementsByClassName("data2")[0].style.display="none";
    document.getElementsByClassName("data1")[0].style.display ="none";
});

let shopBox = document.getElementsByClassName("shopBox2")[0];
     let popupMsg = document.createElement("div");
     popupMsg.innerText="Couldn't find the product the user searched for."
     popupMsg.setAttribute("id","popMsg");
     
   

function searching(){

   let srchBtn = document.getElementById("srch-btnn").value.toUpperCase();
   

     let c1= document.getElementsByClassName("men-container")[0].getElementsByClassName("data1")[0].querySelectorAll(".men-area");
     let c2= document.getElementsByClassName("women-container")[0].getElementsByClassName("data2")[0].querySelectorAll(".women-area");
     let c3= document.getElementsByClassName("elec-container")[0].getElementsByClassName("data4")[0].querySelectorAll(".electronic-area");
     let c4= document.getElementsByClassName("jewel-container")[0].getElementsByClassName("data3")[0].querySelectorAll(".jewelery-area");
 
   
     
     if(srchBtn != c1.innerHTML && srchBtn != c2.innerHTML && srchBtn !=c3.innerHTML && srchBtn != c4.innerHTML){
        
      //popupMsg.style.display="block";
      document.getElementById("m1").classList.add("hide-class");
      document.getElementById("w").classList.add("hide-class");
      document.getElementById("j").classList.add("hide-class");
      document.getElementById("e1").classList.add("hide-class");
      shopBox.appendChild(popupMsg);
     
     }
     
    //searching for men area
    for(let i = 0; i < c1.length; i++){
      let li1 = c1[i].getElementsByClassName("span-item")[0].getElementsByTagName("span")[0];
      let li2 = c1[i].getElementsByClassName("span-item")[0].getElementsByTagName("span")[1];
      let li3 = c1[i].getElementsByClassName("r1")[0].getElementsByTagName("span")[0];
      let li4 = c1[i].getElementsByClassName("r2")[0].getElementsByTagName("span")[0];
 
      if(li1 || li2 || li3 || li4 ){
          let textvalue0 = li1.innerText || li1.innerHTML;
          let textvalue1 = li2.innerText || li2.innerHTML;
          let textvalue2 = li3.innerText || li3.innerHTML;
          let textvalue3 = li4.innerText || li4.innerHTML;
       

          if(textvalue0.toUpperCase().indexOf(srchBtn) > -1 || textvalue1.toUpperCase().indexOf(srchBtn) > -1
          || textvalue2.toUpperCase().indexOf(srchBtn) > -1 || textvalue3.toUpperCase().indexOf(srchBtn) > -1
         ){
              c1[i].style.display="";
             
          }else{
              c1[i].style.display="none";
              
          }

      }
  }
//searching for women area 
  for(let i = 0; i < c2.length; i++){
    let li1 = c2[i].getElementsByClassName("span-item")[0].getElementsByTagName("span")[0];
    let li2 = c2[i].getElementsByClassName("span-item")[0].getElementsByTagName("span")[1];
    let li3 = c2[i].getElementsByClassName("r1")[0].getElementsByTagName("span")[0];
    let li4 = c2[i].getElementsByClassName("r2")[0].getElementsByTagName("span")[0];

    if(li1 || li2 || li3 || li4 ){
        let textvalue0 = li1.innerText || li1.innerHTML;
        let textvalue1 = li2.innerText || li2.innerHTML;
        let textvalue2 = li3.innerText || li3.innerHTML;
        let textvalue3 = li4.innerText || li4.innerHTML;
    

        if(textvalue0.toUpperCase().indexOf(srchBtn) > -1 || textvalue1.toUpperCase().indexOf(srchBtn) > -1
        || textvalue2.toUpperCase().indexOf(srchBtn) > -1 || textvalue3.toUpperCase().indexOf(srchBtn) > -1
       ){
            c2[i].style.display="";
           
        }else{
            c2[i].style.display="none";
           
        }

    }
}

// searching for jewelery
for(let i = 0; i < c4.length; i++){
 let li1 = c4[i].getElementsByClassName("span-item")[0].getElementsByTagName("span")[0];
 let li2 = c4[i].getElementsByClassName("r1")[0].getElementsByTagName("span")[0];
 let li3 = c4[i].getElementsByClassName("r2")[0].getElementsByTagName("span")[0];
 

 if(li1 || li2 || li3){
     let textvalue0 = li1.innerText || li1.innerHTML;
     let textvalue1 = li2.innerText || li2.innerHTML;
     let textvalue2 = li3.innerText || li3.innerHTML;
    
 
     if(textvalue0.toUpperCase().indexOf(srchBtn) > -1 || textvalue1.toUpperCase().indexOf(srchBtn) > -1
     || textvalue2.toUpperCase().indexOf(srchBtn) > -1 )
     {
         c4[i].style.display="";
                
     }else{

         c4[i].style.display="none";
        
     }

 }
}


//searching for electronics

for(let i = 0; i < c3.length; i++){
 let li1 = c3[i].getElementsByClassName("span-item")[0].getElementsByTagName("span")[0];
 let li2 = c3[i].getElementsByClassName("r1")[0].getElementsByTagName("span")[0];
 let li3 = c3[i].getElementsByClassName("r2")[0].getElementsByTagName("span")[0];


 if(li1 || li2 || li3 ){
     let textvalue0 = li1.innerText || li1.innerHTML;
     let textvalue1 = li2.innerText || li2.innerHTML;
     let textvalue2 = li3.innerText || li3.innerHTML;
    

     if(textvalue0.toUpperCase().indexOf(srchBtn) > -1 || textvalue1.toUpperCase().indexOf(srchBtn) > -1
     || textvalue2.toUpperCase().indexOf(srchBtn) > -1 )
     {
         c3[i].style.display="";   
        
     }else{
         c3[i].style.display="none";
       
     }

   }
}

    };

let rangebtn = document.querySelector("#range");
let searchsection = document.querySelector(".searchcontainer");

searchsection.classList.add("hide-class");

let star = document.getElementsByClassName("r1");



rangebtn.addEventListener("input",filteringCart);


function renderItems(item) {

    
    let rate1 = item.rating;
 
    // men's area      
          if(item.category == "men's clothing"){
  
              if(rate1.rate > 4.5 && rate1.rate <= 5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          };
  
          if(rate1.rate > 4 && rate1.rate <= 4.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
             
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          };
  
         
          if(rate1.rate > 3.5 && rate1.rate <= 4){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          }; 
  
          if(rate1.rate > 3 && rate1.rate <= 3.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          }; 
  
    if(rate1.rate > 2.5 && rate1.rate <= 3){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          }; 
  
  
          if(rate1.rate > 2 && rate1.rate <= 2.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          }; 
  
          if(rate1.rate > 1.5 && rate1.rate <= 2){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
          }; 
  
  
          if(rate1.rate > 0 && rate1.rate <= 1.5){
              return`
  <div class="men-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
  
              if(rate1.rate > 4 && rate1.rate <= 4.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3.5 && rate1.rate <= 4)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3 && rate1.rate <= 3.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2.5 && rate1.rate <= 3)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2 && rate1.rate <= 2.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 1.5 && rate1.rate <= 2)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 0 && rate1.rate <= 1.5)
              {
                  return`
              
  <div class="women-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 4 && rate1.rate <= 4.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3.5 && rate1.rate <= 4)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 3 && rate1.rate <= 3.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2.5 && rate1.rate <= 3)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 2 && rate1.rate <= 2.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 1.5 && rate1.rate <= 2)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>        
              
              `;
              };
  
              if(rate1.rate > 0 && rate1.rate <= 1.5)
              {
                  return`
  <div class="jewelery-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 4 && rate1.rate <= 4.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 3.5 && rate1.rate <= 4){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 3 && rate1.rate <= 3.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 2.5 && rate1.rate <= 3){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 2 && rate1.rate <= 2.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 1.5 && rate1.rate <= 2){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
  
              if(rate1.rate > 0 && rate1.rate <= 1.5){
                  return`
              
  <div class="electronic-area">
  
      
              <img class="img2" src="${item.image}">
              
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
  
              <button class="add-cartBtn" onclick="insertFunc(${item.id})">Add to Cart</button>
          
   </div>    
              
              `;
              }
              
          };
         
}
///filtering according to the color
let colorRed = document.getElementById("red");
let colorBlue = document.getElementById("blue");
let colorGreen = document.getElementById("green");
let colorBlack = document.getElementById("black");
let colorWhite = document.getElementById("white");



function colorFilter() {
    let restArray = [];
    if(colorRed.checked == true){  
        const temp = newArrData.filter((item) =>{
  
            return (item.maincolor[0] == "red"  || item.maincolor[1] == "red" || item.maincolor[2] == "red");
        })

        temp.forEach((item)=>{
            restArray.push(item);
        })
        
    }

    if(colorBlue.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.maincolor[0] == "blue"  || item.maincolor[1] == "blue" || item.maincolor[2] == "blue");
        })

        temp.forEach((item)=>{
            restArray.push(item);
        })
       
    }

    if(colorBlack.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.maincolor[0] == "black"  || item.maincolor[1] == "black" || item.maincolor[2] == "black");
        })

        temp.forEach((item)=>{
            restArray.push(item);
        })
       
    }

    if(colorGreen.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.maincolor[0] == "green"  || item.maincolor[1] == "green" || item.maincolor[2] == "green");
        })

        temp.forEach((item)=>{
            restArray.push(item);
        })
       
    }
    if(colorWhite.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.maincolor[0] == "white"  || item.maincolor[1] == "white" || item.maincolor[2] == "white");
        })

        temp.forEach((item)=>{
            restArray.push(item);
        })
       
    }
    console.log("colorarrr",restArray);
    let searchHTML = restArray.map((item)=> renderItems(item));
    document.getElementById("searched-items").innerHTML = searchHTML.join("");
    searchsection.classList.remove("hide-class");

    if(colorRed.checked == false && colorBlue.checked == false && colorGreen.checked == false && colorBlack.checked == false && colorWhite.checked == false){
        document.getElementById("searched-items").innerHTML =""
        searchsection.classList.add("hide-class");
    }
}

///filtering according to sizes

let check1 = document.getElementById("checkbox1");
let check2 = document.getElementById("checkbox2");
let check3 = document.getElementById("checkbox3");
let check4 = document.getElementById("checkbox4");

function sizeFilter (){
    let resArray = [];
    if(check1.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.mainsize[0] == check1.value  || item.mainsize[1] == check1.value || item.mainsize[2] == check1.value);
        })

        temp.forEach((item)=>{
            resArray.push(item);
        })
        
    }

    if(check2.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.mainsize[0] == check2.value  || item.mainsize[1] == check2.value || item.mainsize[2] == check2.value);
        })

        temp.forEach((item)=>{
            resArray.push(item);
        })
       
    }

    if(check3.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.mainsize[0] == check3.value  || item.mainsize[1] == check3.value || item.mainsize[2] == check3.value);
        })

        temp.forEach((item)=>{
            resArray.push(item);
        })
       
    }

    if(check4.checked == true){  
        const temp = newArrData.filter((item) =>{
            return (item.mainsize[0] == check4.value  || item.mainsize[1] == check4.value || item.mainsize[2] == check4.value);
        })

        temp.forEach((item)=>{
            resArray.push(item);
        })
       
    }
    
    let searchHTML = resArray.map((item)=> renderItems(item));
    document.getElementById("searched-items").innerHTML = searchHTML.join("");
    searchsection.classList.remove("hide-class");

    if(check1.checked == false && check2.checked == false && check3.checked == false && check4.checked == false){
        document.getElementById("searched-items").innerHTML =""
        searchsection.classList.add("hide-class");
    }
    
};
   
 ////input range function

function filteringCart(){
    const ratingValue = rangebtn.value;
    let ratingResults = newArrData.filter((item) =>{
        
        return (Math.round(item.rating.rate) == (ratingValue));
    });
    console.log(ratingResults);
    let searchHTML = ratingResults.map((item)=> renderItems(item));
        document.getElementById("searched-items").innerHTML = searchHTML.join("");
        searchsection.classList.remove("hide-class");
}


/// add filter button function

const applyBtn=document.querySelector("#apply-btn")
const lowPrice=document.getElementById("0-25");
const midPrice=document.getElementById("25-50");
const highPrice=document.getElementById("50-100");
const vHighPrice=document.getElementById("100on");


let filterbtn = document.querySelector(".pricefilter");

filterbtn.addEventListener("click",priceFilterFunc);
      
function priceFilterFunc(){
    let resultArr=[]

    if(lowPrice.checked == true){
        let temp = newArrData.filter((item)=>{
            return item.price <= 25.0;
            
        })

        temp.forEach((item)=>{
            resultArr.push(item);
        })
    }

    if(midPrice.checked==true){
    
        let temp=newArrData.filter((item)=>{
          return item.price>=25.0 && item.price<=50.0
        })
        
       temp.forEach((item)=>{
        resultArr.push(item)
       })
       
      }
      
      if(highPrice.checked==true){
        
        let temp=newArrData.filter((item)=>{
          return item.price>=50.0 && item.price<=100.0
        })
        
       temp.forEach((item)=>{
        resultArr.push(item)
       })
       
      }

      if(vHighPrice.checked==true){
        
        let temp=newArrData.filter((item)=>{
          return item.price>=100.0
        })
        
       temp.forEach((item)=>{
        resultArr.push(item)
       })
       
      }

      const searchHTML = resultArr.map((item)=>renderItems(item));
      document.getElementById("searched-items").innerHTML = searchHTML.join("");
      searchsection.classList.remove("hide-class");

      if(lowPrice.checked==false && midPrice.checked==false && highPrice.checked==false && vHighPrice.checked==false){
        document.getElementById("searched-items").innerHTML =""
        searchsection.classList.add("hide-class");
    
      }
}


///add to cart function

let myCartArray = [];
let temp = JSON.parse(localStorage.getItem("cart"));
console.log("cart",temp);
if(temp){
    myCartArray = temp;
}

function insertFunc(itemId){
    let temp = newArrData.filter((item)=>{
        return item.id == itemId;
    });

    myCartArray.push(temp[0]);
    localStorage.setItem("cart",JSON.stringify(myCartArray))

    swal("Great..!", "Successfully Added to the Cart", "success");
}


   

    