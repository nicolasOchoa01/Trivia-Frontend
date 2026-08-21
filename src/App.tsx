import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./presentation/routes/AppRouter";
import { AppContextProvider } from "./presentation/context/AppContextProvider";
import { AuthContextProvider } from "./presentation/context/AuthContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <AuthContextProvider>
            <AppRouter />
          </AuthContextProvider>
        </AppContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
