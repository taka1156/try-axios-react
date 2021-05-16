import React from 'react';
import Forms from '../components/github/Forms/Forms';
// import Display from '../components/github/Display/Display';
import { getRepos } from '../logic/getRepos';

const GithubRepos = () => {
  // const [selectedLang, setSelectedLang] = useState('');
  //const [result, setResult] = useState([]);

  const getGithubRepos = async (lang) => {
    //setResult([]);
    //setSelectedLang(lang);
    const searchResult = await getRepos(lang);
    console.log(searchResult);
    //setResult([...searchResult]);
  };

  //<Display selectedLang={selectedLang} repos={result} />

  return (
    <>
      <Forms
        setSearchInfo={(userName) => {
          getGithubRepos(userName);
        }}
      />
      
    </>
  );
};

export default GithubRepos;
