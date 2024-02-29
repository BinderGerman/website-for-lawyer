import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  console.log(watch("example"));

  return (
    <section className="w-full flex flex-col items-center mb-10">
      <h3
        id="form"
        className="text-center font-yeseva font-extrabold text-[#3F4D39] text-3xl mb-4"
      >
        Contacto
      </h3>
      <div className="max-w-[350px] flex flex-col bg-[#3F4D39] font-choco p-8 rounded-lg shadow-lg">
        <form
          action="https://formsubmit.co/bindergerman@gmail.com"
          method="POST"
          /* onSubmit={onSubmit} */
        >
          <label
            className="text-[#F1EDEC] text-base font-extrabold block mt-4"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="w-full p-2 rounded mb-2"
            name="nombre"
            type="text"
            placeholder="Nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Máximo 20 caracteres",
              },
            })}
          />
          {errors.nombre && (
            <span className="font-extrabold text-sm text-[#dd3d3d] bg-[#F1EDEC] p-1 rounded">
              {errors.nombre.message}
            </span>
          )}

          <label
            className="text-[#F1EDEC] text-base font-extrabold block mt-4"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <input
            className="w-full p-2 rounded mb-2"
            name="apellido"
            type="text"
            placeholder="Apellido"
            {...register("apellido", {
              required: {
                value: true,
                message: "Apellido requerido",
              },
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres",
              },
              maxLength: {
                value: 25,
                message: "Máximo 25 caracteres",
              },
            })}
          />
          {errors.apellido && (
            <span className="font-extrabold text-sm text-[#dd3d3d] bg-[#F1EDEC] p-1 rounded">
              {errors.apellido.message}
            </span>
          )}

          <label
            className="text-[#F1EDEC] text-base font-extrabold block mt-4"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full p-2 rounded mb-2"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo requerido",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.email && (
            <span className="font-extrabold text-sm text-[#dd3d3d] bg-[#F1EDEC] p-1 rounded">
              {errors.email.message}
            </span>
          )}

          <label
            className="text-[#F1EDEC] text-base font-extrabold block mt-4"
            htmlFor="celular"
          >
            Celular
          </label>
          <input
            className="w-full p-2 rounded mb-2"
            name="celular"
            type="text"
            placeholder="Sin 0 y sin 15. Ej: 2804555555"
            {...register("celular")}
          />
          <label
            className="text-[#F1EDEC] text-base font-extrabold block mt-4"
            htmlFor="consulta"
          >
            Consulta
          </label>
          <textarea
            className="w-full p-2 rounded mb-2"
            name="consulta"
            type="text"
            placeholder="Escriba su consulta aquí"
            id=""
            cols="30"
            rows="5"
            {...register("consulta")}
          ></textarea>
          <input
            className="w-full bg-[#DBB7AB] font-choco text-xl font-extrabold text-[#F1EDEC] rounded-md mt-8 p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-[#eeb6a4]"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};
