
function getValueJson(){
    var promise= axios({
        url:'./../data/Data.json',
        method:"GET"
    });
    promise.then(function(res){
        console.log(res);
        // document.getElementById("one").innerHTML=res.data.navPills[2].showName;
        renderNameTab(res.data.navPills);
    }).catch(function(err){
        console.log(err);
    })
}
getValueJson();
function renderNameTab(arr){
    var content='';
    for(var i=0;i<arr.length;i++){
        var item=arr[i];
        console.log(item);
        content+=`<li class="nav-item" onclick="renderClothes('${item.type}');"><button class="nav-link">${item.showName}</button></li>`;
    };
    document.querySelector('.nav-pills').innerHTML = content;
}
function renderClothes(str){
    var promise= axios({
        url:'./../data/Data.json',
        method:"GET"
    });
    promise.then(function(res){
        // console.log(res);
        // document.getElementById("one").innerHTML=res.data.navPills[2].showName;
        var content='';
        var arr= res.data.tabPanes;
        for(var i=0;i<arr.length;i++){
            var item=arr[i];
            console.log(item);
            if(str==item.type){
                content+=`
                <div class="item">
                <img src="${item.imgSrc_jpg}">
                <h4>${item.name}</h4>
                <button onclick="chooseCloth('${item.id}')">Thử đồ</button>
              </div>`;
            }
        }
        document.querySelector(".content_cloth").innerHTML=content;
    }).catch(function(err){
        console.log(err);
    })
};
function chooseCloth(str){
    var promise= axios({
        url:'./../data/Data.json',
        method:"GET"
    });
    promise.then(function(res){
        var arr= res.data.tabPanes;
        for(var i=0 ;i<arr.length;i++){
            var item=arr[i];
            if(str==item.id){
                // console.log(item);
                if(item.type=="topclothes"){
                    document.querySelector(".bikinitop").setAttribute("style",`background: url(${item.imgSrc_png});height:437px;width:409px;transform:scale(0.5);top:-7%;left:0%`);
                }else if(item.type=="shoes"){
                    document.querySelector(".feet").setAttribute("style",`background: url(${item.imgSrc_png})`);
                }
                else if(item.type=="handbags"){
                    document.querySelector(".handbag").setAttribute("style",`background: url(${item.imgSrc_png})`);
                }else if(item.type=="necklaces"){
                    document.querySelector(".necklace").setAttribute("style",`background: url(${item.imgSrc_png})`);
                }else if(item.type=="hairstyle"){
                    document.querySelector(".hairstyle").setAttribute("style",`background: url(${item.imgSrc_png})`);
                }else if(item.type=="background"){
                    document.querySelector(".background").setAttribute("style",`background: url(${item.imgSrc_png})`);
                }else if(item.type=="botclothes"){
                    document.querySelector(".bikinibottom").setAttribute("style",`background: url(${item.imgSrc_png});height:150%;width:375px;transform:scale(0.5);top:-26%;left:2%`);
                }
                break;
            }
        }
    }).catch(function(err){
        console.log(err);
    })
}