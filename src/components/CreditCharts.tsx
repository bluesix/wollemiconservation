import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const speciesCreditsData = [
  { name: "Koala", credits: 1485, fill: "hsl(150, 35%, 30%)" },
  { name: "Rock Wallaby", credits: 1518, fill: "hsl(150, 35%, 35%)" },
  { name: "Large-eared Pied Bat", credits: 1518, fill: "hsl(150, 35%, 40%)" },
  { name: "Hairy Geebung", credits: 1024, fill: "hsl(42, 65%, 50%)" },
  { name: "Red-crowned Toadlet", credits: 828, fill: "hsl(150, 35%, 45%)" },
  { name: "Southern Myotis", credits: 785, fill: "hsl(150, 35%, 50%)" },
  { name: "Barking Owl", credits: 728, fill: "hsl(150, 35%, 55%)" },
  { name: "Eastern Pygmy Possum", credits: 608, fill: "hsl(150, 35%, 60%)" },
  { name: "Sooty Owl", credits: 256, fill: "hsl(150, 35%, 65%)" },
  { name: "Brown Pomaderris", credits: 117, fill: "hsl(42, 65%, 55%)" },
];

const creditTypeData = [
  { name: "Species Credits", value: 8867, fill: "hsl(150, 35%, 30%)" },
  { name: "Ecosystem Credits", value: 2506, fill: "hsl(42, 65%, 58%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-foreground">{payload[0].payload.name}</p>
        <p className="text-sm text-muted-foreground">
          {payload[0].value.toLocaleString()} credits
        </p>
      </div>
    );
  }
  return null;
};

export const CreditCharts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-10">
      {/* Pie Chart - Credit Distribution */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-display">Credit Distribution</CardTitle>
            <CardDescription>
              Species vs Ecosystem credits breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={creditTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {creditTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {creditTypeData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.fill }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bar Chart - Top Species */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-display">Species Credits Ranking</CardTitle>
            <CardDescription>
              Credit allocation by threatened species
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={speciesCreditsData.slice(0, 6)}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis type="number" tick={{ fill: 'hsl(150, 15%, 40%)', fontSize: 12 }} />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100}
                  tick={{ fill: 'hsl(150, 15%, 40%)', fontSize: 11 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="credits" 
                  radius={[0, 4, 4, 0]}
                  fill="hsl(150, 35%, 35%)"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
