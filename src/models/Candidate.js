class Candidate {
  constructor(props) {
    this.fName = props.fName;
    this.lName = props.lName;
    this.id = props.id;
  }

  // toJSON() {
  //   return {
  //     fname: this.fName,
  //     lName: this.lName,
  //     fullName: this.fullName,
  //   };
  // }

  fullName() {
    return `${this.fName} ${this.lName}`;
  }
}

export default Candidate;
