import logo from './logo.svg';
import './App.css';
import { data, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';

function App() {
  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.userDetails.url, {
      method: SummaryApi.userDetails.method,
      credentials: 'include'
    })

    const dataApi = await dataResponse.json()
    console.log('data api: ', dataApi)
  }
  useEffect(() => {
    fetchUserDetails()
  }, [])
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails
      }}>
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
