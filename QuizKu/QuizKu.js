var jawab ='';
var benarJawab=0;
//Haha...i knew u gonna cheat for the answer :)
var quiz = [
  ['002','Which of these kills its victims by constriction','Andalucia','Anaconda','Andypandy','Annerobinson',2],
  ['003','Which of these might be used in underwater naval operations','Frogmen','Newtmen','Toadmen','Tadpolemen',1],
  ['004','In the UK, VAT stands for value-added ...','Transaction','Total','Tax','Trauma',3],
  ['010','How is a play on words commonly described','Pan','Pin','Pen','Pun',4],
  ['011','Which colour is used as a term to describe an illegal market in rare goods','Blue','Red','Black','White',3],
  ['012','Which character was first played by Arnold Schwarzenegger in a 1984','The Demonstrator', 'The Instigator','The Investigator', 'The Terminator',4],
  ['0019','Which of these is a fashionable district of London','Bulgaria' ,'Belgravia' ,'Belgrade' ,'Belgium',2],
  ['0103','In western films, what name is given to a gang of law enforcement', 'Bossy', 'Mossy', 'Glossy', 'Posse',4],
  ['0112','Which part of the body do bronchial infections mainly attack','Eyes', 'Liver', 'Spleen', 'Lungs',4],
  ['0113','Which of the following is not a geological period','Jurassic', 'Palaeozoic', 'Triassic', 'Boracic',4],
  ['0125','Which of these is a spicy Indian dish','Spaghetti', 'Biriani', 'Bellini', 'Crostini',2],
  ['0154','What name is given to a heavy, metal-headed, spiked club','Nutmeg', 'Mace', 'Saffron', 'Clove',2]
];
//prizes
var prize =[0,100,200,500,1000,2000,5000,10000,50000,100000,1000000];

// helper index 0 for 5050 help , index 1 for ask Luki
var helper = [true,true];

function prizefinal(nilai){
  return prize[nilai]*1000;
}

function periksajawab(quizNo,jawab){
  if(jawab.toUpperCase()==String.fromCharCode(64+quiz[quizNo][6])){
    return true;
  }
  else {
    return false;
  }
}


for (var i=1;i<=10;i++){

  //randomly select question based on quiz data
  var quizNo = Math.floor(Math.random()* quiz.length);

  while(quiz[quizNo][0]=='XXX'){
    quizNo = Math.floor(Math.random()* quiz.length);
  }

  //mark used question
  quiz[quizNo][0]='XXX';

  jawab=prompt(quiz[quizNo][1] + ' ?' +
    '\nA. ' + quiz[quizNo][2] +
    '\nB. ' + quiz[quizNo][3] +
    '\nC. ' + quiz[quizNo][4] +
    '\nD. ' + quiz[quizNo][5] +
    '\n\nPlease Select ABCD or F (50-50 Help) or L (ask Luki) '
  );

  if (jawab.toUpperCase()=='A' || jawab.toUpperCase()=='B'||jawab.toUpperCase()=='C'|| jawab.toUpperCase()=='D'){

      if(periksajawab(quizNo,jawab)){
        alert('Nice Answer!');
        benarJawab++;
      }
      else{
        alert('Oops...Sorry wrong answer');
        break ;
      }
  }
  else if(jawab.toUpperCase()=='L'){
    luki=prompt('Luki : Hi there ... I think the answer is ' + String.fromCharCode(65 + Math.floor(Math.random()* 4)) +'\n\nDo you agree with Luki\'s answer?\n\nPlease select ABCD');
    if(periksajawab(quizNo,luki)){
      alert('Nice Answer!');
      benarJawab++;
    }
    else{
      alert('Oops...Sorry\nBlame it Luki');
      break ;
    }
  }
  else if(jawab.toUpperCase()=='F'){
    var cekacak;
    while(cekacak!=2){
      var acak =[1,1,1,1];
      for (var j=0;j<=3;j++){
        acak[j]=Math.floor(Math.random()* 2);
      }
      acak[quiz[quizNo][6]-1]=1;
      cekacak=0;
      for (var j=0;j<=3;j++){
        cekacak+=acak[j];
      }
    }
    pilihan='';
    if(acak[0]==1){pilihan+='A.'+ quiz[quizNo][2];}
    if(acak[1]==1){pilihan+='\nB.'+ quiz[quizNo][3];}
    if(acak[2]==1){pilihan+='\nC.'+ quiz[quizNo][4];}
    if(acak[3]==1){pilihan+='\nD.'+ quiz[quizNo][5];}
    jawab=prompt('Please select from answer below\n' + pilihan);
    if(periksajawab(quizNo,jawab)){
      alert('Nice Answer!');
      benarJawab++;
    }
    else{
      alert('Oops...Sorry wrong answer');
      break ;
    }
  }
  else{
    alert('Oops...why you do that');
    break ;
  }

}

alert('Congrats... youve got ' + prizefinal(benarJawab).toLocaleString() + ' Rupiah' );

location.reload();
