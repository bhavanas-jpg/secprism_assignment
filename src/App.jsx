import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Project from './pages/Project';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './pages/ProjectDetails';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Project/>}/>
      <Route path="/projectDetails/:id" element={<ProjectDetails />}/>
    </Routes>
    </>
  )
}

export default App
