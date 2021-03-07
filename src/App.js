import React, { useState, useEffect } from "react";
import './App.css';
import { Switch } from 'antd';
import 'antd/dist/antd.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';



const DarkModeToggle = () => {

  const [isDark, setIsDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, []);

  const toggleThemeChange = () => {
    if (isDark === 'dark') {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
      setIsDark(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
      setIsDark(localStorage.getItem("theme"));
    }
  }

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={isDark}
        onChange={() => toggleThemeChange()}
      />

      <Switch checkedChildren='Light' unCheckedChildren='Dark' defaultChecked onChange={() => toggleThemeChange()} />
    </label>

  )
}




function App() {
  const [ketqua, setKetqua] = useState('')
  const [tf, setTF] = useState(false)


  const tinhketqua = () => {
    if (ketqua !== '') {
      setKetqua(eval(ketqua))
      setTF(true)
    }
  }

  const ac = () => {
    setKetqua('')
    setTF(false)

  }

  const del = () => {
    const del2 = ketqua
    setKetqua(del2.substring(0, del2.length - 1))

  }
  useEffect(() => console.log(ketqua))

  return (
    <div className="Caculator">

      <div className='display-caculator'>
        <div className='modee'>
          <DarkModeToggle />
        </div>
        <div className='display-result'>{ketqua}</div>
        <div className='main'>
          <div className='nutnhan'>
            <div className="number">
              <button onClick={() => setKetqua(ketqua + "7")} >7</button>
              <button onClick={() => setKetqua(ketqua + "8")} >8</button>
              <button onClick={() => setKetqua(ketqua + "9")} >9</button>
              <button onClick={() => setKetqua(ketqua + "4")} >4</button>
              <button onClick={() => setKetqua(ketqua + "5")} >5</button>
              <button onClick={() => setKetqua(ketqua + "6")} >6</button>
              <button onClick={() => setKetqua(ketqua + "1")} >1</button>
              <button onClick={() => setKetqua(ketqua + "2")} >2</button>
              <button onClick={() => setKetqua(ketqua + "3")} >3</button>
              <button style={{ width: '200%' }} onClick={() => setKetqua(ketqua + "0")} >0</button>
              <br />
              <button style={{ fontSize: '60px', paddingBottom: '20px' }} onClick={() => setKetqua(ketqua + '.')} >.</button>
            </div>

            <div className='tinh'>
              <button onClick={ac}>AC</button>
              <button disabled={tf} onClick={del}>DEL</button>
              <button onClick={() => setKetqua(ketqua + '+')} >+</button>
              <button style={{ fontSize: '60px' }} onClick={() => setKetqua(ketqua + '-')} >-</button>
              <button onClick={() => setKetqua(ketqua + '*')} >X</button>
              <button style={{ fontSize: '60px' }} onClick={() => setKetqua(ketqua + '/')} >÷</button>
              <button style={{
                width: '200%',
                fontSize: '60px'
              }} onClick={tinhketqua}>=</button>

            </div>
          </div>
        </div>

      </div>
      <MessengerCustomerChat
        pageId="108457081295779"
        appId="742330696473947"
      />
    </div>
  );
}

export default App;
