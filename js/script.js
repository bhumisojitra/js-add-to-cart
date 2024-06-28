const products = [
    {
        id : 1,
        image : 'img/phone.jpg',
        name : 'iPhone 13 Pro',
        price : 25999,
    },
    {
        id : 2,
        image : 'img/leptop.jpg',
        name : 'HP Laptop 15',
        price : 36390,
    },
    {
        id : 3,
        image : 'img/camera.jpg',
        name : 'FNX UltraHD Camera',
        price : 5999,
    },
    {
        id : 4,
        image : 'img/buds.jpg',
        name : 'boAt',
        price : 1000,
    },
    {
        id : 5,
        image : 'img/watch.jpg',
        name : 'Smart Watch',
        price : 5000,
    },
    {
        id : 6,
        image : 'img/head-phone.jpg',
        name : 'Head-Phone',
        price : 3000,
    },
    {
        id : 7,
        image : 'img/Speaker.jpg',
        name : 'Speaker',
        price : 2000,
    },
    {
        id : 8,
        image : 'img/ipad.jpg',
        name : 'iPad Air',
        price : 45000,
    },
    {
        id : 9,
        image : 'img/mouse.jpg',
        name : 'LED Gaming Mouse',
        price : 10000,
    },
    {
        id : 10,
        image : 'img/projector.jpg',
        name : 'LED Projector',
        price : 12000,
    },
    {
        id : 11,
        image : 'img/drive.jpg',
        name : ' USB Flash Drive',
        price : 900,
    },
    {
        id : 12,
        image : 'img/dryer.jpg',
        name : 'Hair Dryer',
        price : 3000,
    },
    {
        id : 13,
        image : 'img/dron.jpg',
        name : 'Drone GPS',
        price : 15000,
    },
]

let displayData = document.getElementById('displayData');
let count = document.getElementById('count');

let dataStor = JSON.parse(localStorage.getItem("productss")) || [];
    
count.innerHTML = dataStor.length;

const updateCartCount = () => {
    let totalItems = dataStor.reduce((sum, item) => sum + item.qty, 0);
    count.innerHTML = totalItems;
}


let addData = () => {

    displayData.innerHTML = "";

    products.forEach((ele) => {
        displayData.innerHTML += `<div class="col-3" style="margin-top: 30px;">
            <div class="card">
                <img src="${ele.image}" height="290px">
                <div class="card-body text-center">
                    <h4 class="card-title">${ele.name}</h4>
                    <p class="text-danger fw-bold fs-5">₹${ele.price}</p>
                    <button type="submit" class="btn btn-primary col-12 fw-bold" onclick="return editData(${ele.id})">Add To Card</button>
                </div>
            </div>
        </div>`
    });
}

addData();

let editData = (id) => {   

    let edit = products.filter((da) => { 
        return da.id === id;
    });

    let exitData = dataStor.find((item) => item.id === id);

    if (exitData) {
        exitData.qty += 1;
    }
    else {
        // 1).updateRec.qty = 1; or 2).|^
        let updateRec = {...edit[0], qty : 1}
        dataStor = [...dataStor, updateRec];
    }

    updateCartCount();

    count.innerHTML = dataStor.length;

    console.log("editdata : ", edit[0]);
    console.log("dataStor : ", dataStor);

    localStorage.setItem("productss", JSON.stringify(dataStor));

}  
updateCartCount(); 