function hesapla() {


    var vize = Number(document.getElementById("not1").value);
    var final = Number(document.getElementById("not2").value);
    var yil = Number(document.getElementById("not3").value);
     var but = Number(document.getElementById("not4").value);
    const devam = document.getElementById("bb");
      const gelme = document.getElementById("aa");
       const evt = document.getElementById("ee");
      const hyr = document.getElementById("hh");
     var ortalama = (vize*0.4 +final*0.6) +yil +but ;
     var ortalamaa = (vize*0.4 +but*0.6) +yil ;
   
        
   if(final.value>100)
   {
    document.write("geçerli sayı yaz");
   }
 else if(vize.value>100)
   {
    document.write("geçerli sayı yaz");
   }
   else  if(but.value>100)
   {
    document.write("geçerli sayı yaz");
   }
   else  if(yil.value>100)
   {
    document.write("geçerli sayı yaz");
   }
   else if(ortalama>=90 )
    {
        document.write("A1 aldınız " + ortalama);
    }
   else if(ortalama>=80 && ortalama<=89 )
    {
        document.write("A2 aldınız" + ortalama);
    }
    else if(ortalama>=70 && ortalama<=79)
    {
        document.write("B1 aldınız"+ ortalama);
    }
    else if(ortalama>=65 && ortalama<=69)
    {
        document.write("B2 aldınız"+ ortalama);
    }
   else   if(ortalama>=60 && ortalama<=64)
    {
        document.write("C aldınız" + ortalama);
    }
  
   else if(evt.checked )
      {
        document.write(ortalamaa);
      }
 else if(hyr.checked )
      {
        document.write("bütleme girmemiş");
      }
   else if(devam.checked )
      {
        document.write("f1 kaldı");
      }

      else if(gelme.checked)
      {
        document.write("f2 kaldı");
      }

    else if(ortalama<50)
    {
        document.write("kaldı "+ortalama);
    }
 
}

function sil() {
    
}


