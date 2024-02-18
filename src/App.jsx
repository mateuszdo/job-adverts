import {useState, useEffect} from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer'

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setJobs(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if(isLoading) {
    return <section className='jobs-center'>
      <div className='loading'></div>
    </section>
  }
  if(isError) {
    return <section className='jobs-center'>
    <h2>There was an error</h2>
  </section>
  }

  return <section className='jobs-center'>
      <BtnContainer 
        jobs={jobs} 
        currentItem={currentItem} 
        setCurrentItem={setCurrentItem}/>
      <JobInfo jobs={jobs} currentItem={currentItem}/>
    </section>

}
export default App;
