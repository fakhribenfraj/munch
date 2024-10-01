const compare2Objects = (obj1: any, obj2: any) => {
  let objEqual = false;
  const obj1Keys = Object.keys(obj1).sort();
  const obj2Keys = Object.keys(obj2).sort();
  if (obj1Keys.length === obj2Keys.length) {
    const areEqual = obj1Keys.every((key, index) => {
      const objValue1 = obj1[key];
      const objValue2 = obj2[obj2Keys[index]];
      return objValue1 === objValue2;
    });
    if (areEqual) {
      objEqual = true;
    }
  }
  return objEqual;
};
const createObjectFromEntries = (entries: any) => {
  let result: any = {};

  for (let key of Object.keys(entries).filter(
    (entry) => !entry.includes("$ACTION")
  )) {
    const keyParts = key.split(".");
    let resultPart = result;
    for (let i = 0; i < keyParts.length; i++) {
      const k = keyParts[i];

      if (!(k in result)) {
        resultPart[k] = {};
      }
      if (i < keyParts.length - 1) {
        resultPart = resultPart[k];
      }
    }
    resultPart[keyParts[keyParts.length - 1]] = entries[key];
  }
  return result;
};
export { compare2Objects, createObjectFromEntries };
