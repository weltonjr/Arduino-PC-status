Data = require('./classes')
const si = require('systeminformation');
const serial = require('serial-node');


// serial.use('COM3');
// serial.open();

try{
    getData()
}
finally{
    //serial.close();
}

function send(data) {

    //serial.write('hi!');
    console.log(data)
}

async function getData() {
    let _data = new Data()

    _data.temperaturaCpu = await si.cpuTemperature()
    _data.memoriaLivre = await si.mem()
    _data.cargaAtual = await si.currentLoad()

    send(_data)

    getData()
}

