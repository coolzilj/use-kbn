import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useKbn } from '../.';

const App = () => {
  const [text, setText] = React.useState('0');
  const [favNum, setFavNum] = React.useState(Math.floor(Math.random() * Math.floor(5)));
  console.log(favNum)

  const rootStyles = { position: 'relative', left: 'auto', right: 'auto', marginTop: '-340px' };
  const messageStyles = { animation: 'none' }
  const { element, say} = useKbn('/model/tia/model.json', '0 到 4 中， 你猜我最喜欢哪个数字？', 300, 280, rootStyles, messageStyles);

  const onClick = () => {
    if (+text === favNum) {
      say('竟然猜对了, 本小姐改主意了, 再猜一次')
      setFavNum(Math.floor(Math.random() * Math.floor(5)))
    } else {
      say('不对哦，再猜一次！')
    }
  }

  const containerStyle = {
    display: 'flex', 
    flexDirection: 'column' as 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    height: '100%',
    backgroundColor: '#f0f0f0',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  }

  const inputStyle = {
    fontSize: '30px',
    padding: '10px',
    borderRadius: '5px',
    border: 'solid 3px #452e4a',
    color: '#452e4a'
  }
  
  const buttonStyle = {
    marginLeft: '5px',
    background: '#452e4a',
    color: 'white',
    fontSize: '30px',
    padding: '10px',
    borderRadius: '5px',
    border: 'solid 3px #452e4a'
  }

  return (
    <div style={containerStyle}>
      <div style={{ position: 'relative' }}>
        <input type="text" onChange={ev => { setText(ev.target.value) }} value={text} style={inputStyle}/>
        <button onClick={onClick} style={buttonStyle} >猜</button>
      </div>
      { element }
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
