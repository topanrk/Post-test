
var namaBarang = parseInt(prompt('Nama Barang'))
switch(namaBarang){
    case ('komputer') :
        document.write('Komputer')
        break
    case ('monitor') :
        document.write('Monitor')
        break
    case ('keyboard') :
        document.write('Keyboard')
        break
    case ('mouse') :
        document.write('Mouse')
        break
    default :
        document.write('Maaf barang yang anda cari tidak ada')
}

var jmlBarang = parseInt(prompt('Jumlah Barang :'))
var hrgBarang = parseInt(prompt('Harga Barang :'))

document.write('Nama Barang : ' +namaBarang+ '<br>')
document.write('Jumlah Barang : ' +jmlBarang+ '<br>')
document.write('Harga Barang : ' +hrgBarang+ '<br>')

