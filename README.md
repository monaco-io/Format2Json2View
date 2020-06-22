# Format2Json2View 

> Format2Json2View is a React component for displaying JSON objects.Supports automatically formatting json format strings into json.  

## Installation Instructions
Install this component with [NPM](https://www.npmjs.com/package/format2json2view).
```shell
npm install --save format2json2view
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
<Format2Json2View data={json}/>
```

### Json format string

```typescript
// import the Format2Json2View component
import ReactJson from 'Format2Json2View'

const jsonStr = "{'a':1,'b':true}"

// use the component in your app!
<Format2Json2View data={json}/>
```

## Props

Name|Type|Description
|:---|:---|:---
`data` | `json object`| Supports formatting json format strings


## TODO

- remove create-react-app
- rewrite webpack
