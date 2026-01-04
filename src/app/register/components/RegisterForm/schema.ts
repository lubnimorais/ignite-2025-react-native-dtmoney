import { z as zod } from 'zod';

export const schema = zod
  .object({
    name: zod.string('Nome é obrigatório!'),
    email: zod.email('E-mail inválido!'),
    password: zod
      .string('Senha é obrigatória!')
      .min(6, 'A senha deve ter no mínimo 6 caracteres!'),
    confirmPassword: zod
      .string('Senha é obrigatória!')
      .min(6, 'A senha deve ter no mínimo 6 caracteres!'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais!',
    path: ['confirmPassword'], // path of error
  });
