const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevEkleBtn = document.querySelector('.btn-gorev-ekle');
const gorevListesi = document.querySelector('.gorev-listesi');

yeniGorevEkleBtn.addEventListener('click',gorevEkle);
gorevListesi.addEventListener('click',gorevSilTamamla);


function gorevSilTamamla(e){
    const tiklanilanEleman = e.target;
    if(tiklanilanEleman.classList.contains('gorev-btn-tamamlandi')){
        console.log('Cheched tıklandı');
        tiklanilanEleman.parentElement.classList.toggle('gorev-tamamlandi');
    }
    if(tiklanilanEleman.classList.contains('gorev-btn-sil')){
        console.log('Sil tıklandı');
        // tiklanilanEleman.parentElement.remove();
        tiklanilanEleman.parentElement.classList.toggle('kaybol')
        tiklanilanEleman.parentElement.addEventListener("transitionend",function(){
            tiklanilanEleman.parentElement.remove();
        })
    }
    e.preventDefault();
}




function gorevEkle(e){
    e.preventDefault();

    //div oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');

    //Li oluşturma
    const gorevLi = document.createElement('li');
    gorevLi.classList.add('gorev-tanim');
    gorevLi.innerText = yeniGorev.value;
    gorevDiv.appendChild(gorevLi);

    //tamamlandı butonu ekleme
    const gorevTamamBtn = document.createElement('button');
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('gorev-btn-tamamlandi');
    gorevTamamBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    gorevDiv.appendChild(gorevTamamBtn);

    //sil butonu 
    const gorevSilBtn = document.createElement('button');
    gorevSilBtn.classList.add('gorev-btn');
    gorevSilBtn.classList.add('gorev-btn-sil');
    gorevSilBtn.innerHTML = '<i class="fas fa-trash"></i>';
    gorevDiv.appendChild(gorevSilBtn);
    yeniGorev.value = '';

    //ul ye oluşturduğum div i ekleme
    gorevListesi.appendChild(gorevDiv);
}