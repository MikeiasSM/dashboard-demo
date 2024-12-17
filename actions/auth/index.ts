"use server"

import type { z } from "zod"
import { CredentialsSchema } from "../../schemas/auth"
import { error } from "console"
import { sign } from "crypto"
import { signIn } from "../../auth"
import { AuthError, CredentialsSignin } from "next-auth"

export const login = async (credentials: z.infer<typeof CredentialsSchema>) => {
  const validDados = await CredentialsSchema.safeParse(credentials)

  if (validDados.success) {
    try {      
      const resp = await signIn("credentials", 
        {
          ...validDados.data,
          redirect: true,
          redirectTo: "http://localhost:3001/"
        },
      )
    } catch (error) {
      if (error instanceof AuthError) {
          if (error instanceof CredentialsSignin) {
            return {
              error: error.code
            }
          }
      }
      return {
        error: "Erro do Authjs"
      }
    }
  }

  return {
    error: "Dados Inválidos"
  }


}