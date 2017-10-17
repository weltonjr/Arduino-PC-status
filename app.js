const si = require('systeminformation')
const SerialPort = require('serial-node')
const Config = require('./config')

serial = new SerialPort();
//serial.use(Config.serialPort);
//serial.open();

let x = true
while(x){
    //serial.write('hi!');
    debug()
}

serial.close();




async function debug(){
    console.log("****\nHora: ", new Date(si.time().current).toLocaleTimeString())

    const dataTemp = await si.cpuTemperature()
    const dataMem = await si.mem()
    const dataLoad = await si.currentLoad()

    console.log("Temperatura: ", dataTemp.main)
    console.log("Memoria Livre(MB): ", Number((dataMem.available/1024)/1024).toFixed())
    console.log("Carga: ", dataLoad.currentload)
}
