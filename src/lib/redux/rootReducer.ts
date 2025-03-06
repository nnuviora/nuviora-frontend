"use client";

import { combineReducers } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const dummyReducer = (state = {}, action: any) => {
  return state;
};

const rootReducer = combineReducers({ dummy: dummyReducer });

export default rootReducer;
