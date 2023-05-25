import { useState } from "react";
import { Loading } from "../Components/loading";
import { useGetTodoByIdQuery, useGetTodosQuery } from "../redux/Apis/TodoApi"


export const TodoWithCache = () => {

    const [id, setId] = useState(1);
    const { data: todos, isFetching, refetch } = useGetTodoByIdQuery(id);

    const onClickPrevious = () => {
        if (id === 1) return;

        const newId = id - 1;
        setId(newId);
    }

    const onClickNext = () => {
        const newId = id + 1;
        setId(newId)
    }

    const onClickRefresh = () => {
        refetch()
    }

    return (
        <div className="container mt-2">
            <h1>Todo With Cache - Test</h1>
            <hr />

            {isFetching && (<Loading />)}

            <div
                className="my-4"
                style={{ maxHeight: '500px', overflowY: 'auto' }}
            >
                {JSON.stringify(todos)}
            </div>

            <button className="btn btn-primary" onClick={onClickPrevious}>Previous</button>
            <button className="btn btn-primary ms-2" onClick={onClickNext}>Next</button>
            <button className="btn btn-primary ms-2" onClick={onClickRefresh}>Refresh</button>
        </div>
    )
}
