import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  <div className="min-w-full min-h-[100vh] bg-primary m-0 flex justify-center items-center">
    <div className="todolist min-w-[280px] md:max-w-[500px]">
      <div className="input-wrapper flex">
        <div className="input mr-3">
          <input type="text" id="input" className="p-2 bg-white rounded-lg h-[40px] min-w-[220px] md:w-[400px] focus:ring-primary-400" autocomplete="off" placeholder="Add new list..." />
        </div>
        <div className="button-submit">
          <button type="submit" className="inline-flex items-center justify-center bg-white text-primary font-semibold rounded-lg min-h-full px-[18px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#576fd9" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"/></svg>
            Add
          </button>
        </div>
      </div>

      <div className="todo-wrapper mt-10 bg-white rounded-xl h-[400px] min-w-full p-5">
        <div className="todo-header mb-4">
          <h3 className="date-info text-black font-semibold">Monday, 09 Oct 2023</h3>
          <small className="text-primary-400 font-semibold">3 Tasks</small>
        </div>
        <div className="todo-body h-[300px] overflow-y-auto">
          {/* unchecked list */}
          <div className="todo-item bg-white rounded-lg w-full min-h-[30px] inline-flex items-center hover:bg-gray hover:cursor-pointer p-3 mb-2">
            <svg className="stroke-primary-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="none" stroke-width="4"/></svg>
            <span className=" text-sm">halo</span>
          </div>
          {/* checked list */}
          <div className="todo-item bg-white rounded-lg w-full min-h-[30px] inline-flex items-center hover:bg-gray hover:cursor-pointer p-3 mb-2">
            <svg className="stroke-primary-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><g fill="none" stroke-linejoin="round" stroke-width="4"><path d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4A19.938 19.938 0 0 0 9.858 9.858A19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"/><path stroke-linecap="round" d="m16 24l6 6l12-12"/></g></svg>
            <span className="text-sm line-through">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
