class StatementsService {
  getReturnBasedOnStatement(condition1, condition2) {
    // TODO: use condition stations && or || in order to return the expected value
    return condition1 || condition2;
  }

  getReturnBasedOnStatement2(condition1, condition2) {
    // TODO: use condition stations && or || in order to return the expected value
    return condition1 && condition2;
  }

  getReturnBasedOnStatement3(condition1, condition2, condition3) {
    // TODO: use condition stations && or || in order to return the expected value (chaining all conditions)
    return (condition1 && condition2) || condition3;
  }

  getReturnBasedOnStatement4(condition1, condition2, condition3) {
    // TODO: use condition stations && or || in order to return the expected value (chaining all conditions)
    return (condition1 || condition2) && condition3;
  }
}

module.exports = StatementsService;
