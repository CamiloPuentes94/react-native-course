
export const BasicTypes = () => {

  const name: string = 'Camilo';
  const age: number = 30;
  const isActive: boolean = true;

  const powers: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

  return (
    <>
      <h3>Tipos basicos</h3>

      {name} {age} {(isActive) ? 'Activo' : 'Inactivo'}
      <br />
      {powers.join(', ')}
    </>
  )
}
