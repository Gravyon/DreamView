import * as Yup from "yup";

export const reviewSchema = Yup.object({
    movie: Yup.string()
        .required("Debe haber un nombre"),
    name: Yup.string()
        .required("Debes ingresar un nombre")
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(50, "El nombre no debe superar los 50 caracteres"),
    email: Yup.string("Ingresa tu correo")
        .email("Ingresa un correo válido")
        .required("Correo requerido"),
    review: Yup.string().required("Requerido").min(10, "Al menos 10 caracteres")
});
