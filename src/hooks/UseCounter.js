import { useState } from "react"

export const UseCounter = (valorInicial =0) => {


    const [contador, SetContador]= useState(valorInicial)

    const incrementar = (valor =1) => {
        SetContador (contador+valor)
    }

    const decremento = (valor =1) => {

        SetContador (contador- valor)
        if (contador<=0){
            SetContador(0)
        } 
    }

    const reset = () =>{
        SetContador(0)
        
    }

  return {
    contador,
    incrementar,
    reset,
    decremento

  }
}
