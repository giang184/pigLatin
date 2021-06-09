// Utility Logic
function checkVowel(text) {
  if (text === 'a' || text === 'A' || text === 'e' || text === 'E' || text === 'i' || text === 'I' || text === 'o' || text === 'O' || text === 'u' || text === 'U') {
    return true;
  }
  else {
    return false;
  }
}
// Business Logic
function pigLatin(word) {
  if (checkVowel(word[0])) {
    return word + "way";
  }
  else {    
    if ((word[0] === 'q' || word[0] === 'Q') && (word[1] === 'u' || word[1] === 'U')) {
      return word.slice(2) + word.slice(0, 2) + "ay";
    }
    let marker = 0;   
    for (let index = 0; index < word.length; index++) {
      if (checkVowel(word[index])) {
        if (!(word[index] === 'u' && word[index - 1] === 'q')) {
          marker = index;
          break;
        }
      }
    }
    return word.slice(marker) + word.slice(0, marker) + "ay";
  }
}

//value = "1001"   index = 2
function binaryConverter(value) {
  value = value.toString();
  sum = 0;
  let power = 0;
  for(let index = value.length -1; index >= 0; index--)
  {
    sum += parseInt(value[index])*Math.pow(2, power);
    power++;
  }
  return sum;
}

function hexConverter(value) {
  sum = 0;
  let power = 0;
  for(let index = value.length -1; index >= 0; index--)
  {
    if(value[index]==='a')
    {
      sum += 10*Math.pow(16, power);
    }
    else if(value[index]==='b')
    {
      sum += 11*Math.pow(16, power);
    }
    else if(value[index]==='c')
    {
      sum += 12*Math.pow(16, power);
    }
    else if(value[index]==='d')
    {
      sum += 13*Math.pow(16, power);
    }
    else if(value[index]==='e')
    {
      sum += 14*Math.pow(16, power);
    }
    else if(value[index]==='f')
    {
      sum += 15*Math.pow(16, power);
    }
    else {
      sum += parseInt(value[index])*Math.pow(16, power);
    }
    power++;
  }
  return sum;
}


// UI Logic