class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const enhancedObject = {
      ...rawObject,
      valueOf() {
        return rawObject.age;
      },
    };
    return enhancedObject;
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const enhancedObject = {
      ...rawObject,
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`;
      },
    };
    return enhancedObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    const enhancedObject = {
      ...rawObject,
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${rawObject.name}",age=${rawObject.age}]`,
          number: rawObject.age,
        };

        return types[coercionType] || types.string;
      },
    };
    return enhancedObject;
  }
}

module.exports = ObjectMethodsService;
