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
    reset();
  });

  return (
    <div className="w-full flex justify-center lg:justify-start">
      <div className="w-full max-w-[400px] lg:max-w-[450px] bg-[#3F4D39] font-choco p-6 md:p-8 rounded-lg shadow-xl">
        <h4 className="text-center font-yeseva font-bold text-[#F1EDEC] text-2xl md:text-3xl mb-6">
          Envíanos tu consulta
        </h4>
        
        <form
          action="https://formsubmit.co/estudiojuridicoroblesdaniela@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="text-[#F1EDEC] text-sm md:text-base font-extrabold block mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-[#DBB7AB] focus:outline-none transition-all duration-200"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
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
                <span className="font-extrabold text-xs text-[#dd3d3d] bg-[#F1EDEC] p-1 rounded mt-1 block">
                  {errors.nombre.message}
                </span>
              )}
            </div>

            <div>
              <label
                className="text-[#F1EDEC] text-sm md:text-base font-extrabold block mb-2"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-[#DBB7AB] focus:outline-none transition-all duration-200"
                name="apellido"
                type="text"
                placeholder="Tu apellido"
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
                <span className="font-extrabold text-xs text-[#dd3d3d] bg-[#F1EDEC] p-1 rounded mt-1 block">
                  {errors.apellido.message}
                </span>
              )}
            </div>
          </div>

          <div>
            <label
              className="text-[#F1EDEC] text-sm md:text-base font-extrabold block mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-[#DBB7AB] focus:outline-none transition-all duration-200"
              name="email"
              type="email"
              placeholder="tu@email.com"
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
              <span className="font-extrabold text-xs text-[#dd3d3d] bg-[#F1EDEC] p-1 rounded mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label
              className="text-[#F1EDEC] text-sm md:text-base font-extrabold block mb-2"
              htmlFor="celular"
            >
              Celular
            </label>
            <input
              className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-[#DBB7AB] focus:outline-none transition-all duration-200"
              name="celular"
              type="tel"
              placeholder="2804555555 (sin 0 y sin 15)"
              {...register("celular")}
            />
          </div>

          <div>
            <label
              className="text-[#F1EDEC] text-sm md:text-base font-extrabold block mb-2"
              htmlFor="consulta"
            >
              Consulta
            </label>
            <textarea
              className="w-full p-3 rounded border-0 focus:ring-2 focus:ring-[#DBB7AB] focus:outline-none transition-all duration-200 resize-none"
              name="consulta"
              placeholder="Describe tu consulta aquí..."
              rows="4"
              {...register("consulta")}
            ></textarea>
          </div>

          <button
            className="w-full bg-[#DBB7AB] font-choco text-lg md:text-xl font-extrabold text-[#F1EDEC] rounded-md mt-6 p-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-[#eeb6a4] focus:ring-2 focus:ring-[#F1EDEC] focus:outline-none"
            type="submit"
          >
            Enviar Consulta
          </button>
        </form>
      </div>
    </div>
  );
};
