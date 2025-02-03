import React, { useReducer } from "react";

import service from "../services/todos";
import { actionCreator } from "../store/store";

import { reducer, initialState } from "../store/list/reducer";
import { LIST_SET } from "../store/list/actions";

export default function useList() {
  const [stateList, dispatchList] = useReducer(reducer, initialState);

  const getList = async () => {
    try {
      const response = await service.get();
      dispatchList(actionCreator(LIST_SET, response));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await service.delete(id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  return { stateList, getList, deleteItem, dispatchList };
}
