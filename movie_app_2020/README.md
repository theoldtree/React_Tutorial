This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Common Knowledge
1. return 내에서 함수를 이용할때는 {}
2. Component는 함수 자체이다. -> 태그만 사용
3. Comopnent내에서 props로 데이터 전달 가능
4. 배열을 이용할때는 map함수를 이용하면 좋음
5. 함수의 정의 -> function Something(){}
6. Hooks(useState)는 오직 function Component내에서만 사용이 가능하다

### index.js

App.js 를 실행시키는 코드가 있음. 한개의 컴포넌트만 실행 가능 (ex. App.js). root 내로 element를 감싸준다

### Component(함수)

리액트에서 작동하는 원리, *somthing.js* **(import React from 'react 필수)** 파일에서 함수를 component로 바꿔 준다.
바꾼 component를 활용하기 위해서 *something.js*파일에서 eport 를 시켜 주어야 한다.

```
import React from 'react';

export default function Something(){
  return(
    ~~~
  )
}

```

### Props

Component 내부의 데이터라고 볼수 있다. props를 전달하는 방법에는 두가지가 있다. 

* funtion *Component(props)* -> *props.something* 으로 값을 전달, 태그 내에 쓸때는 {}으로 감싸준다. 하나의 Component에 있는 여러개의 props를 전달받을 수 있다. 

* function *Component({something1, something2, something3})* -> props를 쓸필요 없이 props의 이름을 직접 명시를 한다. 활용할때는 {}내에 써주도록 한다.

### 내부 함수의 형태 두가지 -> ()안에 들어가는 함수
* 
```
function(props) {
  console.log(props)
  return(
    ~~~~
  );
}
```

*
```
props => {
  console.log(props);
}
```

### 배열을 이용할 때 사용하는 함수 map
1. const를 이용해 배열 생성 -> object로 생성 const something = [{},{},{},{}]
2. 배열을 이용하여 인자값마다 적용할 Component 함수가 있어야함 
```
function Comopnent({name, picture}){
  return
    <div>
      <h2> i like {name} </h2>
      <img src = {piecture} />
    </div>
}  
```
3. somthing.map을 이용해 렌더링 -> something.map(props => {console.log(props)}), something.map(props => <Component name = "props.~~", picture = props.source key = props.key/>)
4. **map 함수를 이용해 렌더링 할때는 반드시 함수안에 key값을 지정해주기**

### useState로 상태관리
1. import React, {useState} from 'react';
2. Component 내에 const [state, setState] = useState(object, number, string, array 등의 형태)로 state값을 정의함.
3. Component 내에서 함수를 생성함 으로써 setState(~~) 로 state에 관한 상태를 관리한다.

### 리액트 lifecycle 
* Class를 통한 관리 -> state 와 setState이용
<<<<<<< HEAD
  - **Mounting** : 컴포넌트가 screen에 출력이 될때
    1. constructor()
    1. **render()**
    1. **componentDidMount()** : 컴포넌트가 render를 할때
  - **Updating** : State를 변경할 때, setState를 실행할 시 실행됨 *(4~5가 반복)*
    1. **render()** : 처음에 실행되고 다시 실행
    1. **componentDidUpdate()**
  - **Unmounting**
    1. **comonentWillUnmount()**
=======
  1. **Mounting** : 컴포넌트가 screen에 출력이 될때  
    1.constructor()  
    2.**render()**  
    3.**componentDidMount()** : 컴포넌트가 render를 할때  
  1. **Updating** : State를 변경할 때, setState를 실행할 시 실행됨(render와 compnentDidUpdate 반복)  
    4.**render()** : 처음에 실행되고 다시 실행  
    5.**componentDidUpdate()**  
  1. **Unmounting**  
    6.**comonentWillUnmount()**  
>>>>>>> 9072a35f6522c3062f722010af95e78c883d727d
* Hook을 통한 관리(렌더링과 effect) -> useState, useEffect 이용
  - useEffect : 렌더링 이후에 어떤일을 수행해야하는지 말함, componentDidMount,componentDidUpdate, componentWillUnmount가 합쳐짐
  - 여러개의 state를 사용 할 수 있으므로 state 별로 effect를 관리할 수 있음. 단계별로 렌더링을 관리했던 위의 방식(버그 발생가능성도 있음)과 비교하면 매우 편리
  - 자세한 내용 : https://ko.reactjs.org/docs/hooks-effect.html


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
