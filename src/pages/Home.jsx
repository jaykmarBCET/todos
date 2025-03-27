import ListTask from '../components/ListTask'
import InputTask from '../components/InputTask'

function Home() {
  

  return <div className="flex flex-col">
    <div className="flex flex-col my-3">
      <h1 className="text-2xl px-4 p-2 font-bold  text-center">Develop an Advanced React To-Do Application with API Integration</h1>
    </div>
    <div className="flex flex-col">
      <div>
        <InputTask/> 
      </div>
      <div className='overflow-auto'><ListTask/></div>
    </div>
  </div>;
}

export default Home;
