import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Expand, Percent, RollerCoaster, Scale, ShoppingBasket, Sparkles, Undo2 } from "lucide-react";
import { ChartOverview } from "@/components/chart/chart"
import { PieChartOverview } from  "@/components/chart/piechart"

export default function Page() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-center pb-5">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-900 select-none">
                Total Faturado
              </CardTitle>
              <DollarSign className="ml-auto h-5 w-5"/>
            </div>                  
            <CardDescription>
              Total de vendas faturadas no período
            </CardDescription>        
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold"> R$ 86.460,12</p>
          </CardContent>        
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-900 select-none">
                Ticket Médio
              </CardTitle>
              <Sparkles className="ml-auto h-5 w-5"/>
            </div>                  
            <CardDescription>
              Ticket Médio das vendas faturadas no período
            </CardDescription>        
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold"> R$ 966,43</p>
          </CardContent>        
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-900 select-none">
                Vendas Faturadas
              </CardTitle>
              <ShoppingBasket className="ml-auto h-5 w-5"/>
            </div>                  
            <CardDescription>
              Número de vendas faturadas no período
            </CardDescription>        
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold"> 19.457</p>
          </CardContent>        
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-x1 text-gray-900 select-none">
                Devoluções
              </CardTitle>
              <Undo2 className="ml-auto h-5 w-5"/>
            </div>                  
            <CardDescription>
              Total de devoluções registradas no período
            </CardDescription>        
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 11.658.45</p>
          </CardContent>        
        </Card>
      </section> 

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center pb-5">
        <ChartOverview/>
        <PieChartOverview/>
      </section>
    </main>
  )
}