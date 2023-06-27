import React, {useState} from 'react';
import './App.css';
import {Button} from "./site/Button";
import {NewCompoment} from "./NewCompoment";

function App() {
    // const Button1Foo = (subscriber:string, age:number) => {
    //     console.log(subscriber, age)
    // }
    // const Button2Foo = (subscriber:string, age:number) => {
    //     console.log(subscriber, age)
    // }
    // const Button3Foo = () => {
    //     console.log("Im stupid button")
    // }
  // let [a, setA] = useState(1)
  //   const onclickHandler = () => {
  //     setA(++a)
  //  }
  //  const onclickHandler2 = () => {
  //     setA(0)
  //  }
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    const [name, setBtnName] = useState('all')

let currentMoney = money;
    if(name==='dollars'){
            currentMoney=money.filter(el=>el.banknots==='Dollars')
        }
    if(name==='rubles'){
            currentMoney=money.filter(el=>el.banknots==='RUBLS')
        }


const onclickFilterHandler = (name:string) => {
        setBtnName(name)
}
    return (
    // <div className="App">
    //
    //         {/*<h1>{a}</h1>*/}
    //         {/*<button onClick={onclickHandler}>number</button>*/}
    //         {/*<button onClick={onclickHandler2}>0</button>*/}
    //         {/*<Button name={'MyYoutubeChannel - 1'} callBack={()=>Button1Foo("Im Vasya", 21)}/>*/}
    //         {/*<Button name={'MyYoutubeChannel - 2'} callBack={()=>Button2Foo("Im Ivan", 34)}/>*/}
    //         {/*<Button name={'StupidButton'} callBack={Button3Foo}/>*/}
    //       {/*<Header title={"New body"}/>*/}
    //       {/*<Body titleBody={"New body"}/>*/}
    //       {/*<Footer titleFooter={"NewFooter"}/>*/}
    //       {/*  <NewStudents students={students}/>*/}
    //       {/*  <Cars cars={topCars}/>*/}
    // </div>
       <NewCompoment currentMoney={currentMoney} callback={onclickFilterHandler}/>
  );
}

export default App;
