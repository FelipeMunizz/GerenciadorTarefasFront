import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://localhost:7140/api/',
});

const publicRoutes = ['Usuarios/Login', 'Usuarios/Registrar','Usuarios/RedefinirSenha', 'Usuarios/EnviarUsuario'];

axiosConfig.interceptors.request.use(
  config => {
    if (!publicRoutes.includes(config.url)) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosConfig;