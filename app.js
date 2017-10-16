const si = require('systeminformation');

console.log("Hora: ", new Date(si.time().current).toLocaleTimeString())

si.cpuTemperature().then(data=>{
    console.log("Temperatura: ", data.main)
})

si.mem().then(data=>{
    console.log("Memoria Livre(MB): ", Number((data.available/1024)/1024).toFixed())
})

si.currentLoad().then(data=>{
    console.log("Carga: ", data.currentload)
})

