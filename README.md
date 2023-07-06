# 📑 mui-industrial

![](https://img.shields.io/npm/v/mui-industrial)  ![](https://img.shields.io/bundlephobia/min/mui-industrial) ![](https://img.shields.io/node/v/mui-industrial)
![](https://img.shields.io/npm/l/mui-industrial)

_**NOTE**: Project is still in development and is not yet ready for production use. Use without caution._

---


A zero-maintenance/batteries-included panel manager inspired by VSCode style/aspect that adds via Material-UI (5) elements a self populating/managed and state keeping organization of generated children status bar elements, panels, shortcuts and more.

A root level ```ContextAPI``` driven provider/wrapper that allows for the creation of status bars with a variety of elements that can be clicked or have a menu attached to them. The status bar is a ```self organizing``` manager that can be placed on either end of the screen and can be configured to even feature consoles and other elements.


---

### 💡 See it and learn it

A few links to get you going:

- See it in action - **[Running project](https://rand0mc0d3r.github.io/mui-status-helper/)**

- Documentation and samples - **[Documentation](https://github.com/rand0mC0d3r/mui-status-helper#readme)**

---

## 📦 Features

- **Zero Maintenance** - No need to worry about managing the state of the panels, the library will handle it for you.
- **Batteries Included** - The library comes with a variety of pre-built components that can be used out of the box.
- **Customizable** - The library is built on top of MUI and Emotion, so you can customize it to your liking.
- **Easy to use** - The library is built to be easy to use and understand.
- **TypeScript** - The library is written in TypeScript and comes with type definitions.
- **React 17+** - The library is built on top of React 17+.
- **MUI 5+** - The library is built on top of MUI 5+.


---

## 🪄 Installation

Install the latest version with your favorite package manager.


```
npm install @rand0mC0d3r/mui-industrial --save
```

```
yarn i @rand0mC0d3r/mui-industrial
```


## Quick start for your project

```
import { IndustrialProvider } from 'mui-industrial'
...


function App() {
  ...

  return <>
    ...
    <IndustrialProvider>
      ... your content
      <Status ...>[] // status elements
    </IndustrialProvider>
    ...
  </>
}

export default App

```

---

### Industrial Provider

The Industrial Provider is the root level component that will provide the context for the status bar and its elements.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| **`position`** | `PlacementPosition` | `top` | The position of the status bar. |
| **`children`** | `React.ReactNode` | `undefined` | The children of the provider. |
|

## Hooks

### useRegisterSnackbar()

There are 2 hooks provided for snackbar population/cleanup: ```handleSnackbarRegister``` and ```handleSnackbarCleaning```.

```
import { useRegisterSnackbar } from 'mui-industrial'


export default function () {
  const { handleSnackbarRegister, handleSnackbarCleaning } =  useRegisterSnackbar()

  const generateInfoNotification = (message = 'Sample Info Notification') => {
    handleSnackbarRegister({
      message,
      source: 'AutoFixer',
      severity: Severity.INFO,
    })
  }

  const cleanAllNotifications = () => {
    handleSnackbarCleaning()
  }

  return <>
    <button onClick={generateInfoNotification}>Create sample notification</button>
    <button onClick={cleanAllNotifications}>Clear all notifications</button>
  </>
}

```

The ```handleSnackbarRegister``` allows you to create a snackbar that will be displayed on the screen.

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| **`severity`** | `SnackbarSeverity` | `info` | The severity of the snackbar. |
| **`actions`** | `React.ReactNode` | `undefined` | The actions of the snackbar. |
| **`source`** | `string` | `undefined` | The source of the snackbar. |
| **`message`** | `string` | `undefined` | The message of the snackbar. |
| **`code`** | `string` | `undefined` | The code of the snackbar. |
| **`autoHideDuration`** | `number` | `undefined` | The auto hide duration of the snackbar. |

 <!-- ({ severity, actions, source, message, code, autoHideDuration } -->


The ```handleSnackbarCleaning``` allows you to clean all the snackbar messages from the screen.


---
## Dependencies expected (peerDependencies)

The library is built on top of the following dependencies:
 - **React && ReactDOM 17.0+**
 - **MUI 5.0+**
 - **MUI Icons-Material 5.0+**
 - **MUI Styles 5.0+**
 - **Emotion React 11.0+**
 - **Emotion Styled 11.0+**

 and related @types

 ## Package dependencies

  - **Re-Resizable 6.9.9+**
  - **React-Resizable 3.0.4**
