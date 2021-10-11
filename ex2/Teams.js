"use strict";

class Team {
  constructor(teamname){
      console.log('Constructed!');
      this.teamname = "Brock";
      this.trainer = "Ash";
      this.roster = [];

  }
  describe(){
    console.log('describe');
    return `${this.teamname} with trainer ${this.trainer} has these pokemon: ${[...this.roster]}`;
    
    
}  
 }   

export default Team;