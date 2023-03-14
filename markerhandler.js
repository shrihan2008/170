AFRAME.registerComponent('marker-handler',{
    init:function(){
        this.el.addEventListener("makrerFound",()=>{
            console.log("markerisfound");
            this.handleMarkerFound();
        });

     this.el.addEventListener("markerLost",()=>{
        console.log("markerislost");
        this.handleMarkerLost();
     })   ;
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById('button-div')
        buttonDiv.style.display="flex"
        var ratingButton=document.getElementById("rating-button")
        var orderButton=document.getElementById("order-button")
        
        ratingButton.addEventListener('click',function(){
            swal({
                title:"Rate toy",
                icon:"warning",
                text:"ratetoy",


            });
        });

        orderButton.addEventListener('click',function(){
            swal({
                title:"order found",
                icon:"warning",
                text:"ordertoy"
            })
        })
    },

    handleMarkerLost:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none"
    }
})