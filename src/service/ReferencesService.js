class ReferencesService {
  getCounterCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const newObject = object; // copying only the memory ref
    return newObject;
  }

  getCounterWithoutCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    // Also viable: Object.create(object)
    // Also viable: Object.assign({},object)
    const newObject = { ...object }; // generating a new object based on the first one
    return newObject;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    // NodeJS 17+
    // const newObject = structuredClone(object); // https://github.com/HalexV/jsexpert-challenge02-lifecycle/blob/50a58f7d884613d2acce9a25177f798931d6d9a4/src/service/ReferencesService.js#L17

    // Also viable: _.deepClone(object) // using lodash
    const newObject = JSON.parse(JSON.stringify(object)); // or use lodash, maybe?
    return newObject;
  }
}

module.exports = ReferencesService;
