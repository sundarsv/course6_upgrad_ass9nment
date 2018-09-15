//function for adding likes and keeping a count of number of likes
var count =1;
function likeFn() {
    var template = count + ' person likes this!';
    count++;
    document.getElementById('likePara').innerHTML=template;
    document.getElementsByClassName('likeButton')[0].innerHTML='<i class="fa fa-thumbs-up"></i>'+"Liked!";
}
//function to show all comments with the latest comment coming first
function allCommt(id) {
        var templateOne = 'All Comments';
        document.getElementsByClassName('allCommt')[0].innerHTML=templateOne;
        var div = document.getElementsByClassName('showCommt')[0];
        var node = document.createElement('textarea'); 
        node.className ="textStyle"; 
        node.disabled = true;           
        var textnode = document.createTextNode(id.value);      
        node.appendChild(textnode);
        div.insertBefore(node,div.childNodes[0]) ; //using insertBefore() method to append before last element
}
//enabling editing of blog body by using contentEditable property
var count1=0;
function editFunction() {
    if(count1===0){
        document.getElementById("blogBody").contentEditable = true;
        document.getElementById("blogTitleNew").contentEditable = true;
        document.getElementsByClassName('editButton')[0].innerHTML="Save"+'<i class="fa fa-save"></i>';
        count1++;
    }else{
        document.getElementById("blogBody").contentEditable = false; 
        document.getElementById("blogTitleNew").contentEditable = false;
        document.getElementsByClassName('editButton')[0].innerHTML="Edit";
        count1=0;
    }
}
   
