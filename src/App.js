import './App.css';
import './index.css';
import React, { useState } from 'react';
import ActionButton from './components/ActionButton';
import DateContainer from "./components/DateContainer";
import ImageContainer from "./components/ImageContainer";
import ArticleHeader from "./components/ArticleHeader";
import Pagination from './components/assets/Pagination';



function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 33;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <ImageContainer />
      <DateContainer />
      <ActionButton />
      <ArticleHeader />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default App;
