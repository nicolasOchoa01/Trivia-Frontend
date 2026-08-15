import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./presentation/routes/AppRouter";
import { AppContextProvider } from "./presentation/context/AppContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <AppRouter />
        </AppContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
