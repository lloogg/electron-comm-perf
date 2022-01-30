import { useEffect } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
const App = () => {
  let externalWindow = null;
  let containerEl = document.createElement('div');
  useEffect(() => {
    return () => {
      externalWindow.close();
    };
  }, []);
  return (
    <div
      onClick={() => {
        externalWindow = window.open('about:blank', 'windowPortal');
        externalWindow.document.body.appendChild(containerEl);
        createPortal(<Apple />, containerEl);
      }}
    >
      hello world
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

const Apple = () => {
  return <div>apple</div>;
};
