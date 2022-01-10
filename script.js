let generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', function(){
     let l = Number(prompt("Enter desired password Length (HINT: Must be between 8 and 128 characters")), ca = prompt("Does your password require capital letters? (type 'yes' or 'no')").toUpperCase(), sy = prompt("Does your password require special characters? (type 'yes' or 'no')").toUpperCase(), num = prompt("Does your password require numbers? (type 'yes' or 'no')").toUpperCase(), lw = prompt("Does your password require lower case letters? (type 'yes' or 'no')").toUpperCase(), criteriaTypes = {
          number: ['1','2','3', '4', '5', '6', '7', '8', '9', '0'],
          upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
          lower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
          symbols: ['!','"', '#', '$', '%', '&',"'",'(', ')', '*', '+','-','.','/',':',';', '<', '=', '>', '?','[','\\',']', '^', '_', '`', '{', '|', '}', '~']
     }, tN = criteriaTypes.number, tU = criteriaTypes.upper, tL = criteriaTypes.lower, tS = criteriaTypes.symbols, result = '', uR=false, sR=false, nR=false, lR=false;
     function verifyNumbers(required) {
          switch (num){
               case "YES":
                    required = true;
                    nR = required;
                    return nR;
               case "NO":
                    required = false;
                    nR = required;
                    return nR;
          }
     }
     function verifyUpper(required) {
          switch(ca){
               case "YES":
                    required = true;
                    uR = required;
                    return uR;
               case "NO":
                    required = false;
                    uR = required;
                    return uR;
          }
     }
     function verifySymbols(required) {
          switch(sy) {
               case "YES":
                    required = true;
                    sR = required;
                    return sR;
               case "NO":
                    required = false;
                    sR = required;
                    return sR;
          }
     }
     function verifyLower(required) {
          switch(lw){
               case "YES":
                    required = true;
                    lR = required;
                    return lR;
               case "NO":
                    required = false;
                    lR = required;
                    return lR;
          }
     }
     function generatePassword() {
          let password = "";
          verifyNumbers(nR);
          if (nR === true){
               for (let n = 0; n < tN.length; n++){
                    result+= tN[n];
               }
          }
          verifyLower(lR);
          if (lR === true){
               for (let ll = 0; ll < tL.length; ll++){
                    result +=tL[ll];
               }
          }
          verifySymbols(sR);
          if (sR === true){
               for (let s = 0; s < tS.length; s++){
                    result += tS[s];
               }
          }
          verifyUpper(uR);
          if (uR === true){
               for (let u = 0; u < tU.length; u++) {
                    result += tU[u];
               }
          }
          //create password after all the types are added as options.
          for (let rand = 0; rand < l; rand++){
               password += result.charAt(Math.floor(Math.random()*l));
          }
          document.querySelector("#password").textContent = password;
     }
     generatePassword();

});

