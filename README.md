# **onemapsg**

[![npm package](https://img.shields.io/npm/v/onemapsg)](https://www.npmjs.com/package/onemapsg)
[![npm downloads](https://img.shields.io/npm/dt/onemapsg)](https://www.npmjs.com/package/onemapsg)
[![GitHub issues](https://img.shields.io/github/issues/ahzhezhe/onemapsg)](https://github.com/ahzhezhe/onemapsg/issues)
[![GitHub license](https://img.shields.io/github/license/ahzhezhe/onemapsg)](https://github.com/ahzhezhe/onemapsg/blob/master/LICENSE)

Helper library for using OneMap APIs (https://docs.onemap.sg/).

## **Install via NPM**

```
npm install onemapsg
```

## **Usage**

```typescript
import OneMap from 'onemapsg';

// Credential is optional, you do not need to supply credential if you are using common APIs only.
const onemap = new OneMap({
  email: 'your_email',
  password: 'your_password'
});

const result = await onemap.search.search({
  searchVal: '542226',
  returnGeom: true,
  getAddrDetails: true
});
```
