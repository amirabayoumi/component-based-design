import { useState } from 'react';
import { Header, AsideMenu, Footer, Section, Errors } from './components';
import { usePokemonList } from './hooks';
import { ErrorContextProvider } from './contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

export const App = () => {
  const [selectId, setSelectId] = useState(null);
  const { list, isLoading } = usePokemonList();


  return (
    <BrowserRouter>
      <ErrorContextProvider>
        <Nav />
        
        <main className='main'>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route
              path="/list"
              element={
                isLoading ? (
                <p>Loading...</p>
              ) : (
                <AsideMenu list={list} />
              )
            }
          />
          <Route path="/pokemon/:pokemonId" element={<Section />} />
          </Routes>
        </main>
        <Footer />
      </ErrorContextProvider>
    </BrowserRouter>
  )}