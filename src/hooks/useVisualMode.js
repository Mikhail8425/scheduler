import { useState } from "react";

export default function useVisualMode(initial) {

  console.log('useVisualMode called');
  console.log('arg: initial', initial);
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //transition from mode to mode when trying to make an appointment
  function transition(nextMode, replace = false) {
    console.log('transition called');
    if(replace){
      setHistory(prev => prev.slice(0, -1));
      setHistory(prev => [...prev, nextMode]);
      }else{
        setHistory(prev => [...prev, nextMode]); 
      }
      setMode(nextMode);
  }
  //called when cancel button is clicked when trying to make an appointment
  function back() {
    console.log('back called');
    if(history.length > 1) {
      setHistory(history.slice(0, -1));
      setMode(history[history.length-2]);
    }
  }

  return { mode, transition, back };
}