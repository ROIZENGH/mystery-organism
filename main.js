// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
};

const pAequorFactory = (specimenNum, dna) => {
  return {
 specimenNum,
  dna, 
  mutate(){
    const randBase = Math.floor(Math.random()*15);
    let newRandBase = this.dna[randBase];
    while(this.dna[randBase === newRandBase]){
      newRandBase = returnRandBase();
    }
    this.dna[randBase]=newRandBase;
    return this.dna;
  },
  compareDNA(pAequor) {
    let newArray=[];
    for (let i=0;i< this.dna.length; i++){
      if(this.dna[i] === pAequor.dna[i]){
        newArray.push(this.dna[i]);
      }
    }
    console.log(`specimen #${this.specimenNum} and sepcimen #${pAequor.specimenNum} have ${newArray.length/this.dna.length}% DNA in common.`);
  },
  willLikelySurvive() {
    let goodBases =0;
    for(let i=0;i< this.dna.length; i++){
      if(this.dna[i]==="C" || this.dna[i]==="G"){
        goodBases++;
      }      
    }
    if((goodBases/this.dna.length)>=.6){
      return true;
    }
    else{
      return false;
    }
  },
  };
};

let poolOfSpecimens = [];

const populatePool = (numberOfSpecimens) =>{
  array = [];
  let i=0;
  let goodSpecimens = 0;
  while(goodSpecimens<numberOfSpecimens){
    newAequor = pAequorFactory(i+1,mockUpStrand());
    if(newAequor.willLikelySurvive()===true){
    array.push(newAequor);
    goodSpecimens++
    }
    i++;
  }
  return array;
}

poolOfSpecimens = populatePool(30);
console.log(poolOfSpecimens);

console.log(poolOfSpecimens.length);