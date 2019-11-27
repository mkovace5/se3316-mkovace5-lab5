// src/app/auth/auth.config.ts
import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'KRtsgw9UoC9lNhdTd6fp7Fu9FSTKB0dL',
  CLIENT_DOMAIN: 'dev-pkv-ecrh.auth0.com', // e.g., you.auth0.com
  AUDIENCE: 'http://localhost:8080/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile'
};