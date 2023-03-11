window.onload = function () {
  let search = document.querySelectorAll(".search-content");
  let scas=document.querySelectorAll(".sale_capsule_image_ctn");
  scas.forEach(function (item, index) {
    item.onmouseover = function () {
        item.style.transform='scale(1.05)'//放大了1.05倍，只有这可以改成item（
    };
    item.onmouseout = function () {
        item.style.transform='scale(1)'
    };
  });
  search.forEach(function (item, index) {
    item.onmouseover = function () {
      item.style.background = "rgba(58, 120, 177, 0.8) 25.23%";
    };
    item.onmouseout = function () {
      let searchbk = document.getElementsByClassName("search")[0];
      item.style.background = "";
    };
  });
       //页面加载监听方法，页面加载之后执行
       console.log("页面挂载完成");
           
       //拿取需要渲染的Dom节点
       console.log("动态头部加载完成");
       let imgbox =document.querySelectorAll('.imgbox')

       imgbox.forEach(function(item,index){
           item.onmouseover=function(){
               console.log("鼠标移进盒子");
               item.style.transform='scale(1.05)'//放大了1.05倍，只有这可以改成item（
           }
           item.onmouseout=function(){
               console.log("鼠标移出盒子");
               imgbox[index].style.transform='scale(1)'
           }
       })
       let tm =document.querySelectorAll('.tm')
       tm.forEach(function(item,index){
           item.onmouseover=function(){
               console.log("鼠标移进盒子");
               item.style.transform='scale(1.05)'//放大了1.05倍，只有这可以改成item（
           }
           item.onmouseout=function(){
               console.log("鼠标移出盒子");
               item.style.transform='scale(1)'
           }
       })

       let boxs1 =document.querySelectorAll('.boxs1')
       boxs1.forEach(function(item,index){
           item.onmouseover=function(){
               console.log("鼠标移进盒子");
               item.style.transform='scale(1.05)'//放大了1.05倍，只有这可以改成item（
           }
           item.onmouseout=function(){
               console.log("鼠标移出盒子");
               item.style.transform='scale(1)'
           }
       })

       let geta =document.querySelectorAll('.geta')
       geta.forEach(function(item,index){
           item.onmouseover=function(){
               console.log("鼠标移进盒子");
               item.style.transform='scale(1.05)'//放大了1.05倍，只有这可以改成item（
           }
           item.onmouseout=function(){
               console.log("鼠标移出盒子");
               item.style.transform='scale(1)'
           }
       })
};
