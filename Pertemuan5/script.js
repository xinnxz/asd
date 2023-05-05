$(document).ready(function () {
    $.each(products, function (index,val){
      //  console.log(index, val);
        //console.log(val,desc);
        $('#catalog').append(`
                <div class="card">
                    <h1 class="text-white">${val.name}</h1>
                    <div class="desc">
                        <img class="img-catalog" src="assets/${val.image}" alt="baju1" width="200px" height="auto">
                        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <h3 class="text-white">${val.desc}</h3>                    <h3 class="text-white">${val.harga}</h3>

                </div>
                
                  

                `);
    });
});