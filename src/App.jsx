import { useEffect, useState } from 'react'
// import { useEImzo } from 'react-eimzo-solijonovmuhammadali'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';

function App() {
  // const { certificates, createPkcs7, pkcs7 } = useEImzo()
  // const [pk, setPk] = useState(false)

  // const sertifikat = certificates[1] // 
  // useEffect(() => {
  //   // createPkcs7(sertifikat)
  //   setPk(true)

  // }, [pk])


  return (
    <>

      <Routes>
        

        <Route path="/" element={<Home />} />
       <Route path="/result" element={<Result/>} /> 
   
      </Routes>



    </>





  )
}

export default App
