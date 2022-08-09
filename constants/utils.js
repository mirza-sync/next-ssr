export const isSSR = () =>{
  return typeof window === 'undefined'
}

export const RakitaOptions = { context: { clientName:"rakita" }}