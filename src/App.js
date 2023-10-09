import logo from './logo.svg';
import './App.css';

import { useEffect, useState, React } from "react"
import axios from "axios";

const baseURL = "https://todo-basic-api.up.railway.app/todos";

function App() {
  const [todo, setTodo] = useState(null);
  const [isTodoNull, setIsTodoNull] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(baseURL)
            .then((response) => {
              console.log(response.data);
              setTodo(response.data);
            })
            .catch((error) => {
              console.log(error);
              setIsTodoNull(true);
            });
    };
    fetchData();
    // axios.get(baseURL).then((response) => {
    //   console.log(response.data);
    //   setTodo(response.data);
    // }).catch((error) => {
    //   console.log(error);
    //   setIsTodoNull(true);
    // });
  }, []);

  // if (!todo) return null;

  return (
    <>
      <div className="min-w-full min-h-[100vh] bg-primary m-0 flex justify-center items-center">
      <div className="todolist min-w-[280px] md:min-w-[500px]">
        <div className="input-wrapper flex">
          <div className="input mr-3">
            <input type="text" id="input" className="bg-white rounded-lg h-[40px] min-w-[220px] md:min-w-[420px] focus:ring-primary-400" autocomplete="off" placeholder="Type your list..." />
          </div>
          <div className="button-submit">
            <button type="submit" className="inline-flex items-center justify-center bg-white text-primary font-semibold rounded-lg min-h-full px-[18px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#576fd9" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/></svg>
              Add
            </button>
          </div>
        </div>

        <div className="todo-wrapper mt-10 bg-white rounded-xl min-h-[400px] min-w-full p-5">
        {
          !isTodoNull ? 
          todo?.map((data, index) => {
          return (
            <div className="header">
              <h3 className="date-info text-black font-semibold">{data?.title}</h3>
              <small className="text-primary-400 font-semibold">3 Tasks</small>
            </div>
          )}) :
          <div>Belum ada Todo</div>
        }
          
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
