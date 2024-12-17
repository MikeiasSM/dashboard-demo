"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage }  from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CredentialsSchema } from "../../../schemas/auth"
import { useTransition } from "react"
import { login } from "../../../actions/auth"

export function LoginForm() {

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof CredentialsSchema>>({
    resolver: zodResolver(CredentialsSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof CredentialsSchema>) => {
    startTransition(async () => { 
      //chama função sign in 
      try {
        const resp = await login(values)  
      } catch (error) {
        console.log(error)
      }      
    })
  }

  return (
    <div className="flex flex-col gap-6">    
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">            
            Login
          </CardTitle>          
          <CardDescription>
          Insira seu e-mail abaixo para fazer login em sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                          type="email"
                          placeholder="email@examplo.com"
                          required
                          {...field}
                          disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}                    
                  />
                </div>
                <div className="grid gap-2">                 
                  <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormLabel>Senha</FormLabel>
                          <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">Esqueceu a senha?</a>                                                    
                        </div>
                        <FormControl>
                          <Input
                          type="password"
                          placeholder="Shhh..."
                          required
                          {...field}
                          disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}                    
                  />                  
                </div>
                <Button type="submit" className="w-full " disabled={isPending}>
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Ainda não tem uma conta?{" "}
                <a href="#" className="underline underline-offset-4">
                  Cadastre-se
                </a>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
