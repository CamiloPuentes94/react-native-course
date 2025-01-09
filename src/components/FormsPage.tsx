import { useForm } from "react-hook-form"

type FormInputs = {
  email: string
  password: string
}

export const FormsPage = () => {

  const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
    defaultValues: {
      email: 'jcpsandoval13@gmail.com',
      password: '123456'
    }
  })

  const onSubmit = (data: FormInputs) => {
    console.log({ data })
  }

  console.log(watch('email'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Formularios</h3>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="Email" {...register('email', { required: true })} />
          <input type="text" placeholder="Password" {...register('password')} />

          <button type="submit">Ingresar</button>
        </div>

      </form>


      <code>
        {JSON.stringify(formState, null, 2)}
      </code>
    </>
  )
}
