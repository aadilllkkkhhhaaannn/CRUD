import { createContext } from "react";

const TodoContext = createContext()

export const TodoProvider = ({Children}) => {
    return(

        <TodoContext.Provider value={"343"}>
            {Children}
        </TodoContext.Provider>

    )
}

export default TodoContext