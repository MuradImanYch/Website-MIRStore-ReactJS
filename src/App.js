import React from 'react';
import './App.css';
import {AppProvider} from "./context/providers/app.provider";
import ContentComponent from "./components/common/content.component";


const App = () =>  {

  return (
    <AppProvider>
      <ContentComponent />
    </AppProvider>
  );
}

export default App;
