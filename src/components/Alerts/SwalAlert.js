import Swal from 'sweetalert2';

export const SwalAlert = ( title, text, icon ) => (
    Swal.fire({
        icon,
        title,
        text
    })
)
