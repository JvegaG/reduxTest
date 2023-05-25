import { ChangeEvent, MouseEvent, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from "../redux/reduxConfig"
import { onChangeId, setInputData, setStartLoading } from '../redux/Slice/todoSlice';
import { getTodoByIdThunk, getTodoThunk } from '../redux/Actions/todoAction';
import { Loading } from '../Components/Loading';


export const Todo = () => {

    const { inputData, request, startLoading, id } = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch();

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        dispatch(setInputData(value))
    }

    const fetchTodoData = async () => {
        dispatch(setStartLoading());
        await dispatch(getTodoThunk());
    }

    const fetchTodoDataById = async (id: number) => {
        dispatch(setStartLoading())
        await dispatch(getTodoByIdThunk(id))

    }

    const onClickPrevious = () => {
        if (id === 1) return;

        const newId = id - 1;
        fetchTodoDataById(newId);
        dispatch(onChangeId(newId));
    }

    const onClickNext = () => {
        const newId = id + 1;
        fetchTodoDataById(newId);
        dispatch(onChangeId(newId));
    }

    const onClickRefresh = () => {
        fetchTodoDataById(id)
    }

/*
    useEffect(() => {
        fetchTodoData();
    }, [])
*/
    return (
        <div className="container mt-2">
            <h1>Todo - Test</h1>
            <hr />

            {startLoading && (<Loading />)}

            <div className="row">
                <div className="col-6">
                    <input
                        onChange={onInputChange}
                        type="text"
                        className="form-control"
                        name="dato"
                        placeholder="Ingrese texto" />
                </div>
                <div className="col-6 align-self-center">
                    <span><strong>Texto escrito: </strong></span>
                    <span>{inputData}</span>
                </div>
            </div>

            <div className="my-4" style={{ maxHeight: '500px', overflowY: 'auto' }}>{JSON.stringify(request)}</div>

            <button className="btn btn-primary" onClick={onClickPrevious}>Previous</button>
            <button className="btn btn-primary ms-2" onClick={onClickNext}>Next</button>
            <button className="btn btn-primary ms-2" onClick={onClickRefresh}>Refresh</button> 

        </div>
    )
}
