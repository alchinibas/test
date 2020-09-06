var height=screen.height;
function slide(target){
    this.active=0;
    this.target=document.getElementsByClassName(target)
    this.len=this.target.length;
    this.tmp=target.length;
    slideshow(this);

    function slideshow(slideObject){
        slideObject.active=(slideObject.tmp+1)%slideObject.len;
        slideObject.target[slideObject.active].style.display='block';
        slideEffect(slideObject.active,slideObject.tmp,slideObject.target);
        hide(slideObject.target[slideObject.tmp]);

        slideObject.tmp=slideObject.active;
        setTimeout(function(){slideshow(slideObject)},5000);

    }
    function hide(item){
        setTimeout(function(){item.style.display='none';},500);
    }

    function slideEffect(active,prev,object){
       object[active].classList.remove("slideout");
       object[active].classList.add("slidein");
       object[prev].classList.remove("slidein");
       object[prev].classList.add("slideout");
    }
}
var slides = []
var temp=document.getElementsByClassName("slide");
if (temp!='undefined' || temp!=''){
    for (var i =0;i<temp.length;i++){
        var target = temp[0].getAttribute("data-target");
        slides.push(new slide(target))
    }
}

var viewEffect = document.getElementsByClassName("view-zoom");
var focusEffect = document.getElementsByClassName("focus");
window.onscroll=function(){
    if (viewEffect){
        for (i=0;i<viewEffect.length;i++){
            var tmp=viewEffect[i].getBoundingClientRect();
            var data=viewEffect[i].getAttribute("data-target");
            if (data){
                var tmp2 = document.getElementById(data);
            }
                if (tmp.top< tmp.height/2 && tmp.top+tmp.height>20){
                    if (data){
                        tmp2.classList.remove("zoomout");
                        tmp2.classList.add("zoomin");
                    }
                }
                else{
                    if (data){
                        tmp2.classList.remove("zoomin");
                        tmp2.classList.add("zoomout");
                    }
                }
        }
    }
    if (focusEffect){
        for(i=0;i<focusEffect.length;i++){
            var tmp3 =focusEffect[i].getBoundingClientRect();
            var data1 = focusEffect[i].getAttribute("data-target");
            if (data1){
                var tmp4 = document.getElementById(data1);
            }
            if(tmp3.top<height/2  && tmp3.top+tmp3.height>tmp3.height/2){
                if(data1){
                    console.log("here");
                    tmp4.classList.remove("focusout");
                    tmp4.classList.add("focusin");

                }
            }
            else{
                console.log("here");
                if (data1){
                    tmp4.classList.remove("focusin");
                    tmp4.classList.add("focusout");
                }

            }
        }
    }
}

