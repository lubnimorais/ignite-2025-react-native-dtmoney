import { z as zod } from 'zod';

export const schema = zod.object({
  email: zod.email('E-mail inválido!'),
  password: zod
    .string('Senha é obrigatória!')
    .min(6, 'A senha deve ter no mínimo 6 caracteres!'),
});
