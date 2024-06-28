let viewData = document.getElementById('viewData');
let dataStor = JSON.parse(localStorage.getItem("productss")) || [];

let count = document.getElementById('count');
count.innerHTML = dataStor.length;

console.log(dataStor);

let data = dataStor;

const dec = (id) => {

    let exitData = data.find((it) => it.id == id);

    if(exitData.qty > 1){
        
        let updateRec = exitData.qty - 1;
        exitData.qty = updateRec;

        console.log("exitData :", exitData);
        localStorage.setItem("productss", JSON.stringify(data));
    }
    else{
        console.log("min 1 qty rec.....");
    }

    viewDataaa();
}

const inc = (id) => {

    let exitData = data.find((it) => it.id == id);

    exitData.qty += 1;
    localStorage.setItem("productss", JSON.stringify(data));

    viewDataaa();
}

const deleteData = (id) => {

    let data = [...dataStor];

    let deletData = dataStor.filter((d) => {
        return d.id != id;
    });

    console.log("deletData :", deletData);
    dataStor = deletData;

    localStorage.setItem("productss", JSON.stringify(dataStor));

    viewDataaa();
}

let viewDataaa = () => {

    viewData.innerHTML = "";
    let totalPrice = 0

        if(dataStor.length == 0){
            
            viewData.innerHTML = `<img src="img/error.avif" style="margin-top: 30px; text-align: center; vertical-align: middle; margin-left: 40%;">`;
        }
        else{
            dataStor.forEach((view) => {
                let price = parseFloat(view.price) * view.qty;
                totalPrice += price;

                viewData.innerHTML += `<tr style="text-align: center; vertical-align: middle;">
                <th>${view.id}</th>
                <td><img src="${view.image}" width="78px" height="70px;"></td>
                <td style="font-weight: bold;">${view.name}</td>
                <td>
                    <button onclick="return dec(${view.id})" style="width: 20px; height: 20px; border-radius: 50%; background-color: #ffc107; border: 1px solid #ffc107; line-height: 2px;">-</button>
                    <span class="mx-2" style="font-weight: bold;">${view.qty}</span>
                    <button onclick="return inc(${view.id})" style="width: 20px; height: 20px; border-radius: 50%; background-color: #ffc107; border: 1px solid #ffc107; line-height: 0px;" class="p-1">+</button>
                </td>
                <td style="font-weight: bold;">₹${view.price}</td>
                <td><button class = "btn btn-primary" style="background-color: #ffc107;" onclick= "return deleteData(${view.id})"><i class="bi bi-archive-fill"></i></button></td>
            </tr>`
        });

        viewData.innerHTML += `<tr class="p-3 style="background-color: #ffc107;">
            <th colspan="3" style="text-align: right; font-size: 25px;">Total Price := </th>
            <th align="center" style="height: 60px; margin-top: 30px; font-size: 25px;"> ₹ ${totalPrice}</th>
            <th></th><th></th>
        </tr>`;
        }


}

viewDataaa();