var listItems = document.querySelectorAll("ul li");
var rate = ''
var x = document.getElementById("box-2");
var y = document.getElementById("box-1");
var msgBox = document.getElementById("msgBox")
listItems.forEach(function(item) {
  item.onclick = function(e) {
    removeBeforeSelect()
    this.classList.remove('bg-DarkBlue')
    this.classList.remove('text-MediumGray')
    this.classList.add('bg-LightGray')
    this.classList.add('text-white')
    rate = this.innerText;
  }
});

document.getElementById("submitButton").addEventListener("click", function() {
  submited(x , y)
})

function submited(x , y) {
  x.classList.remove("hidden")
  y.classList.add("hidden")
  showMsg(rate)
}

function setDefault(){
  var x = document.getElementById("box-2");
  x.classList.remove = "hidden";
  x.classList.add = "hidden"
  x = document.getElementById("box-1")
  x.classList.remove = "hidden";
}

function showMsg(rate){
  msgBox.innerHTML = `You selected ${rate} out of 5`
}

function removeBeforeSelect(){
  listItems.forEach(function(item){
    item.classList.remove("bg-LightGray")
    item.classList.remove("text-white")
    item.classList.add("bg-DarkBlue")
    item.classList.add("text-MediumGray")
  })
}