// Kullanıcıdan kaç adet isim gireceğini soralım
// Girdiği her bir ismi "isimler" dizisine kaydedelim.
// Kaydettikten sonra bir listeleyelim.
// Daha sonra tüm girilen isimleri alfabetik olarak sıralayalım. (ipucu: sort() 'u araştırabilirsiniz)

let firstNames = []
let addNames = Number(prompt('Kaç adet isim gireceğinizi sayı olarak yazınız.'));
let firstName;

function listNames(){
  for(let i = 0; i < addNames; i++){
    firstName = prompt('Girmek istediğiniz isimi yazınız.').toLowerCase();
    firstNames.push(firstName);
  }
  for(let i = 0; i < firstNames.length; i++){
    let number = i + 1;
    console.log(`${number}. ${firstNames[i]}`);
  }
}

function sortNames(){
  console.log('Girdiğiniz isimlerin alfabetik sıralaması:');
  firstNames.sort();
  for(let i = 0; i < firstNames.length; i++){
    let number = i + 1;
    console.log(`${number}. ${firstNames[i]}`);
  }
}

listNames();
sortNames();