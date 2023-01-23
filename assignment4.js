var productData = {
  id: "1",
  name: "Men Navy Blue Solid Sweatshirt",
  preview:
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  photos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
  ],
  description:
    "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  size: [1, 1, 0, 1, 0],
  isAccessory: false,
  brand: "United Colors of Benetton",
  price: 2599,
};

var main = document.createElement("div");
document.body.append(main);
main.className = "main_Section";

var img_sec = document.createElement("img");
img_sec.className = "bigimage";
img_sec.id="big"

var card_sec = document.createElement("div");
card_sec.className = "card_box";
main.append(img_sec, card_sec);

img_sec.src = productData.preview;
var title = document.createElement("h2");
title.innerHTML = productData.name; 


var brand = document.createElement("h5");
brand.innerHTML = "United Colors of Benetton";
brand.className="paragraph"
var price = document.createElement("h5");

price.innerHTML = "price : RS " +`<span>${productData.price}</span>`;
price.className="paragraph"

var extra=document.createElement('h5'); 
extra.innerHTML="Description"; 
extra.className="paragraph";


var des = document.createElement("p");
des.innerHTML = productData.description;
des.className="navy"

var preview = document.createElement("h5");
preview.innerHTML = "Product Preview";
preview.className="paragraph"
var photo_Sec = document.createElement("div");
photo_Sec.id="photo" 


var btn=document.createElement('button');
btn.innerHTML="Add to cart" 
btn.className="first_button"

card_sec.append(title, brand, price,extra,des, preview, photo_Sec,btn);
for (var i = 0; i < productData.photos.length; i++) { 

  var new_div = document.createElement("img");
  new_div.src = productData.photos[i];
  new_div.className = "small_img";
  
  new_div.setAttribute('id','start'+i)
  
  photo_Sec.append(new_div) 

}  


var image0=document.getElementById('start0');
image0.addEventListener("click",function(){
 image0.style.border="2px solid green";
 image0.style.padding="3px"
 document.getElementById('big').src=this.src;
})


 var image=document.getElementById('start1');
 image.addEventListener("click",function(){
  image.style.border="2px solid green";
  this.style.padding="3px"
  document.getElementById('big').src=this.src;
  
 })


 var image2=document.getElementById('start2');
 image2.addEventListener("click",function(){
  image2.style.border="2px solid green";
  image2.style.padding="3px"
  document.getElementById('big').src=this.src;
 }) 

 var image3=document.getElementById('start3');
 image3.addEventListener("click",function(){
  image3.style.border="2px solid green";
  image3.style.padding="3px"
  document.getElementById('big').src=this.src;
 })

 var image4=document.getElementById('start4');
 image4.addEventListener("click",function(){
  image4.style.border="2px solid green";
  image4.style.padding="3px"
  document.getElementById('big').src=this.src;
 })

