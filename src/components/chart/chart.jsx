"use client"

import { LineChart } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart";

export function ChartOverview(){

  const chartData = [
    { month: "Janeiro", valor: 1869.45, quantidade: 1101 },
    { month: "Fevereiro", valor: 3055.99, quantidade: 609 },
    { month: "Março", valor: 2370.41, quantidade: 1120 },
    { month: "Abril", valor: 1739.32, quantidade: 1010 },
    { month: "Maio", valor: 2091.16, quantidade: 981 },
    { month: "Junho", valor: 2140.85, quantidade: 1140 },
  ]
   
  const chartConfig = {
    valor: {
      label: "Valor",
      color: "hsl(var(--chart-1))",
    },
    quantidade: {
      label: "Nº Vendas",
      color: "hsl(var(--chart-2))",
    },
  }

  return(

    <Card className="w-full md:1/2">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-900">
            Vendas x Periodo
          </CardTitle>
          <LineChart className="ml-auto w-5 h-5"/>
        </div>
      </CardHeader>

      <CardContent>

        <ChartContainer config={chartConfig} className="min-h-[100px] max-h-[350px] w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false}/>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0,3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="valor" fill="var(--color-valor)" radius={4}/>
            <Bar dataKey="quantidade" fill="var(--color-quantidade)" radius={4}/>

          </BarChart>

        </ChartContainer>

      </CardContent>

    </Card>
  )
}