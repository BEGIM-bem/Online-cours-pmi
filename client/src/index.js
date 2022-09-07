import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Headers from './components/Headers/Headers.jsx';
import About from './pages/About/About.jsx';
import Course from './pages/Course/Course.jsx'
import Reviews from './pages/Reviews/Reviews.jsx'
import Python from './Course/Python/Python.jsx';
import Basic from './Course/Basic/Basic.jsx'
import WebSite from './Course/WebSite/WebSite.jsx'
import Androids from './Course/Androids/Androids.jsx';
import Java from './Course/Java/Java.jsx';
import Sql from './Course/Sqls/sql.jsx'
import C from './Course/C++/C++.jsx'
import C2 from './Course/C2/C2.jsx'
import Access from './Course/Access/Access.jsx';
import Mat1 from './Course/Mat1/Mat1.jsx'
import LineMat from './Course/Mattematika/Mattematika.jsx'
import Mat2 from './Course/Mat2/Mat2.jsx'
import Mat3 from './Course/Mat3/Mats3.jsx'
import Mat4 from './Course/Mat4/Mat4.jsx'
import Login from './pages/Login/Login.jsx'
import { store } from './Logica/reducers/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Provider store={store}>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/pythons' element={<Python />} />
          <Route path='/basic' element={<Basic />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/course' element={<Course />} />
          <Route path='/webSite' element={<WebSite />} />
          <Route path='/androids' element={<Androids />} />
          <Route path='/java' element={<Java />} />
          <Route path='/sql' element={<Sql />} />
          <Route path='/c++' element={<C />} />
          <Route path='/cshap' element={<C2 />} />
          <Route path='/access' element={<Access />} />
          <Route path='/mat' element={<LineMat />} />
          <Route path='/mat1' element={<Mat1 />} />
          <Route path='/mat2' element={<Mat2 />} />
          <Route path='/mat3' element={<Mat3 />} />
          <Route path='/mat4' element={<Mat4 />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>

);

