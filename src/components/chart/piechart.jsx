"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { payment: "dinheiro", valor: 2756.45, fill: "var(--color-dinheiro)" },
  { payment: "pix", valor: 2001.45, fill: "var(--color-pix)" },
  { payment: "boleto", valor: 873.10, fill: "var(--color-boleto)" },
  { payment: "debito", valor: 1730.97, fill: "var(--color-debito)" },
  { payment: "credito", valor: 1900.45, fill: "var(--color-credito)" },
]

const chartConfig = {
  valor: {
    label: "valor",
  },
  dinheiro: {
    label: "Dinheiro",
    color: "hsl(var(--chart-1))",
  },
  pix: {
    label: "Pix",
    color: "hsl(var(--chart-2))",
  },
  boleto: {
    label: "Boleto",
    color: "hsl(var(--chart-3))",
  },
  debito: {
    label: "Cartão Débito",
    color: "hsl(var(--chart-4))",
  },
  credito: {
    label: "Cartão Crédito",
    color: "hsl(var(--chart-5))",
  },
}

export function PieChartOverview() {
  const totalvalor = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.valor, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Volume de Vendas por Forma de Pagamento</CardTitle>
        <CardDescription>Últimos 30 dias</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="valor"
              nameKey="payment"
              innerRadius={60}
              strokeWidth={1}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalvalor.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          valor
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          5.2% maior que o mês anterior <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
