
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const verificarUsuario = async (usuario, clave) => {
  try {
    const ref = doc(db, "usuarios", usuario);
    const snap = await getDoc(ref);
    if (!snap.exists()) return { ok: false, mensaje: "Usuario no encontrado" };
    const data = snap.data();
    if (data.clave === clave) {
      return { ok: true, nombre: data.nombre, rol: data.rol };
    } else {
      return { ok: false, mensaje: "Clave incorrecta" };
    }
  } catch (e) {
    console.error("Firestore error:", e);
    return { ok: false, mensaje: "Error al conectar con Firestore" };
  }
};
