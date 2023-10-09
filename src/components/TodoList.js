export default function TodoList({ isTodoNull, todo }) {
   return (
     <>
      <div className="todo-wrapper mt-10 bg-white rounded-xl min-h-[400px] min-w-full p-5">
        {
          !isTodoNull ? 
          todo?.map((data, index) => {
          return (
            <div className="header">
              <h3 className="date-info text-black font-semibold">{data.description}</h3>
              <small className="text-primary-400 font-semibold">3 Tasks</small>
            </div>
          )}) :
          <div>Belum ada Todo</div>
        }
          
        </div>
     </>
   )
 }
 