import type { OrthographyResponse } from "@interfaces/orthography.response";
import { environment } from "environments/environment.development";

export const orthographyUseCase = async ( prompt: string ) => {

    try{

      const resp = await fetch(`${ environment.backendAPI }/orthography-check`,{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
      });

      if ( !resp.ok ) throw new Error('No se pudo relaizar la correción');
      const data = await resp.json() as OrthographyResponse;

      return{
        ok: true,
        ...data,
      }
    } catch (error){
      console.log(error);
      return{
        ok: false,
        userScore: 0,
        errors: [],
        message: 'No se pudo realizar la correción'
      }
    }
}
