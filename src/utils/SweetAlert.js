import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,

  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const errorSwal = (icon, message) => {
  Toast.fire({
    icon: icon,
    title: message,
    background: "#fff",
    color: "#000",
    iconColor: "#760808",
  });
};

export const successSwal = () => {
  Toast.fire({
    icon: "success",
    title: "You are loggid in !",
    background: "#fff",
    color: "#000",
    iconColor: "#003810",
  });
};
