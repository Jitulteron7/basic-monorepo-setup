import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AdminComponent } from '@repo/ui/admin';
import { NUMBER } from '@repo/common/config';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <AdminComponent />
        {`This is const ${NUMBER}`}
      </div>
    </>
  );
}

export default App;
