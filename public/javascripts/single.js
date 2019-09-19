$(document).ready(function(){
// $("#submitComment").click(function(e){
//     e.preventDefault();
    
//   });

// $("#textComment").keydown(function (e) { 
    
//     if (document.getElementById("textComment").value == "") {
//         document.getElementById("btnSendComment").disabled = true;
//     } else {
//         document.getElementById("btnSendComment").disabled = false;
//     }
// });   




  $.ajax({
            url: '/api/getComments',
            type: 'GET',
            success: function(result) {
             console.log(result);
            
              
           
           
             for (var j in result.articles){
             for (var i in result.comment){
                

                var comm = result.comment[i].artic._id;
                var arti = result.articles[j]._id;

                if(comm === arti){
                   
                 $('#commentbox').append(
                     
                     '<div class="commentcol m-4 p-3">'+'<h5 class="text-info name="artic" ">'+"@"+result.comment[i].userID.username+'<h5>'+
                     '<div class="text-dark" name="artic" >'+result.comment[i].comment+'</div>'+
                     '<small class="text-success">'+result.comment[i].artic._id+'</small>'+
                     '</div>'
                 )
               
                }
             }
            }
        }
})




})