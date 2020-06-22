import React from 'react';
import './index.scss';

interface IProps {
  data: any;
}

interface Json {
  [key: string]: string
}

function complexValueRender(value: Json | any[]) {
  const isArray = Array.isArray(value);

  return isArray ? (
    <>
      {`[ `}{' '}
      <div className="array">
        {(value as any[]).map((v: any, i: number) => (
          <div key={i} className="line">
            {valueRender(v)},
          </div>
        ))}
      </div>
      ]
    </>
  ) : <>
    {`{ `}
    <div className="json">{jsonRender(value as Json)}</div>
    {`}`}
  </>
}

function simpleValueRender(value: any, className: string = ''): React.ReactNode {
  const valueType: string = typeof value;
  return (
    <span className={className !== '' ? className : String(valueType)}>
      {String(value)}
    </span>
  );
}

function valueRender(value: any): React.ReactNode {
  let obj = value;
  let valueType = typeof obj;

  if (valueType === 'string') {
    try {
      obj = JSON.parse(value);
    } catch {
      // you must do some thing in catch
    }
  }
  valueType = typeof obj;

  const isSimpleValue = ['string', 'number', 'boolean', 'undefined'].includes(valueType) || !value;

  // null
  if (isSimpleValue && valueType === 'object') {
    return simpleValueRender(value, "null");
  }

  return isSimpleValue ? simpleValueRender(value) : complexValueRender(obj);
}

function jsonRender(jsonObj: Json) {
  return Object.keys(jsonObj).map((key) => {
    const value = jsonObj[key];
    return (
      <div key={key} className="line">
        <span className="key">{`${key} : `}</span>
        <span className="value">{valueRender(value)}</span>
      </div>
    );
  });
}

const Format2Json2View: React.FC<IProps> = ({ data }) => {
  return <code className="format2Json2View">{valueRender(data)}</code>;
};

export default Format2Json2View;
