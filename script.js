let saveFile = () => {
    const ism = document.getElementById('ism');
    const familia = document.getElementById('familia');
    const sharif = document.getElementById('sharif');
    const tel = document.getElementById('tel');
    const hudud = document.getElementById('hudud');
    const maktab = document.getElementById('maktab');
    const sinf = document.getElementById('sinf');
    const fan = document.getElementById('fan');
    const maktab_bal = document.getElementById('maktab_bal');
    const hudud_bal = document.getElementById('hudud_bal');
    let data = 
        '\r Ismi: ' + ism.value + ' \r\n ' + 
        'Familiyasi: ' +familia.value + ' \r\n ' + 
        'Otasining ismi: ' + sharif.value + ' \r\n ' + 
        'Tel raqam: ' + tel.value + ' \r\n ' + 
        'Hudud: ' + hudud.value + ' \r\n ' + 
        'Maktab: ' + maktab.value + ' \r\n ' + 
        'Sinf: ' +sinf.value + ' \r\n ' + 
        'Fan: ' + fan.value + ' \r\n ' + 
        'Maktab_bali: ' + maktab_bal.value + ' \r\n ' + 
        'Hudud_bali: ' + hudud_bal.value + ' \r\n ' + 
        '----------------------------------------';
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	  

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}