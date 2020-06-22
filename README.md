# Format2Json2View

> Format2Json2View is a React component for displaying JSON objects.Supports automatically formatting json format strings into json.

## Installation Instructions

Install this component with [NPM](https://www.npmjs.com/package/format2json2view).

```shell
npm i format2json2view
```

Or add to your package.json config file:

```json
"dependencies": {
    "format2json2view": "latest"
}
```

## Implementation Example

### Json type

```typescript
// import the Format2Json2View component
import ReactJson from 'Format2Json2View'

const json = {a:1,b:true,c:'c'}

// use the component in your app!
<Format2Json2View source={json}/>
```

### Json format string

```typescript
// import the Format2Json2View component
import ReactJson from 'Format2Json2View'

const jsonStr = `{"a":1,"b":true,"d":null,"e":true,"f":false,"g":[1,"2",true,false,null,null]}`

// use the component in your app!
<Format2Json2View data={json}/>
```

![png](https://raw.githubusercontent.com/ASmallBean/MD-Images/master/uPic/2020062213573550AIlP.pngimage/png)

## Props

| Name     | Type          | Description                             |
| :------- | :------------ | :-------------------------------------- |
| `source` | `json object` | Supports formatting json format strings |

## TODO

- rewrite webpack
