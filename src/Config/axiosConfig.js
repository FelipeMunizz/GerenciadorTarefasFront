import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://localhost:7140/api/',
});

// Rotas que não exigem autenticação
const publicRoutes = ['Usuarios/Login', 'Usuarios/Registrar','Usuarios/RedefinirSenha'];

// Adiciona o token de autorização a todas as requisições que não são rotas públicas
axiosConfig.interceptors.request.use(
  config => {
    if (!publicRoutes.includes(config.url)) { // Verifica se a rota atual não está na lista de rotas públicas
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