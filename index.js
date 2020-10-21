function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = function() {
  return '';
};

BoardMember.prototype.approve = function() {
  return '';
};

BoardMember.prototype.doCharity = function() {
  return '';
};

BoardMember.prototype.releasePressStatement = function() {
  return 'You will see great things from Scuber';
};

BoardMember.prototype.sayHi = function() {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}`;
};
