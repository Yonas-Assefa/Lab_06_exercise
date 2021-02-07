const db1 = indexedDB.open("db1");
db1.onupgradeneeded =e=>{
    alert("upgrade nedded")
}

db1.onerror=e=>{
    alert("error")
}

db1.onsuccess =e=>{
    alert("success")

}