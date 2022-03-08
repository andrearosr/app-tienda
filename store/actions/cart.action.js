import { API_URL } from '../../constants/Database';
export const CONFIRM_CART = 'CONFIRM_CART'

export const confirmCart = (payload, total) => {
  return async dispatch => {
    try {
      // Ejecutar la petición
      // Enviando los datos del carrito y guardandolos en firebase
      const response = await fetch(`${API_URL}/ordenes.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items: payload,
          total,
        })
      });

      // Recibir los resultados de la petición
      const result = await response.json();
      console.log(result)

      // Continuar el flujo llamando a dispatch
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      })
    } catch (error) {
      console.log(error.message)
      dispatch({
        type: CONFIRM_CART,
        confirm: false,
        error: error.message,
      })
    }
  }
}