import Star from "./components/Star";
import StarRating from "./components/StarRating";
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <main>
      <StarRating />
      <button onClick={() => setShowDialog(true)}>Dialog</button>
      {showDialog && <Dialog closeDialog={() => setShowDialog(false)} />}
    </main>
  );
}

export default App;
