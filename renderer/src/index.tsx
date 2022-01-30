import { useEffect, useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
const Apple = () => {
  return <div>apple</div>;
};

const App = () => {
  let externalWindow = null;
  let containerEl = document.createElement('div');
  const [show, setShow] = useState(false);
  useEffect(() => {
    return () => {
      externalWindow.close();
    };
  }, []);
  return (
    <div
      onClick={() => {
        externalWindow = window.open('about:blank', 'windowPortal');
        createPortal(<Apple />, containerEl);

        externalWindow.document.body.appendChild(containerEl);
      }}
    >
      hello world
      {/* {show && } */}
      <Apple />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
