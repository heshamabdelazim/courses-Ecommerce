"use client"
import React from 'react'
import { myStore } from './store';
import { Provider } from 'react-redux';

function ReduxProvider({children}:{children:React.ReactNode}) {
  /* 
    Big note here
    the difference between TS & TSX extentions of this file is
      when I wrote inside the return or jsx I wrote the same here you see
      but I found error , even I can't import Provider from react-redux
      So I continued along with the video and I found the extention is TSX 
      video link here: https://www.youtube.com/watch?v=xfhQk9CRXbY
  */
  return (
    <Provider store={myStore}>
    {children}
    </Provider>
  )
}

export default ReduxProvider;
