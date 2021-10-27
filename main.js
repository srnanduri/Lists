var names = [];

function submit() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var name4 = document.getElementById("name4").value;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);
    console.log(names);
    document.getElementById("result").innerHTML = names;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
    document.getElementById("clear").style.display = "inline-block";
}

function sort() {
    names.sort();
    console.log(names);
    document.getElementById("result").innerHTML = names;
}
function clear() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("sort").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("name1").innerHTML = "";
    document.getElementById("name2").innerHTML = "";
    document.getElementById("name3").innerHTML = "";
    document.getElementById("name4").innerHTML = "";
}