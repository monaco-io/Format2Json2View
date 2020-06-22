const testJson = {
  a: 1,
  b: "1",
  c: undefined,
  d: null,
  e: true,
  f: false,
  g: [1, "2", true, false, null, undefined],
  h: {
    a: 1,
    b: "1",
    c: undefined,
    d: null,
    e: true,
    f: false,
    g: [
      1,
      "2",
      true,
      false,
      null,
      undefined,
      {
        a: 1,
        b: "1",
        c: undefined,
        d: null,
        e: true,
        f: false,
        g: [1, "2", true, false, null, undefined],
      },
    ],
  },
};

const testJsonString = `{"a":1,"b":true,"d":null,"e":true,"f":false,"g":[1,"2",true,false,null,null]}`;

export { testJson, testJsonString };
